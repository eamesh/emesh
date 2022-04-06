import {
  // h,
  defineComponent,
  ref,
  PropType,
  CSSProperties,
  computed,
  nextTick,
  toRef,
  // watchEffect,
  VNodeChild
} from 'vue';
import { useMergedState } from 'vooks';
import commonProps from 'naive-ui/lib/tag/src/common-props';
import { AddIcon } from 'naive-ui/lib/_internal/icons';
import { NButton } from 'naive-ui/lib/button';
import { NSpace } from 'naive-ui/lib/space';
import type { InputInst, InputProps } from 'naive-ui/lib/input';
import { NInput } from 'naive-ui/lib/input';
import { NTag } from 'naive-ui/lib/tag';
import { NBaseIcon } from 'naive-ui/lib/_internal';
import {
  useTheme,
  useFormItem,
  useLocale,
  useConfig,
  useThemeClass
} from 'naive-ui/lib/_mixins';
import type { ThemeProps } from 'naive-ui/lib/_mixins';
import { call, smallerSize } from 'naive-ui/lib/_utils';
import type { MaybeArray, ExtractPublicPropTypes } from 'naive-ui/lib/_utils';
import { dynamicTagsLight } from 'naive-ui/lib/dynamic-tags/styles';
import type { DynamicTagsTheme } from 'naive-ui/lib/dynamic-tags/styles';
import type {
  OnUpdateValue,
  DynamicTagsOption,
  OnCreate,
  OnUpdateValueImpl
} from './interface';
import style from 'naive-ui/lib/dynamic-tags/src/styles/index.cssr';

const dynamicTagsProps = {
  ...(useTheme.props as ThemeProps<DynamicTagsTheme>),
  ...commonProps,
  closable: {
    type: Boolean,
    default: true
  },
  defaultValue: {
    type: Array as PropType<Array<string | DynamicTagsOption>>,
    default: () => []
  },
  value: Array as PropType<Array<string | DynamicTagsOption>>,
  inputStyle: [String, Object] as PropType<string | CSSProperties>,
  inputProps: Object as PropType<InputProps>,
  max: Number as PropType<number>,
  tagStyle: [String, Object] as PropType<string | CSSProperties>,
  renderTag: Function as PropType<
  | ((tag: string, index: number) => VNodeChild)
  | ((tag: DynamicTagsOption, index: number) => VNodeChild)
  >,
  onCreate: {
    type: Function as PropType<OnCreate>,
    default: (label: string) => label
  },
  'onUpdate:value': [Function, Array] as PropType<MaybeArray<OnUpdateValue>>,
  onUpdateValue: [Function, Array] as PropType<MaybeArray<OnUpdateValue>>,
  // deprecated
  onChange: [Function, Array] as PropType<MaybeArray<OnUpdateValue> | undefined>
};

export type DynamicTagsProps = ExtractPublicPropTypes<typeof dynamicTagsProps>

