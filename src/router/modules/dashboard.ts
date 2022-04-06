import { RouteRecordRaw } from 'vue-router';
import { Layout } from '../constant';

const routes: RouteRecordRaw[] = [
  {
    path: '/dashboard',
    name: 'dashboard',
    meta: {
      title: '概览',
      sort: 0
    },
    component: Layout,
    redirect: {
      path: '/dashboard/console'
    },
    children: [
      {
        path: '/dashboard/console',
        name: 'dashboard-console',
        meta: {
          title: '面板'
        },
        component: () => import('@/views/dashboard/console')
      }
    ]
  }
];

export default routes;
