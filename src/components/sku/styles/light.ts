import { commonLight } from 'naive-ui/lib/_styles/common';
import type { ThemeCommonVars } from 'naive-ui/lib/_styles/common';
import type { Theme } from 'naive-ui/lib/_mixins';

export const self = (vars: ThemeCommonVars) => {
  const {
    borderColor
  } = vars;
  return {
    borderColor
  };
};

export type SkuThemeVars = ReturnType<typeof self>

const skuLight: Theme<'Sku', SkuThemeVars> = {
  name: 'Sku',
  common: commonLight,
  self
};

export default skuLight;
export type SkuTheme = typeof skuLight
