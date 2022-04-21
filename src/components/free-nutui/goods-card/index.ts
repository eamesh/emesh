import { Widget } from 'free-core/lib/types/core/src/interface';
import GoodsCard, { NutuiGoodsCardProps } from './src/GoodsCard';
import Thumb from './assets/thumb.png';
import { markRaw } from 'vue';

const NutuiGoodsCardWidget: Widget<NutuiGoodsCardProps> = {
  name: '商品卡片',
  key: 'goods-card',
  thumb: Thumb,
  component: markRaw(GoodsCard),
  allowCount: 10
};

export default NutuiGoodsCardWidget;
