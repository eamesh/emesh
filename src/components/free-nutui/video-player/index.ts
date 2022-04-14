import { Widget } from 'free-core/lib/types/core/src/interface';
import VideoPlayer from './src/VideoPlayer';
import Thumb from './assets/thumb.png';
import { markRaw } from 'vue';

const NutuiVideoPlayerWidget: Widget<any> = {
  name: '视频播放器',
  key: 'video-player',
  thumb: Thumb,
  component: markRaw(VideoPlayer),
  allowCount: 50,
  data: {
    type: 'resource',
    coverType: 'default',
    radioType: 'square',
    pagePadding: 0,
    resource: {
      src: '',
      type: 'video/mp4'
    },
    network: {
      src: '',
      type: 'video/mp4'
    },
    options: {
      controls: true,
      poster: '',
      autoplay: false,
      muted: true,
      loop: true
    }
  }
};

export default NutuiVideoPlayerWidget;
