import { GlobalThemeOverrides } from 'naive-ui';

export const globalTheme = (theme: any): GlobalThemeOverrides => {
  return {
    common: {
      baseColor: '#fff',
      fontSize: theme.getFontSize,
      fontSizeMedium: theme.getFontSize,
      fontSizeLarge: theme.getFontSize,
      fontSizeHuge: theme.getFontSize,
      fontSizeSmall: theme.getFontSize,
      primaryColor: '#5156be',
      primaryColorHover: '#4549a2',
      primaryColorPressed: '#4549a2',
      primaryColorSuppl: '#4549a2',
    },
    Button: {
      fontSizeMedium: theme.getFontSize,
    },
    // DataTable: {
    //   fontSizeMedium: theme.getFontSize,
    // },
    // Input: {
    //   fontSizeLarge: theme.getFontSize,
    //   fontSizeMedium: theme.getFontSize,
    // },
    Form: {
      labelFontSizeLeftMedium: theme.getFontSize,
      feedbackFontSizeMedium: theme.getFontSize,
      feedbackFontSizeLarge: theme.getFontSize,
      feedbackFontSizeSmall: theme.getFontSize
    }
  };
};
