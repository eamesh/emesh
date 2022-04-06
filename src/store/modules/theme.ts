import { storage } from '@/utils/storage';
import { defineStore } from 'pinia';
import { Theme } from '@/enums/theme';

interface ThemeSettingSate {
  dark: boolean;
  fontSize: string;
}

export const useThemeStore = defineStore({
  id: 'theme',
  state: (): ThemeSettingSate => ({
    dark: storage.get(Theme.THEME_DARK, false),
    fontSize: '12px'
  }),
  getters: {
    getDark (): boolean {
      return this.dark;
    },
    getFontSize (): string {
      return this.fontSize;
    }
  },
  actions: {
    toggleDark () {
      const dark = !this.dark;
      this.$patch({
        dark
      });
      storage.set(Theme.THEME_DARK, dark);
    },

    setFontSize (size: string) {
      this.fontSize = size;
    }
  }
});

// 外部调用
export const useThemeStoreWithout = () => {
  return useThemeStore();
};
