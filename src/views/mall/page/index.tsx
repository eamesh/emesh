import { RouterButton } from '@/components/router-button';
import { SpaceView } from '@/components/space-view';
import { DataTableColumn, MenuOption, NA, NButton, NCard, NDataTable, NDivider, NForm, NFormItem, NIcon, NInput, NSelect, NSpace, NTag, useMessage } from 'naive-ui';
import { defineComponent, h, ref } from 'vue';
import StoreTabs from './Tabs';
import { getLists, setHome } from '@/api/decorate/decorate';
import { RouterLink } from 'vue-router';
import { MobileOutlined } from '@vicons/antd';

export default defineComponent({
  name: 'StorePage',

  setup () {
    const pageLists = ref<any>({});
    const loading = ref(false);
    const message = useMessage();
    const menuOptions: MenuOption[] = [
      {
        label: '微页面',
        key: 'page',
      }
    ];

    async function handleGetPageLists () {
      loading.value = true;
      try {
        pageLists.value = await getLists();
        console.log(pageLists.value);
      } catch (error) {
        console.log(error);
      }
      loading.value = false;
    }

    handleGetPageLists();

    async function handleSetHome (_: MouseEvent, id: number) {
      try {
        await setHome(id);
        message.success('店铺首页设置完成');
        handleGetPageLists();
      } catch (error) {
        console.log(error);
        message.error('店铺首页设置失败');
      }
    }

    const columns: DataTableColumn[] = [
      {
        type: 'selection'
      },
      {
        title: '标题',
        key: 'title',
        width: '300px',
        render (row: any) {
          return (
            <div class='flex items-center'>
              {row.title}
              {row.is_home ? <NIcon class='ml-2' color='red' size={16}>
                <MobileOutlined />
              </NIcon> : null}
            </div>
          );
        }
      },
      {
        title: '发布状态',
        key: 'status',
        render (row) {
          return h(NTag, {
            size: 'small',
            type: row.status ? 'success' : 'info'
          }, {
            default: () => row.status ? '已发布' : '未发布'
          });
        }
      },
      {
        title: '创建时间',
        key: 'created_at',
      },
      // {
      //   title: '商品数',
      //   key: 'count',
      // },
      {
        title: '访客数/浏览量',
        key: 'views',
      },
      // {
      //   title: '商品访客数/商品浏览量',
      //   key: 'goods_views',
      // },
      {
        title: '操作',
        key: 'action',
        width: '200px',
        render (row: any) {
          return h(NSpace, {}, {
            default: () => [
              h(RouterLink, {
                custom: true,
                to: `/diy/decorate/${row.id}`
              }, {
                default: ({ href, navigate }: any) => h(NA, {
                  href,
                  onClick: navigate
                }, {
                  default: () => '编辑'
                })
              }),
              h(NDivider, {
                vertical: true,
                style: {
                  margin: 0
                }
              }),
              h(NA, {
                onClick: (e: MouseEvent) => handleSetHome(e, row.id)
              }, {
                default: () => '设为主页'
              }),
              h(NDivider, {
                vertical: true,
                style: {
                  margin: 0
                }
              }),
              h(NA, {}, {
                default: () => '删除'
              })
            ]
          });
        }
      }
    ];

    return {
      loading,
      columns,
      pageLists,
      menuOptions
    };
  },

  render () {
    const {
      loading,
      columns,
      pageLists
    } = this;

    return (
      <SpaceView style={{paddingTop: 0}}>
        <NSpace vertical size={[0, 16]}>
          <StoreTabs defaultValue='page' />
          <NSpace>
            <RouterButton target='_blank' type='primary' to='/diy'>
              新建微页面
            </RouterButton>
          </NSpace>

          <NCard embedded bordered={false}>
            <NForm labelPlacement='left' labelWidth={70}>
              <NSpace size={[40, 0]}>
                <NFormItem label='微页面标题'>
                  <NInput style={{
                    width: '240px'
                  }} />
                </NFormItem>
                <NFormItem label='发布状态'>
                  <NSelect style={{
                    width: '200px'
                  }} />
                </NFormItem>
                <NFormItem label='分类'>
                  <NSelect style={{
                    width: '200px'
                  }} />
                </NFormItem>

              </NSpace>
              <NSpace align="center">
                <NButton
                  type="primary"
                  style="margin-left: 70px;"
                >
                  筛选
                </NButton>

                <NA>重置筛选条件</NA>
              </NSpace>
            </NForm>
          </NCard>

          <NDataTable loading={loading} rowKey={row => row.id} data={pageLists.data} columns={columns}></NDataTable>
        </NSpace>
      </SpaceView>
    );
  }
});
