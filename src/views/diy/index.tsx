import { defineComponent } from 'vue';
import { MenuOption, NButton, NLayout, NLayoutHeader, NLayoutSider, NMenu, NSpace } from 'naive-ui';
import { FreeLayout, Free } from 'free-core';
import { AsideGroup } from 'free-core/lib/types/core/src/interface';
import NutuiImageAdWidget from '@/components/free-nutui/image-ad';
import NutuiImageNavWidget from '@/components/free-nutui/image-nav';
import NutuiSearchWidget from '@/components/free-nutui/search';
import NutuiNoticeBarhWidget from '@/components/free-nutui/notice-bar';
import NutuiVideoPlayerWidget from '@/components/free-nutui/video-player';
import NutuiNavigationWidget from '@/components/free-nutui/navigation';
import NutuiGoodsCardWidget from '@/components/free-nutui/goods-card';

import './style.scss';

const asideGroups: AsideGroup[] = [
  {
    title: '基础组件',
    key: 'base',
    children: [
      NutuiImageAdWidget,
      NutuiImageNavWidget,
      NutuiSearchWidget,
      NutuiNoticeBarhWidget,
      NutuiVideoPlayerWidget,
      NutuiNavigationWidget
    ]
  },
  {
    title: '营销组件',
    key: 'func',
    children: [
      NutuiGoodsCardWidget
    ]
  }
];

Free.widgets = asideGroups;

export default defineComponent({
  name: 'Diy',

  setup () {

    const menus: MenuOption[] = [
      {
        label: '装修',
        key: 'diy'
      }
    ];

    return {
      menus
    };
  },

  render () {
    return (
      <NLayout position="absolute">
        <NLayoutHeader style="height: 56px; padding: 0 24px;" bordered>
          <NSpace justify='center' align='center' style={{ height: '100%' }}>
            <NSpace size={[50, 0]}>
              <NButton type='primary' secondary style={{ padding: '0 40px' }}>预览</NButton>
              <NButton type='primary' style={{ padding: '0 40px' }}>保存</NButton>
            </NSpace>
          </NSpace>
        </NLayoutHeader>
        <NLayout has-sider position="absolute" style="top: 52px;">
          <NLayoutSider
            width={76}
            bordered
          >
            <NMenu
              defaultValue={'diy'}
              options={this.menus}
              collapsed-width={76}
              rootIndent={24}
            >
            </NMenu>
          </NLayoutSider>
          <NLayout>
            <FreeLayout asideGroup />
          </NLayout>
        </NLayout>
      </NLayout>
    );
  }
});