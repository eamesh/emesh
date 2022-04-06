import { GlobalThemeOverrides } from 'naive-ui';

export const globalTheme = (theme: any): GlobalThemeOverrides => {
  return {
    common: {
      fontSize: theme.getFontSize,
      fontSizeMedium: theme.getFontSize,
      fontSizeLarge: theme.getFontSize,
      fontSizeHuge: theme.getFontSize,
      fontSizeSmall: theme.getFontSize
    },
    Button: {
      fontSizeMedium: theme.getFontSize
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
