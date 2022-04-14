import { Widget } from 'free-core/lib/types/core/src/interface';
import NoticeBar from './src/NoticeBar';
import Thumb from './assets/thumb.png';
import { markRaw } from 'vue';

const NutuiNoticeBarWidget: Widget<any> = {
  name: '公告栏',
  key: 'notice-bar',
  thumb: Thumb,
  component: markRaw(NoticeBar),
  allowCount: 20,
  data: {
    title: '',
    color: '#D9500B',
    background: 'rgb(255, 248, 233)'
  }
};

export default NutuiNoticeBarWidget;
