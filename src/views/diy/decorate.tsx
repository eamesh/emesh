import { defineComponent, onMounted, ref } from 'vue';
import { MenuOption, NButton, NLayout, NLayoutHeader, NLayoutSider, NMenu, NSpace, useMessage } from 'naive-ui';
import { FreeLayout, Free, FreeTitleTextWidget, FreeWhiteHeightWidget } from 'free-core';
import { AsideGroup, PageDataSchemas } from 'free-core/lib/types/core/src/interface';
import NutuiImageAdWidget from '@/components/free-nutui/image-ad';
import NutuiImageNavWidget from '@/components/free-nutui/image-nav';
import NutuiSearchWidget from '@/components/free-nutui/search';
import NutuiNoticeBarhWidget from '@/components/free-nutui/notice-bar';
import NutuiVideoPlayerWidget from '@/components/free-nutui/video-player';
// import NutuiNavigationWidget from '@/components/free-nutui/navigation';
// import NutuiGoodsCardWidget from '@/components/free-nutui/goods-card';
import { create as createDecorate } from '@/api/decorate/decorate';

import './style.scss';
import { useRouter } from 'vue-router';

const asideGroups: AsideGroup[] = [
  {
    title: '基础组件',
    key: 'base',
    children: [
      FreeTitleTextWidget,
      FreeWhiteHeightWidget,
      NutuiSearchWidget,
      NutuiNoticeBarhWidget,
      NutuiImageAdWidget,
      NutuiImageNavWidget,
      NutuiVideoPlayerWidget,
      // NutuiNavigationWidget
    ]
  },
  {
    title: '营销组件',
    key: 'func',
    children: [
      // NutuiGoodsCardWidget
    ]
  }
];

Free.widgets = asideGroups;

export default defineComponent({
  name: 'Diy',

  setup () {
    const message = useMessage();
    const loading = ref(false);
    const router = useRouter();

    const freeLayoutRef = ref();

    const menus: MenuOption[] = [
      {
        label: '装修',
        key: 'diy'
      }
    ];

    onMounted(() => {
      const pageData: PageDataSchemas = {
        page: [
          {
            id: 1,
            ...NutuiSearchWidget,
          },
          {
            id: 2,
            ...FreeWhiteHeightWidget,
            data: {
              ...FreeWhiteHeightWidget.data,
              empty: {
                height: 8
              }
            }
          }
        ],
      };
      freeLayoutRef.value.setPageData(pageData);
    });

    // 获取页面数据
    function getPageData () {
      const datas = freeLayoutRef.value.getPageData() as any;
      const page = datas.page.map((item: any) => {
        return {
          key: item.widgetKey,
          data: item.model
        };
      });
      const pageData: any = {
        page
      };
      Object.values(datas.core).forEach((item: any) => {
        pageData[item.widgetKey] = item.model || {};
      });

      console.log(JSON.stringify(pageData));
      const freePage = pageData['free-page'];

      return {
        data: pageData,
        title: freePage.title,
        remark: freePage.description,
      };
    }

    async function handleSubmit (e: MouseEvent, status = false) {
      console.log(status);
      loading.value = true;
      try {
        await createDecorate(
          {
            ...getPageData(),
            status
          }
        );
        message.success('提交成功');
        router.replace({
          path: '/store/page'
        });
      } catch (error) {
        console.log(error);
      }
      loading.value = false;
    }

    return {
      menus,
      loading,
      freeLayoutRef,
      handleSubmit
    };
  },

  render () {
    const {
      loading,
      handleSubmit
    } = this;

    return (
      <NLayout position="absolute">
        <NLayoutHeader style="height: 56px; padding: 0 24px;" bordered>
          <NSpace justify='space-between' align='center' style={{ height: '100%' }}>
            <div></div>
            <NSpace size={[20, 0]}>
              <NButton size='small' type='primary' secondary style={{ padding: '0 20px' }}>预览</NButton>
              <NButton size='small' type='primary' style={{ padding: '0 20px' }} loading={loading} onClick={e => handleSubmit(e, false)}>保存</NButton>
              <NButton size='small' type='primary' style={{ padding: '0 20px' }}>发布</NButton>
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
            <FreeLayout asideGroup ref="freeLayoutRef" />
          </NLayout>
        </NLayout>
      </NLayout>
    );
  }
});
