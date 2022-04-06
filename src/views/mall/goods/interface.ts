import { createInjectionKey } from 'naive-ui/lib/_utils';
import { Ref } from 'vue';

export interface GoodsActionInjection {
  goodsModelRef: Ref<any>;
  isAction: Ref<boolean>
}

export const goodsActionInjectionKey = createInjectionKey<GoodsActionInjection>('goods-action');

export interface GoodsType {
  type: 'entity' | 'virtual' | 'card';
}

export type DeliveryType = 'express' | 'pickup';
export type ExpressType = 'price' | 'template';
