import { computed, defineComponent, onMounted, ref } from 'vue';
import { MenuOption, NButton, NIcon, NLayout, NLayoutHeader, NLayoutSider, NMenu, NSpace, useMessage } from 'naive-ui';
import { FreeLayout, Free, FreeTitleTextWidget, FreeWhiteHeightWidget, FreeWidgetsManageWidget } from 'free-core';
import { AsideGroup, CoreWidget, PageDataSchemas } from 'free-core/lib/types/core/src/interface';
import NutuiImageAdWidget from '@/components/free-nutui/image-ad';
import NutuiImageNavWidget from '@/components/free-nutui/image-nav';
import NutuiSearchWidget from '@/components/free-nutui/search';
import NutuiNoticeBarhWidget from '@/components/free-nutui/notice-bar';
import NutuiVideoPlayerWidget from '@/components/free-nutui/video-player';
// import NutuiNavigationWidget from '@/components/free-nutui/navigation';
// import NutuiGoodsCardWidget from '@/components/free-nutui/goods-card';
import { create as createDecorate, update as updateDecorate, detail } from '@/api/decorate/decorate';
import WidgetsCollection from './widgets';

import './style.scss';
import { RouterLink, useRoute, useRouter } from 'vue-router';
import { ArrowLeft20Filled } from '@vicons/fluent';

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
    const route = useRoute();

    const freeLayoutRef = ref();

    const menus: MenuOption[] = [
      {
        label: '装修',
        key: 'diy'
      }
    ];

    const id = computed(() => {
      return route.params.id as unknown as number;
    });

    const isEdit = computed(() => {
      return !!id.value;
    });

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
      console.log(datas);
      Object.values(datas.core).forEach((item: any) => {
        console.log(item);
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
        const data = {
          ...getPageData(),
          status
        };
        isEdit.value ? await updateDecorate(id.value, data) : await createDecorate(data);
        message.success('提交成功');
        router.replace({
          path: '/store/page'
        });
      } catch (error) {
        console.log(error);
      }
      loading.value = false;
    }

    function handleCovertPageData (data: any) {
      const pageData: PageDataSchemas = {
        page: data.page.map((item: any, index: number) => {
          const widget = WidgetsCollection[item.key];
          return {
            id: index,
            ...widget,
            data: item.data
          };
        }),
        header: {
          ...WidgetsCollection['free-header'],
          data: data['free-header']
        } as CoreWidget<any>,
        footer: {
          ...WidgetsCollection['free-footer'],
          data: data['free-footer']
        } as CoreWidget<any>,
        core: [
          FreeWidgetsManageWidget,
          {
            ...WidgetsCollection['free-page'],
            data: data['free-page']
          }as CoreWidget<any>,
        ]
      };
      console.log(pageData);
      freeLayoutRef.value.setPageData(pageData);
    }

    async function handelSetPageData () {
      loading.value = true;
      console.log('edit');
      try {
        const response = await detail(id.value);
        console.log(response.data);

        handleCovertPageData(response.data);
      } catch (error) {
        console.log(error);
      }
      loading.value = false;
    }

    isEdit.value && handelSetPageData();

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
            <div>
              <RouterLink to='/mall/page' custom>
                {{
                  default: ({ navigate }: any) => {
                    return (
                      <NButton size='small' text tag='a' onClick={navigate} type='primary'>
                        {{
                          icon: () =>  <NIcon>
                            <ArrowLeft20Filled />
                          </NIcon>,
                          default: () => '返回微页面'
                        }}

                      </NButton>
                    );
                  }
                }}
              </RouterLink>
            </div>
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
