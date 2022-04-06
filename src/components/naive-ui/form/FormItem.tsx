import {
  defineComponent,
  computed,
  toRef,
  PropType,
  CSSProperties,
  ExtractPropTypes,
  ref,
  provide,
  inject,
  watch,
  Transition,
  onMounted,
  LabelHTMLAttributes
} from 'vue';
import Schema, {
  ValidateError,
  RuleItem,
  ValidateOption
} from 'async-validator';
import { get } from 'lodash-es';
import { createId } from 'seemly';
import { formItemInjectionKey } from 'naive-ui/lib/_mixins/use-form-item';
import { ThemeProps, useConfig, useTheme, useThemeClass } from 'naive-ui/lib/_mixins';
import {
  warn,
  createKey,
  useInjectionInstanceCollection,
  keysOf
} from 'naive-ui/lib/_utils';
import type { ExtractPublicPropTypes } from 'naive-ui/lib/_utils';
// import { formLight, FormTheme } from 'naive-ui/lib/form/styles';
import formLight, { FormTheme } from './light';

import { formItemMisc, formItemSize, formItemRule } from 'naive-ui/lib/form/src/utils';
import Feedbacks from 'naive-ui/lib/form/src/Feedbacks';
import {
  ShouldRuleBeApplied,
  FormItemRule,
  LabelAlign,
  LabelPlacement,
  ValidateCallback,
  ValidationTrigger,
  FormItemRuleValidatorParams,
  FormItemRuleValidator,
  FormItemValidateOptions,
  FormItemInst,
  FormItemInternalValidate
} from 'naive-ui/lib/form/src/interface';
import { formInjectionKey, formItemInstsInjectionKey } from 'naive-ui/lib/form/src/context';
import style from './styles/form-item.cssr';

export const formItemProps = {
  ...(useTheme.props as ThemeProps<FormTheme>),
  label: String,
  labelWidth: [Number, String] as PropType<string | number>,
  labelStyle: [String, Object] as PropType<CSSProperties | string>,
  labelAlign: String as PropType<LabelAlign>,
  labelPlacement: String as PropType<LabelPlacement>,
  path: String,
  first: Boolean,
  rulePath: String,
  required: Boolean,
  showRequireMark: {
    type: Boolean as PropType<boolean | undefined>,
    default: undefined
  },
  requireMarkPlacement: String as PropType<'left' | 'right' | 'right-hanging'>,
  showFeedback: {
    type: Boolean as PropType<boolean | undefined>,
    default: undefined
  },
  rule: [Object, Array] as PropType<FormItemRule | FormItemRule[]>,
  size: String as PropType<'small' | 'medium' | 'large'>,
  ignorePathChange: Boolean,
  validationStatus: String as PropType<'error' | 'warning' | 'success'>,
  feedback: String,
  showLabel: {
    type: Boolean as PropType<boolean | undefined>,
    default: undefined
  },
  labelProps: Object as PropType<LabelHTMLAttributes>,
  hideHelp: Boolean,
  hideFeedback: {
    type: Boolean,
    default: false,
  }
} as const;

export type FormItemSetupProps = ExtractPropTypes<typeof formItemProps>
export type FormItemProps = ExtractPublicPropTypes<typeof formItemProps>
export const formItemPropKeys = keysOf(formItemProps);

// Wrapped Validator is to be passed into async-validator
// In their source code, validator can be a asyncValidator.
// asyncValidator will non-promise return value will be ignored.
// We need to deal with some type quirks.
type WrappedValidator = (
  ...args: FormItemRuleValidatorParams
) => boolean | Error | Error[] | Promise<void> | undefined

// wrap sync validator
function wrapValidator (
  validator: FormItemRuleValidator,
  async: boolean
): WrappedValidator {
  return (...args: Parameters<FormItemRuleValidator>) => {
    try {
      const validateResult = validator(...args);
      if (
        (!async &&
          (typeof validateResult === 'boolean' ||
            validateResult instanceof Error ||
            Array.isArray(validateResult))) || // Error[]
        (validateResult as any)?.then
      ) {
        return validateResult as any;
      } else if (validateResult === undefined) {
        return true;
      } else {
        warn(
          'form-item/validate',
          `You return a ${typeof validateResult} ` +
            'typed value in the validator method, which is not recommended. Please use ' +
            (async ? '`Promise`' : '`boolean`, `Error` or `Promise`') +
            ' typed value instead.'
        );
        return true;
      }
    } catch (err) {
      warn(
        'form-item/validate',
        'An error is catched in the validation, ' +
          'so the validation won\'t be done. Your callback in `validate` method of ' +
          '`n-form` or `n-form-item` won\'t be called in this validation.'
      );
      console.error(err);
      // If returns undefined, async-validator won't trigger callback
      // so the result will be abandoned, which means not true and not false
      return undefined;
    }
  };
}

