import { RouteRecordRaw } from 'vue-router';
import { Layout } from '../constant';

const routes: RouteRecordRaw[] = [
  {
    path: '/system',
    name: 'system',
    meta: {
      title: '系统',
      sort: 1
    },
    component: Layout,
    redirect: {
      path: '/system/settings'
    },
    children: [
      {
        path: '/system/settings',
        name: 'system-setting',
        meta: {
          title: '系统配置'
        },
        component: () => import('@/views/system/settings/index.vue')
      }
    ]
  }
];

export default routes;
