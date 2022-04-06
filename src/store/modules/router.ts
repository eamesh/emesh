import { constantRoutes } from '@/router';
import { generateRoutes } from '@/router/generator';
import { defineStore } from 'pinia';
import { toRaw } from 'vue';
import { RouteRecordRaw } from 'vue-router';

export interface IRouterState {
  menus: RouteRecordRaw[],
  routes: any[],
  addRoutes: any[],
  isAdded: boolean,
}

export const useRouterStore = defineStore({
  id: 'router',

  state: (): IRouterState => ({
    menus: [],
    routes: constantRoutes,
    addRoutes: [],
    isAdded: false
  }),

  getters: {
    getMenus (): RouteRecordRaw[] {
      return this.menus;
    },
    getIsAdded (): boolean {
      return this.isAdded;
    }
  },

  actions: {
    setRoutes (routes: any[]) {
      this.addRoutes = routes;
      this.routes = constantRoutes.concat(routes);
    },
    setMenus (menus: RouteRecordRaw[]) {
      this.menus = menus;
    },
    setAdded (added: boolean) {
      this.isAdded = added;
    },
    async generateRoutes () {
      let asyncRoutes: RouteRecordRaw[] = [];
      // 异步获取路由
      try {
        asyncRoutes = await generateRoutes();
      } catch (error) {
        console.log(error);
      }

      this.setRoutes(asyncRoutes);
      this.setMenus(asyncRoutes);
      return toRaw(asyncRoutes);
    }
  }
});

export const useRouteStoreWhithout = () => {
  return useRouterStore();
};
