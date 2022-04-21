import { http } from '@/utils/http';

export const create = (data: any): Promise<any> => {
  return http.request<any>({
    url: '/decorate',
    method: 'POST',
    data
  });
};

export const update = (id: number | string, data: any): Promise<void> => {
  return http.request<void>({
    url: `/decorate/${id}`,
    method: 'PUT',
    data
  });
};

export const detail = (id: number | string) => {
  return http.request<any>({
    url: `/decorate/${id}`,
    method: 'GET',
  });
};

export const getLists = (): Promise<any[]> => {
  return http.request<any[]>({
    url: '/decorate',
    method: 'GET'
  });
};
