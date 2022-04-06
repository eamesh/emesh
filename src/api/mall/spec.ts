import { SkuBaseSchema } from '@/components/sku/interface';
import { http } from '@/utils/http';

export const create = (name: string): Promise<SkuBaseSchema> => {
  return http.request<SkuBaseSchema>({
    url: '/mall/spec',
    method: 'POST',
    data: {
      name
    }
  });
};

export const getLists = (): Promise<SkuBaseSchema[]> => {
  return http.request<SkuBaseSchema[]>({
    url: '/mall/spec',
    method: 'GET'
  });
};
