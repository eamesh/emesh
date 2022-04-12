import { Widget } from 'free-core/lib/types/core/src/interface';
import ImageAd, { NutuiImageAdProps } from './src/ImageAd';
import Thumb from './assets/thumb.png';
import { markRaw } from 'vue';

const NutuiImageAdWidget: Widget<NutuiImageAdProps> = {
  name: '图片广告',
  key: 'image-ad',
  thumb: Thumb,
  component: markRaw(ImageAd),
  allowCount: 300,
  data: {
    type: 'default',
    imageType: 'regular',
    radioType: 'square',
    pagePadding: 0,
    imagePadding: 0,
    ads: []
  }
};

export default NutuiImageAdWidget;
