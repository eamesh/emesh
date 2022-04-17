import { RouterButton } from '@/components/router-button';
import { SpaceView } from '@/components/space-view';
import { DataTableColumns, NButton, NCard, NDataTable, NSpace } from 'naive-ui';
import { defineComponent, h } from 'vue';

export default defineComponent({
  name: 'AuthRole',

  setup () {
    const tableColumns: DataTableColumns<any> = [
      {
        title: '角色',
        key: 'name'
      },
      {
        title: '标识',
        key: 'slug'
      },
      {
        title: '描述',
        key: 'description'
      },
      {
        title: '操作',
        key: 'actions',
        render () {
          return h(
            NButton,
            {
              text: true,
            },
            { default: () => '查看' }
          );
        }
      }
    ];

    return {
      tableColumns
    };
  },

  render () {
    const {
      tableColumns
    } = this;

    return (
      <SpaceView>
        <NCard size="small" bordered>
          <NSpace vertical size={[0, 12]}>
            <RouterButton to='/system/auth/role/create' type='primary'>
              新建角色
            </RouterButton>

            <NDataTable columns={tableColumns}></NDataTable>
          </NSpace>
        </NCard>
      </SpaceView>
    );
  }
});
