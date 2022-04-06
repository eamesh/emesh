import { Page } from '@/enums/page';
import { useRouteStoreWhithout } from '@/store/modules/router';
import { ACCESS_TOKEN } from '@/store/types';
import { storage } from '@/utils/storage';
import { RouteLocationRaw, Router } from 'vue-router';

const SYSTEM_AUTH_SIGIN = Page.SYSTEM_AUTH_SIGIN;

const whiteLists = [
  SYSTEM_AUTH_SIGIN
];

export const routeGuards = (router: Router) => {
  const useRouterStore = useRouteStoreWhithout();

  router.beforeEach(async (to, from, next) => {
    const Loading = window.$loading || null;
    Loading && Loading.start();

    // 白名单控制
    if (whiteLists.includes(to.path as Page)) {
      next();
      return;
    }

    const token = storage.get(ACCESS_TOKEN);
    if (!token) {
      // 开放路由
      if (to.meta.publish) {
        next();
        return;
      }
      // 跳转登录页
      const redirectLogin: RouteLocationRaw = {
        path: SYSTEM_AUTH_SIGIN,
        replace: true
      };

      if (to.path) {
        redirectLogin.query = {
          redirect: to.path
        };
      }

      next(redirectLogin);
      return;
    }

    if (useRouterStore.getIsAdded) {
      next();
      return;
    }

    // 获取路由 添加异步路由
    const routes = await useRouterStore.generateRoutes();
    routes.forEach(route => {
      router.addRoute(route);
    });

    const redirectPath = (from.query.redirect || to.path) as string;
    const redirect = decodeURIComponent(redirectPath);
    const nextData = to.path === redirect ? { ...to, replace: true } : { path: redirect };

    useRouterStore.setAdded(true);
    next(nextData);
    Loading && Loading.finish();
  });

  router.afterEach((to) => {
    document.title = (to?.meta?.title as string) || document.title;

    const Loading = window.$loading || null;
    Loading && Loading.finish();
  });
};
