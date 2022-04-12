import { widgetDataProps } from 'free-core';
import { defineComponent } from 'vue';
import Ad from '../assets/ad.png';
import { useAction } from './action';

import './style.scss';

export interface AdItemData {
  img_url: string;
  redirect: object;
}

export interface NutuiImageAdProps {
  type: 'default' | 'small' | 'dot' | 'block' | 'rectangle';
  radioType: 'square' | 'round';
  imageType: 'shadow' | 'regular';
  pagePadding: number;
  imagePadding: number;
  ads: AdItemData[];
}

const nutuiImageAdProps = widgetDataProps<NutuiImageAdProps>({
  type: 'default',
  imageType: 'regular',
  radioType: 'square',
  pagePadding: 0,
  imagePadding: 0,
  ads: []
});

export default defineComponent({
  name: 'ImageAd',

  props: nutuiImageAdProps,

  setup (props) {
    const {
      model,
      renderAction
    } = useAction(props);

    return {
      model,
      renderAction
    };
  },

  render () {
    return (
      <div class='image-ad'>
        <nut-swiper width={375} height={200} initPage={0} paginationVisible={true} paginationColor="#426543" autoPlay="3000">
          <nut-swiper-item>
            <img src={Ad} alt="" />
          </nut-swiper-item>
          <nut-swiper-item>
            <img src={Ad} alt="" />
          </nut-swiper-item>
          <nut-swiper-item>
            <img src={Ad} alt="" />
          </nut-swiper-item>
          <nut-swiper-item>
            <img src={Ad} alt="" />
          </nut-swiper-item>
        </nut-swiper>
      </div>
    );
  }
});
