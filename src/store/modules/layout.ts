import { defineStore } from 'pinia';
import { Component } from 'vue';

type FooterComponent = Component | null;

interface LayoutState {
  footer: FooterComponent;
}

export const useLayoutStore = defineStore({
  id: 'layout',

  state: (): LayoutState => ({
    footer: null
  }),

  actions: {
    setFooter (render: FooterComponent | null) {
      this.footer = render;
    }
  }
});
