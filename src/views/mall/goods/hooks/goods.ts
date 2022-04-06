import { computed, inject } from 'vue';
import { GoodsActionInjection, goodsActionInjectionKey } from '../interface';

export const useGoods = () => {
  const goodsMain = inject(goodsActionInjectionKey);

  const {
    goodsModelRef,
    isAction
  } = goodsMain as GoodsActionInjection;

  // 商品详情
  const goodsModel = computed(() => {
    return goodsModelRef.value;
  });

  return {
    goodsModel,
    isAction
  };
};
