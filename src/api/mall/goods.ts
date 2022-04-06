import { http } from '@/utils/http';

export const create = (data: any): Promise<void> => {
  return http.request<void>({
    url: '/mall/goods',
    method: 'POST',
    data
  });
};

export const update = (id: number, data: any): Promise<void> => {
  return http.request<void>({
    url: `/mall/goods/${id}`,
    method: 'PUT',
    data
  });
};

export const getLists = (params: any = {}): Promise<any> => {
  return http.request({
    url: '/mall/goods',
    method: 'GET',
    params
  });
};

export const goodsDetail = (id: number | string) => {
  return http.request({
    url: `/mall/goods/${id}`,
    method: 'GET'
  });
};
