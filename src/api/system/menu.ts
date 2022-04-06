import { http } from '@/utils/http';

export const userMenus = () => {
  return http.request({
    url: '/system/menu/user',
    method: 'GET'
  });
};
