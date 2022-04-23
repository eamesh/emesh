import NutuiGoodsCardWidget from '@/components/free-nutui/goods-card';
import NutuiImageAdWidget from '@/components/free-nutui/image-ad';
import NutuiImageNavWidget from '@/components/free-nutui/image-nav';
import NutuiNoticeBarWidget from '@/components/free-nutui/notice-bar';
import NutuiSearchWidget from '@/components/free-nutui/search-bar';
import NutuiVideoPlayerWidget from '@/components/free-nutui/video-player';
import { FreeFooterWidget, FreeHeaderWidget, FreePageWidget, FreeTitleTextWidget, FreeWhiteHeightWidget } from 'free-core';
import { CoreWidget, Widget } from 'free-core/lib/types/core/src/interface';

const widgets: {
  [key: string]: Widget<any> | CoreWidget<any>
} = {
  'free-page': FreePageWidget,
  'free-footer': FreeFooterWidget,
  'free-header': FreeHeaderWidget,
  'white-height': FreeWhiteHeightWidget,
  'title-text': FreeTitleTextWidget,
  'search': NutuiSearchWidget,
  'notice-bar': NutuiNoticeBarWidget,
  'goods-card': NutuiGoodsCardWidget,
  'image-ad': NutuiImageAdWidget,
  'image-nav': NutuiImageNavWidget,
  'video-player': NutuiVideoPlayerWidget,
};

export default widgets;
