import { SkuValueSchemas } from '@/components/sku/interface';
import { http } from '@/utils/http';

export const create = (name: string | string[]): Promise<SkuValueSchemas> => {
  return http.request<SkuValueSchemas>({
    url: '/mall/value',
    method: 'POST',
    data: {
      name
    }
  });
};

export const getLists = (): Promise<SkuValueSchemas> => {
  return http.request<SkuValueSchemas>({
    url: '/mall/value',
    method: 'GET'
  });
};
