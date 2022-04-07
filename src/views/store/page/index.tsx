import { SpaceView } from '@/components/space-view';
import { DataTableColumn, MenuOption, NA, NButton, NCard, NDataTable, NDivider, NForm, NFormItem, NInput, NSelect, NSpace } from 'naive-ui';
import { defineComponent, h } from 'vue';
import { RouterLink } from 'vue-router';
import StoreTabs from './Tabs';

export default defineComponent({
  name: 'StoreIndex',

  setup () {
    const menuOptions: MenuOption[] = [
      {
        label: '微页面',
        key: 'page',
      }
    ];

    const columns: DataTableColumn[] = [
      {
        type: 'selection'
      },
      {
        title: '标题',
        key: 'title',
      },
      {
        title: '发布状态',
        key: 'status',
      },
      {
        title: '创建时间',
        key: 'created_at',
      },
      {
        title: '商品数',
        key: 'count',
      },
      {
        title: '访客数/浏览量',
        key: 'views',
      },
      {
        title: '商品访客数/商品浏览量',
        key: 'goods_views',
      },
      {
        title: '操作',
        key: 'action',
        width: '120px',
        render (row: any) {
          return h(NSpace, {}, {
            default: () => [
              h(RouterLink, {
                to: `/mall/goods/${row.id}/edit`
              }, {
                default: () => h(NA, {}, {
                  default: () => '编辑'
                })
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
      columns,
      menuOptions
    };
  },

  render () {
    const {
      columns
    } = this;

    return (
      <SpaceView style={{paddingTop: 0}}>
        <NSpace vertical size={[0, 16]}>
          <StoreTabs defaultValue='page' />
          <NSpace>
            <NA {...{
              href: 'https://nutui.emesh.cloud',
              target: '_blank'
            }}>
              <NButton type='primary'>新建微页面</NButton>
            </NA>
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

          <NDataTable columns={columns}></NDataTable>
        </NSpace>
      </SpaceView>
    );
  }
});
