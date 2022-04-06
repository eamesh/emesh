import { defineComponent, computed, CSSProperties } from 'vue';
import { useConfig, useTheme, useThemeClass } from 'naive-ui/lib/_mixins';
import type { ThemeProps } from 'naive-ui/lib/_mixins';
import { typographyLight } from 'naive-ui/lib/typography/styles';
import type { TypographyTheme } from 'naive-ui/lib/typography/styles';
import style from 'naive-ui/lib/typography/src/styles/a.cssr';
import type { ExtractPublicPropTypes } from 'naive-ui/lib/_utils';

const aProps = {
  ...(useTheme.props as ThemeProps<TypographyTheme>),
  href: String,
  target: String,
} as const;

export type AProps = ExtractPublicPropTypes<typeof aProps>

export default defineComponent({
  name: 'A',
  props: aProps,
  emits: ['click'],
  setup (props, { emit }) {
    const { mergedClsPrefixRef, inlineThemeDisabled } = useConfig(props);
    const themeRef = useTheme(
      'Typography',
      '-a',
      style,
      typographyLight,
      props,
      mergedClsPrefixRef
    );
    const cssVarsRef = computed(() => {
      const {
        common: { cubicBezierEaseInOut },
        self: { aTextColor }
      } = themeRef.value;
      return {
        '--n-text-color': aTextColor,
        '--n-bezier': cubicBezierEaseInOut
      };
    });
    const themeClassHandle = inlineThemeDisabled
      ? useThemeClass('a', undefined, cssVarsRef, props)
      : undefined;

    function handleClick () {
      emit('click');
    }
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      cssVars: inlineThemeDisabled ? undefined : cssVarsRef,
      themeClass: themeClassHandle?.themeClass,
      onRender: themeClassHandle?.onRender,
      handleClick,
    };
  },
  render () {
    const {
      $slots,
      handleClick,
    } = this;
    this.onRender?.();
    return (
      <a
        class={[`${this.mergedClsPrefix}-a`, this.themeClass]}
        style={this.cssVars as CSSProperties}
        onClick={handleClick}
      >
        {$slots.default ? $slots.default() : ''}
      </a>
    );
  }
});
