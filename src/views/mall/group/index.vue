<template>
  <SpaceView>
    <n-card size="small">
      <n-space
        vertical
        class="mb-3"
      >
        <n-space>
          <RouterButton
            to="/mall/group/create"
            type="primary"
          >
            新建商品分组
          </RouterButton>
        </n-space>

        <n-data-table
          ref="table"
          :columns="columns"
          :data="data"
          :single-line="true"
          :bordered="false"
          :loading="loading"
        />
      </n-space>
    </n-card>
  </SpaceView>
</template>

<script lang="ts" setup>
import { RouterButton } from '@/components/router-button';
import { NA, NTag } from 'naive-ui';
import { h, reactive, ref } from 'vue';
import { RouterLink } from 'vue-router';
import { lists as groupLists, GoodsGroupSchema } from '@/api/mall/group';
import { SpaceView } from '@/components/space-view';

const loading = ref(false);

const columns = [
  {
    title: '分组名称',
    key: 'name'
  },
  {
    title: '分组别名',
    key: 'alias',
    render (row: GoodsGroupSchema) {
      return h(NTag, {
        size: 'small',
        type: 'primary'
      }, {
        default: () => row.alias
      });
    }
  },
  {
    title: '商品数',
    key: 'goods_count'
  },
  {
    title: '创建时间',
    key: 'created_at'
  },
  {
    title: '操作',
    key: 'actions',
    render (row: any) {
      return h(RouterLink, {
        to: `/mall/group/${row.id}/edit`
      }, {
        default: () => h(NA, {}, {
          default: () => '编辑'
        })
      });
    }
  }
];

const paginationReactive = reactive({
  page: 2,
  pageSize: 5,
  showSizePicker: true,
  onChange: (page: number) => {
    paginationReactive.page = page;
  }
});

const data = ref<GoodsGroupSchema[]>([]);

async function getGroupLists () {
  loading.value = true;
  try {
    data.value = await groupLists({});
    console.log(data.value);
  } catch (error) {
    console.log(error);
  }
  loading.value = false;
}

getGroupLists();
</script>

<style lang="scss">
.goods-lists {
  height: 100%;
}
</style>
