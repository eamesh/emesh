import { widgetDataProps } from 'free-core';
import { defineComponent } from 'vue';
import Ad from '../assets/ad.png';
import { useAction } from './action';

import './style.scss';

export interface AdItemData {
  imgUrl: string;
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
    const {
      model
    } = this;

    return (
      <div class='image-ad'>
        <nut-swiper
          width={375}
          height={200}
          initPage={0}
          paginationVisible={true}
          paginationColor="#426543"
          autoPlay="3000"

        >
          {
            model.ads.length ? model.ads.map(ad => {
              return (
                <nut-swiper-item style={{
                  paddingLeft: `${model.pagePadding}px`,
                  paddingRight: `${model.pagePadding}px`,
                }}>
                  <img src={ad.imgUrl} style={{
                    borderRadius: model.radioType === 'round' ? '10px' : 0
                  }} />
                </nut-swiper-item>
              );
            }) : [...Array(3)].map(() => {
              return (
                <nut-swiper-item style={{
                  paddingLeft: `${model.pagePadding}px`,
                  paddingRight: `${model.pagePadding}px`,
                }}>
                  <img src={Ad} alt="" style={{
                    borderRadius: model.radioType === 'round' ? '10px' : 0
                  }} />
                </nut-swiper-item>
              );
            })
          }
        </nut-swiper>
      </div>
    );
  }
});
