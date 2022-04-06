import { cloneDeep } from 'lodash-es';

/**
 * 混合菜单
 * */
export function generatorMenuMix (routerMap: Array<any>, routerName: string, location: string) {
  const cloneRouterMap = cloneDeep(routerMap);
  const newRouter = filterRouter(cloneRouterMap);

  if (location === 'header') {
    const firstRouter: any[] = [];
    newRouter.forEach((item) => {
      const isRoot = isRootRouter(item);
      const info = isRoot ? item.children[0] : item;
      info.children = undefined;
      const currentMenu = {
        ...info,
        ...info.meta,
        label: info.meta?.title,
        key: info.name
      };
      firstRouter.push(currentMenu);
    });
    return firstRouter;
  } else {
    const routes = getChildrenRouter(newRouter.filter((item) => item.name === routerName));

    // 无子菜单隐藏
    return routes.length && routes[0].children ? routes[0].children : [];
  }
}

/**
 * 递归组装子菜单
 * */
export function getChildrenRouter (routerMap: Array<any>) {
  return filterRouter(routerMap).map((item) => {
    const isRoot = isRootRouter(item);
    console.log(isRoot);
    const info = isRoot ? item.children[0] : item;
    console.log(info);
    const currentMenu = {
      ...info,
      ...info.meta,
      label: info.meta?.title,
      key: info.name
    };
    // 是否有子菜单，并递归处理
    if (info.children && info.children.length > 0) {
      // Recursion
      currentMenu.children = getChildrenRouter(info.children);
      currentMenu.children.length === 0 && delete currentMenu.children;
    }
    return currentMenu;
  });
}

/**
 * 递归组装菜单格式
 */
export function generatorMenu (routerMap: Array<any>) {
  return filterRouter(routerMap).map((item) => {
    const isRoot = isRootRouter(item);
    const info = isRoot ? item.children[0] : item;
    const currentMenu = {
      ...info,
      ...info.meta,
      label: info.meta?.title,
      key: info.name,
      icon: isRoot ? item.meta?.icon : info.meta?.icon
    };
    // 是否有子菜单，并递归处理
    if (info.children && info.children.length > 0) {
      // Recursion
      currentMenu.children = generatorMenu(info.children);
    }
    return currentMenu;
  });
}

/**
 * 判断根路由 Router
 * */
export function isRootRouter (item: any) {
  return item.meta?.alwaysShow != true && item.children?.length === 1;
}

/**
 * 排除Router
 * */
export function filterRouter (routerMap: Array<any>) {
  return routerMap.filter((item) => {
    return (
      (item.meta?.hidden || false) != true &&
      !['/:path(.*)*', '/'].includes(item.path)
    );
  });
}