export default defineComponent({
  name: 'FormItem',
  props: formItemProps,
  setup (props) {
    useInjectionInstanceCollection(
      formItemInstsInjectionKey,
      'formItems',
      toRef(props, 'path')
    );
    const { mergedClsPrefixRef, inlineThemeDisabled } = useConfig(props);
    const NForm = inject(formInjectionKey, null);
    const formItemSizeRefs = formItemSize(props);
    const formItemMiscRefs = formItemMisc(props);
    const { validationErrored: validationErroredRef } = formItemMiscRefs;
    const { mergedRequired: mergedRequiredRef, mergedRules: mergedRulesRef } =
      formItemRule(props);
    const { mergedSize: mergedSizeRef } = formItemSizeRefs;
    const {
      mergedLabelPlacement: labelPlacementRef,
      mergedLabelAlign: labelTextAlignRef
    } = formItemMiscRefs;
    const explainsRef = ref<string[]>([]);
    const feedbackIdRef = ref(createId());
    const hasFeedbackRef = computed(() => {
      const { feedback } = props;
      if (feedback !== undefined && feedback !== null) return true;
      return explainsRef.value.length;
    });
    const mergedDisabledRef = NForm
      ? toRef(NForm.props, 'disabled')
      : ref(false);
    const themeRef = useTheme(
      'Form',
      '-form-item-help',
      style,
      formLight,
      props,
      mergedClsPrefixRef
    );
    watch(toRef(props, 'path'), () => {
      if (props.ignorePathChange) return;
      restoreValidation();
    });
    function restoreValidation (): void {
      explainsRef.value = [];
      validationErroredRef.value = false;
      if (props.feedback) {
        feedbackIdRef.value = createId();
      }
    }
    function handleContentBlur (): void {
      void internalValidate('blur');
    }
    function handleContentChange (): void {
      void internalValidate('change');
    }
    function handleContentFocus (): void {
      void internalValidate('focus');
    }
    function handleContentInput (): void {
      void internalValidate('input');
    }
    // Resolve : ()
    // Reject  : (errors: AsyncValidator.ValidateError[])
    async function validate (options: FormItemValidateOptions): Promise<void>
    async function validate (
      trigger?: string | null,
      callback?: ValidateCallback
    ): Promise<void>
    async function validate (
      options?: string | null | FormItemValidateOptions,
      callback?: ValidateCallback
    ): Promise<void> {
      /** the following code is for compatibility */
      let trigger: ValidationTrigger | string | undefined;
      let validateCallback: ValidateCallback | undefined;
      let shouldRuleBeApplied: ShouldRuleBeApplied | undefined;
      let asyncValidatorOptions: {} | undefined;
      if (typeof options === 'string') {
        trigger = options;
        validateCallback = callback;
      } else if (options !== null && typeof options === 'object') {
        trigger = options.trigger;
        validateCallback = options.callback;
        shouldRuleBeApplied = options.shouldRuleBeApplied;
        asyncValidatorOptions = options.options;
      }
      return await new Promise((resolve, reject) => {
        void internalValidate(
          trigger,
          shouldRuleBeApplied,
          asyncValidatorOptions
        ).then(({ valid, errors }) => {
          if (valid) {
            if (validateCallback) {
              validateCallback();
            }
            resolve();
          } else {
            if (validateCallback) {
              validateCallback(errors);
            }
            reject(errors);
          }
        });
      });
    }
    const internalValidate: FormItemInternalValidate = async (
      trigger: ValidationTrigger | string | null = null,
      shouldRuleBeApplied: ShouldRuleBeApplied = () => true,
      options: ValidateOption = {
        suppressWarning: true
      }
    ): Promise<{
      valid: boolean
      errors?: ValidateError[]
    }> => {
      const { path } = props;
      if (!options) {
        options = {};
      } else {
        if (!options.first) options.first = props.first;
      }
      const { value: rules } = mergedRulesRef;
      const value = NForm ? get(NForm.props.model, path || '') : undefined;
      const activeRules = (
        !trigger
          ? rules
          : rules.filter((rule) => {
            // if (rule.trigger === undefined) return true
            if (Array.isArray(rule.trigger)) {
              return rule.trigger.includes(trigger);
            } else {
              return rule.trigger === trigger;
            }
          })
      )
        .filter(shouldRuleBeApplied)
        .map((rule) => {
          const shallowClonedRule = Object.assign({}, rule);
          if (shallowClonedRule.validator) {
            shallowClonedRule.validator = wrapValidator(
              shallowClonedRule.validator,
              false
            );
          }
          if (shallowClonedRule.asyncValidator) {
            shallowClonedRule.asyncValidator = wrapValidator(
              shallowClonedRule.asyncValidator,
              true
            ) as any;
          }
          return shallowClonedRule;
        });
      if (!activeRules.length) {
        return await Promise.resolve({
          valid: true
        });
      }
      const mergedPath = path ?? '__n_no_path__';
      const validator = new Schema({ [mergedPath]: activeRules as RuleItem[] });
      return await new Promise((resolve) => {
        void validator.validate(
          { [mergedPath]: value },
          options,
          (errors, _) => {
            if (errors?.length) {
              explainsRef.value = errors.map(
                (error: ValidateError) => error?.message || ''
              );
              validationErroredRef.value = true;
              resolve({
                valid: false,
                errors
              });
            } else {
              restoreValidation();
              resolve({
                valid: true
              });
            }
          }
        );
      });
    };
    provide(formItemInjectionKey, {
      path: toRef(props, 'path'),
      disabled: mergedDisabledRef,
      mergedSize: formItemSizeRefs.mergedSize,
      mergedValidationStatus: formItemMiscRefs.mergedValidationStatus,
      restoreValidation,
      handleContentBlur,
      handleContentChange,
      handleContentFocus,
      handleContentInput
    });
    const exposedRef: FormItemInst = {
      validate,
      restoreValidation,
      internalValidate
    };
    const labelElementRef = ref<null | HTMLLabelElement>(null);
    onMounted(() => {
      if (labelElementRef.value !== null) {
        NForm?.deriveMaxChildLabelWidth(
          Number(getComputedStyle(labelElementRef.value).width.slice(0, -2))
        );
      }
    });
    const cssVarsRef = computed(() => {
      const { value: size } = mergedSizeRef;
      const { value: labelPlacement } = labelPlacementRef;
      const direction: 'vertical' | 'horizontal' =
        labelPlacement === 'top' ? 'vertical' : 'horizontal';
      const {
        common: { cubicBezierEaseInOut },
        self: {
          labelTextColor,
          asteriskColor,
          lineHeight,
          feedbackTextColor,
          feedbackTextColorWarning,
          feedbackTextColorError,
          feedbackPadding,
          [createKey('labelHeight', size)]: labelHeight,
          [createKey('blankHeight', size)]: blankHeight,
          [createKey('feedbackFontSize', size)]: feedbackFontSize,
          [createKey('feedbackHeight', size)]: feedbackHeight,
          [createKey('labelPadding', direction)]: labelPadding,
          [createKey('labelTextAlign', direction)]: labelTextAlign,
          [createKey(createKey('labelFontSize', labelPlacement), size)]:
            labelFontSize
        }
      } = themeRef.value;

      let mergedLabelTextAlign = labelTextAlignRef.value ?? labelTextAlign;
      if (labelPlacement === 'top') {
        mergedLabelTextAlign =
          mergedLabelTextAlign === 'right' ? 'flex-end' : 'flex-start';
      }

      const cssVars = {
        '--n-bezier': cubicBezierEaseInOut,
        '--n-line-height': lineHeight,
        '--n-blank-height': blankHeight,
        '--n-label-font-size': labelFontSize,
        '--n-label-text-align': mergedLabelTextAlign,
        '--n-label-height': labelHeight,
        '--n-label-padding': labelPadding,
        '--n-asterisk-color': asteriskColor,
        '--n-label-text-color': labelTextColor,
        '--n-feedback-padding': feedbackPadding,
        '--n-feedback-font-size': feedbackFontSize,
        '--n-feedback-height': feedbackHeight,
        '--n-feedback-text-color': feedbackTextColor,
        '--n-feedback-text-color-warning': feedbackTextColorWarning,
        '--n-feedback-text-color-error': feedbackTextColorError
      };
      return cssVars;
    });
    const themeClassHandle = useThemeClass(
      'form-item',
      computed(() => {
        return `${mergedSizeRef.value[0]}${labelPlacementRef.value[0]}${
          labelTextAlignRef.value?.[0] || ''
        }`;
      }),
      cssVarsRef,
      props
    );
    return {
      labelElementRef,
      mergedClsPrefix: mergedClsPrefixRef,
      mergedRequired: mergedRequiredRef,
      hasFeedback: hasFeedbackRef,
      feedbackId: feedbackIdRef,
      explains: explainsRef,
      ...formItemMiscRefs,
      ...formItemSizeRefs,
      ...exposedRef,
      cssVars: inlineThemeDisabled ? undefined : cssVarsRef,
      themeClass: themeClassHandle?.themeClass,
      onRender: themeClassHandle?.onRender
    };
  },
  render () {
    const {
      $slots,
      hasFeedback,
      mergedClsPrefix,
      mergedShowLabel,
      mergedShowRequireMark,
      mergedRequireMarkPlacement,
      onRender,
      hideHelp,
      hideFeedback,
    } = this;
    const renderedShowRequireMark =
      mergedShowRequireMark !== undefined
        ? mergedShowRequireMark
        : this.mergedRequired;
    onRender?.();
    return (
      <div
        class={[
          `${mergedClsPrefix}-form-item`,
          this.themeClass,
          `${mergedClsPrefix}-form-item--${this.mergedSize}-size`,
          `${mergedClsPrefix}-form-item--${this.mergedLabelPlacement}-labelled`,
          !mergedShowLabel && `${mergedClsPrefix}-form-item--no-label`
        ]}
        style={this.cssVars as CSSProperties}
      >
        {mergedShowLabel && (this.label || $slots.label) ? (
          <label
            {...this.labelProps}
            class={[
              this.labelProps?.class,
              `${mergedClsPrefix}-form-item-label`
            ]}
            style={this.mergedLabelStyle as any}
            ref="labelElementRef"
          >
            {/* 'left' | 'right' | undefined */}
            {mergedRequireMarkPlacement !== 'left'
              ? $slots.label
                ? $slots.label()
                : this.label
              : null}
            {renderedShowRequireMark ? (
              <span class={`${mergedClsPrefix}-form-item-label__asterisk`}>
                {mergedRequireMarkPlacement !== 'left' ? '\u00A0*' : '*\u00A0'}
              </span>
            ) : (
              mergedRequireMarkPlacement === 'right-hanging' && (
                <span
                  class={`${mergedClsPrefix}-form-item-label__asterisk-placeholder`}
                >
                  {'\u00A0*'}
                </span>
              )
            )}
            {mergedRequireMarkPlacement === 'left'
              ? $slots.label
                ? $slots.label()
                : this.label
              : null}
          </label>
        ) : null}
        <div
          class={[
            `${mergedClsPrefix}-form-item-blank`,
            this.mergedValidationStatus &&
              `${mergedClsPrefix}-form-item-blank--${this.mergedValidationStatus}`
          ]}
        >
          {$slots.default ? $slots.default() : null}
        </div>
        {this.mergedShowFeedback && hasFeedback && false === hideFeedback ? (
          <div
            key={this.feedbackId}
            class={`${mergedClsPrefix}-form-item-feedback-wrapper`}
          >
            <Transition name="fade-down-transition" mode="out-in">
              {{
                default: () => {
                  const feedbacks = (
                    <Feedbacks
                      clsPrefix={mergedClsPrefix}
                      explains={this.explains}
                      feedback={this.feedback}
                    >
                      {{ default: $slots.feedback }}
                    </Feedbacks>
                  );
                  const { hasFeedback, mergedValidationStatus } = this;
                  return hasFeedback || $slots.feedback ? (
                    mergedValidationStatus === 'warning' ? (
                      <div
                        key="controlled-warning"
                        class={`${mergedClsPrefix}-form-item-feedback ${mergedClsPrefix}-form-item-feedback--warning`}
                      >
                        {feedbacks}
                      </div>
                    ) : mergedValidationStatus === 'error' ? (
                      <div
                        key="controlled-error"
                        class={`${mergedClsPrefix}-form-item-feedback ${mergedClsPrefix}-form-item-feedback--error`}
                      >
                        {feedbacks}
                      </div>
                    ) : mergedValidationStatus === 'success' ? (
                      <div
                        key="controlled-success"
                        class={`${mergedClsPrefix}-form-item-feedback ${mergedClsPrefix}-form-item-feedback--success`}
                      >
                        {feedbacks}
                      </div>
                    ) : (
                      <div
                        key="controlled-default"
                        class={`${mergedClsPrefix}-form-item-feedback`}
                      >
                        {feedbacks}
                      </div>
                    )
                  ) : null;
                }
              }}
            </Transition>
          </div>
        ) : null}
        {
          $slots.help ? (
            <div class={`${mergedClsPrefix}-form-item-help-wrapper`}>
              <div class={`${mergedClsPrefix}-form-item-help`}>
                {$slots.help()}
              </div>
            </div>
          ) : this.mergedShowFeedback && hasFeedback || hideHelp ? null : (
            <div class={`${mergedClsPrefix}-form-item-help-wrapper`}></div>
          )
        }
      </div>
    );
  }
});
