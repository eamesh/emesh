import { userMenus } from '@/api/system/menu';
import { RouteRecordRaw } from 'vue-router';
import { SecondaryLayout, Layout, NormalLayout } from './constant';
import { renderIcon } from './icons';
import { AppRouteRecordRaw } from './interface';
import * as Ionicons5 from '@vicons/ionicons5';
import * as Antd from '@vicons/antd';
import * as Fluent from '@vicons/fluent';

const Icons = {
  ...Ionicons5,
  ...Antd,
  ...Fluent
};

const LayoutMap = new Map<string, () => Promise<any>>();

LayoutMap.set('BASE', Layout);
LayoutMap.set('NORMAL', NormalLayout);
LayoutMap.set('SECONDARY', SecondaryLayout);

type IconsKeys = keyof typeof Icons

/**
 * 格式化 后端 结构信息并递归生成层级路由表
 * @param routerMap
 * @param parent
 * @returns {*}
 */
export const routerGenerator = (routerMap: any): any[] => {
  return routerMap.map((item: any) => {
    const currentRouter: any = {
      // 路由地址 动态拼接生成如 /dashboard/workplace
      path: `${item.path}`,
      // 路由名称，建议唯一
      name: item.name || '',
      // 该路由对应页面的 组件
      component: item.component,
      // meta: 页面标题, 菜单图标, 页面权限(供指令权限用，可去掉)
      meta: {
        icon: item.icon ? renderIcon(Icons[item.icon as IconsKeys]) : null,
        title: item.title,
        hidden: item.hidden
      }
    };

    // 为了防止出现后端返回结果不规范，处理有可能出现拼接出两个 反斜杠
    currentRouter.path = currentRouter.path.replace('//', '/');
    // 重定向
    item.redirect && (currentRouter.redirect = item.redirect);
    // 是否有子菜单，并递归处理
    if (item.children && item.children.length > 0) {
      // 如果未定义 redirect 默认第一个子路由为 redirect
      !item.redirect && (currentRouter.redirect = `${item.path}/${item.children[0].path}`);
      // Recursion
      currentRouter.children = routerGenerator(item.children);
    }
    return currentRouter;
  });
};

// const menus = [
//   {
//     path: '/dashboard',
//     name: 'Dashboard',
//     component: 'BASE',
//     redirect: '/dashboard/console',
//     meta: {
//       title: 'Dashboard',
//     },
//     children: [
//       {
//         path: '/dashboard/console',
//         name: 'dashboard-console',
//         component: '/dashboard/console',
//         meta: {
//           title: '概览',
//         },
//       },
//     ],
//   },
// ];

export const generateRoutes = (): Promise<RouteRecordRaw[]> => {
  return new Promise((resolve, reject) => {
    userMenus()
      .then((response) => {
        const menuList = routerGenerator(response);
        asyncImportRoute(menuList);

        resolve(menuList);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

/**
 * 查找views中对应的组件文件
 * */
let viewsModules: Record<string, () => Promise<Record<string, any>>>;
export const asyncImportRoute = (routes: AppRouteRecordRaw[] | undefined): void => {
  viewsModules = viewsModules || import.meta.glob('../views/**/*.{vue,tsx}');
  if (!routes) return;
  routes.forEach((item) => {
    const { component, name } = item;
    const { children } = item;
    if (component) {
      const layoutFound = LayoutMap.get(component as unknown as string);
      if (layoutFound) {
        item.component = layoutFound;
      } else {
        item.component = dynamicImport(viewsModules, component as unknown as string);
      }
    } else if (name) {
      item.component = NormalLayout;
    }
    children && asyncImportRoute(children);
  });
};

/**
  * 动态导入
  * */
export const dynamicImport = (
  viewsModules: Record<string, () => Promise<Record<string, any>>>,
  component: string
) => {
  const keys = Object.keys(viewsModules);
  const matchKeys = keys.filter((key) => {
    let k = key.replace('../views', '');
    const lastIndex = k.lastIndexOf('.');
    k = k.substring(0, lastIndex);
    return k === component;
  });
  if (matchKeys?.length === 1) {
    const matchKey = matchKeys[0];
    return viewsModules[matchKey];
  }
  if (matchKeys?.length > 1) {
    console.warn(
      'Please do not create `.vue` and `.TSX` files with the same file name in the same hierarchical directory under the views folder. This will cause dynamic introduction failure'
    );
  }
};