export default defineComponent({
  name: 'DynamicTags',
  props: dynamicTagsProps,
  setup (props) {
    // if (__DEV__) {
    //   watchEffect(() => {
    //     if (props.onChange !== undefined) {
    //       warnOnce(
    //         'dynamic-tags',
    //         '`on-change` is deprecated, please use `on-update:value` instead.'
    //       );
    //     }
    //   });
    // }
    const { mergedClsPrefixRef, inlineThemeDisabled } = useConfig(props);
    const { localeRef } = useLocale('DynamicTags');
    const formItem = useFormItem(props);
    const { mergedDisabledRef } = formItem;
    const inputValueRef = ref('');
    const showInputRef = ref(false);
    const inputForceFocusedRef = ref(true);
    const inputInstRef = ref<InputInst | null>(null);
    const themeRef = useTheme(
      'DynamicTags',
      '-dynamic-tags',
      style,
      dynamicTagsLight,
      props,
      mergedClsPrefixRef
    );
    const uncontrolledValueRef = ref(props.defaultValue);
    const controlledValueRef = toRef(props, 'value');
    const mergedValueRef = useMergedState(
      controlledValueRef,
      uncontrolledValueRef
    );
    const localizedAddRef = computed(() => {
      return localeRef.value.add;
    });
    const inputSizeRef = computed(() => {
      return smallerSize(props.size);
    });
    const triggerDisabledRef = computed(() => {
      return (
        mergedDisabledRef.value ||
        (!!props.max && mergedValueRef.value.length >= props.max)
      );
    });
    function doChange (value: Array<string | DynamicTagsOption>): void {
      const {
        onChange,
        'onUpdate:value': _onUpdateValue,
        onUpdateValue
      } = props;
      const { nTriggerFormInput, nTriggerFormChange } = formItem;
      if (onChange) call(onChange as OnUpdateValueImpl, value);
      if (onUpdateValue) call(onUpdateValue as OnUpdateValueImpl, value);
      if (_onUpdateValue) call(_onUpdateValue as OnUpdateValueImpl, value);
      uncontrolledValueRef.value = value;
      nTriggerFormInput();
      nTriggerFormChange();
    }
    function handleCloseClick (index: number): void {
      const tags = mergedValueRef.value.slice(0);
      tags.splice(index, 1);
      doChange(tags);
    }
    function handleInputKeyUp (e: KeyboardEvent): void {
      switch (e.code) {
        case 'Enter':
        case 'NumpadEnter':
          handleInputConfirm();
      }
    }
    function handleInputConfirm (externalValue?: string): void {
      const nextValue = externalValue ?? inputValueRef.value;
      if (nextValue) {
        const tags = mergedValueRef.value.slice(0);
        tags.push(nextValue);
        doChange(tags);
      }
      showInputRef.value = false;
      inputForceFocusedRef.value = true;
      inputValueRef.value = '';
    }
    function handleInputBlur (): void {
      handleInputConfirm();
    }
    function handleAddClick (): void {
      showInputRef.value = true;
      void nextTick(() => {
        inputInstRef.value?.focus();
        inputForceFocusedRef.value = false;
      });
    }
    const cssVarsRef = computed(() => {
      const {
        self: { inputWidth }
      } = themeRef.value;
      return {
        '--n-input-width': inputWidth
      };
    });
    const themeClassHandle = inlineThemeDisabled
      ? useThemeClass('dynamic-tags', undefined, cssVarsRef, props)
      : undefined;
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      inputInstRef,
      localizedAdd: localizedAddRef,
      inputSize: inputSizeRef,
      inputValue: inputValueRef,
      showInput: showInputRef,
      inputForceFocused: inputForceFocusedRef,
      mergedValue: mergedValueRef,
      mergedDisabled: mergedDisabledRef,
      triggerDisabled: triggerDisabledRef,
      handleInputKeyUp,
      handleAddClick,
      handleInputBlur,
      handleCloseClick,
      handleInputConfirm,
      mergedTheme: themeRef,
      cssVars: inlineThemeDisabled ? undefined : cssVarsRef,
      themeClass: themeClassHandle?.themeClass,
      onRender: themeClassHandle?.onRender
    };
  },
  render () {
    const { mergedTheme, cssVars, mergedClsPrefix, onRender, renderTag } = this;
    onRender?.();
    return (
      <NSpace
        class={[`${mergedClsPrefix}-dynamic-tags`, this.themeClass]}
        size="small"
        style={cssVars as any}
        theme={mergedTheme.peers.Space}
        themeOverrides={mergedTheme.peerOverrides.Space}
        itemStyle="display: flex;"
      >
        {{
          default: () => {
            const {
              mergedTheme,
              tagStyle,
              type,
              round,
              size,
              color,
              closable,
              mergedDisabled,
              showInput,
              inputValue,
              inputStyle,
              inputSize,
              inputForceFocused,
              triggerDisabled,
              handleInputKeyUp,
              handleInputBlur,
              handleAddClick,
              handleCloseClick,
              handleInputConfirm,
              $slots
            } = this;
            return this.mergedValue
              .map((tag, index) =>
                renderTag ? (
                  renderTag(tag as string & DynamicTagsOption, index)
                ) : (
                  <NSpace vertical>
                      <NTag
                      key={index}
                      theme={mergedTheme.peers.Tag}
                      themeOverrides={mergedTheme.peerOverrides.Tag}
                      style={tagStyle}
                      type={type}
                      round={round}
                      size={size}
                      color={color}
                      closable={closable}
                      disabled={mergedDisabled}
                      onClose={() => handleCloseClick(index)}
                    >
                      {{
                        default: () => (typeof tag === 'string' ? tag : tag.label)
                      }}
                    </NTag>
                    { $slots.tagExtra ? $slots.tagExtra({ tag, index }) : null}
                  </NSpace>
                )
              )
              .concat(
                showInput ? (
                  $slots.input ? (
                    $slots.input({
                      submit: handleInputConfirm,
                      deactivate: handleInputBlur
                    })
                  ) : (
                    <NInput
                      placeholder=""
                      size={inputSize}
                      style={inputStyle}
                      autosize
                      {...this.inputProps}
                      ref="inputInstRef"
                      value={inputValue}
                      onUpdateValue={(v) => {
                        this.inputValue = v;
                      }}
                      theme={mergedTheme.peers.Input}
                      themeOverrides={mergedTheme.peerOverrides.Input}
                      onKeyup={handleInputKeyUp}
                      onBlur={handleInputBlur}
                      internalForceFocus={inputForceFocused}
                    />
                  )
                ) : $slots.trigger ? (
                  $slots.trigger({
                    activate: handleAddClick,
                    disabled: triggerDisabled
                  })
                ) : (
                  <NButton
                    dashed
                    disabled={triggerDisabled}
                    theme={mergedTheme.peers.Button}
                    themeOverrides={mergedTheme.peerOverrides.Button}
                    size={inputSize}
                    onClick={handleAddClick}
                  >
                    {{
                      icon: () => (
                        <NBaseIcon clsPrefix={mergedClsPrefix}>
                          {{ default: () => <AddIcon /> }}
                        </NBaseIcon>
                      )
                    }}
                  </NButton>
                )
              );
          }
        }}
      </NSpace>
    );
  }
});
