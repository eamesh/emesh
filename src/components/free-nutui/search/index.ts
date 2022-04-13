import { Widget } from 'free-core/lib/types/core/src/interface';
import Search, { NutuiSearchProps } from './src/Search';
import Thumb from './assets/thumb.png';
import { markRaw } from 'vue';

const NutuiSearchWidget: Widget<NutuiSearchProps> = {
  name: '搜索',
  key: 'search',
  thumb: Thumb,
  component: markRaw(Search),
  allowCount: 10,
  data: {
    text: '',
    scan: false,
    background: '#ffffff',
    inputBackground: '#f7f7f7',
    textColor: '#9f9f9f'
  }
};

export default NutuiSearchWidget;
