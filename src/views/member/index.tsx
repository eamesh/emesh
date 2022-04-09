import { FormItem } from '@/components/naive-ui/form';
import { RouterButton } from '@/components/router-button';
import { SpaceView } from '@/components/space-view';
import { DataTableColumn, NA, NButton, NCard, NDataTable, NDatePicker, NDivider, NForm, NInput, NSpace } from 'naive-ui';
import { defineComponent, h } from 'vue';
import { RouterLink } from 'vue-router';

export default defineComponent({
  name: 'MemberIndex',

  setup () {
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
      columns
    };
  },

  render () {
    const {
      columns
    } = this;

    return (
      <SpaceView>
        <NCard size='small'>
          <NSpace vertical size={[0, 20]}>
            <RouterButton to='/member/create' type="primary">
              添加客户
            </RouterButton>

            <NCard
              embedded
              bordered={false}
            >
              <NForm
                labelPlacement="left"
                labelWidth="90"
              >
                <NSpace
                  vertical
                  size={[12,16]}
                >
                  <FormItem
                    label="上次消费时间"
                    hideFeedback
                    hideHelp
                  >
                    <NSpace>
                      <NDatePicker type="daterange" />
                    </NSpace>
                  </FormItem>
                  <FormItem
                    label="成为客户时间"
                    hideFeedback
                    hideHelp
                  >
                    <NSpace>
                      <NDatePicker type="daterange" />
                    </NSpace>
                  </FormItem>
                  <FormItem
                    label="成为会员时间"
                    hideFeedback
                    hideHelp
                  >
                    <NSpace>
                      <NDatePicker type="daterange" />
                    </NSpace>
                  </FormItem>
                  <FormItem
                    label="关键词"
                    hideFeedback
                    hideHelp
                  >
                    <NInput placeholder={'手机号/微信昵称/姓名'} style={{width: '240px'}} />
                  </FormItem>
                  <NSpace align="center">
                    <NButton
                      type="primary"
                      style="margin-left: 70px;"
                    >
                      筛选
                    </NButton>
                    <NButton>
                      导出
                    </NButton>
                    <NA>查看已导出列表</NA>
                    <NA>重置筛选条件</NA>
                  </NSpace>
                </NSpace>

              </NForm>
            </NCard>
            <NDataTable columns={columns}></NDataTable>
          </NSpace>
        </NCard>

      </SpaceView>
    );
  }
});
