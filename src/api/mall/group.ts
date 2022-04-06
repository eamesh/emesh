import { http } from '@/utils/http';

export interface GoodsGroupSchema {
  id: number | string;
  name: string;
  alias: string;
  goods_count: number;
  created_at: string;
  updated_at: string;
}

export const lists = (params: any = {}): Promise<GoodsGroupSchema[]> => {
  return http.request({
    url: 'mall/group',
    method: 'GET',
    params
  });
};

export const create = (data: any): Promise<void> => {
  return http.request<void>({
    url: '/mall/group',
    method: 'POST',
    data
  });
};

export const update = (id: number | string, data: any): Promise<void> => {
  return http.request<void>({
    url: `/mall/group/${id}`,
    method: 'PUT',
    data
  });
};

export const getDetail = (id: number | string): Promise<any> => {
  return http.request({
    url: `/mall/group/${id}`,
    method: 'GET'
  });
};
