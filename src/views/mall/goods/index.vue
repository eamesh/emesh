<template>
  <space-view>
    <n-card size="small">
      <n-space vertical>
        <router-button
          to="/mall/goods/create"
          type="primary"
        >
          发布商品
        </router-button>

        <n-card
          embedded
          :bordered="false"
        >
          <n-form
            label-placement="left"
            label-width="70"
          >
            <n-form-item label="创建时间">
              <n-date-picker type="daterange" />
            </n-form-item>
            <n-space>
              <n-form-item label="商品名称">
                <n-input placeholder="请输入商品名称" />
              </n-form-item>
              <n-form-item label="商品分组">
                <n-select style="width: 200px;" />
              </n-form-item>
              <n-form-item label="商品类型">
                <n-select style="width: 200px;" />
              </n-form-item>
              <n-form-item label="销量">
                <n-input
                  pair
                  separator="-"
                  clearable
                  style="width: 200px;"
                />
              </n-form-item>
              <n-form-item label="价格">
                <n-input
                  pair
                  separator="-"
                  clearable
                  style="width: 200px;"
                />
              </n-form-item>
            </n-space>
            <n-space align="center">
              <n-button
                type="primary"
                style="margin-left: 70px;"
              >
                筛选
              </n-button>
              <n-button>
                导出
              </n-button>
              <n-a>查看已导出列表</n-a>
              <n-a>重置筛选条件</n-a>
            </n-space>
          </n-form>
        </n-card>

        <div>
          <n-tabs
            type="card"
          >
            <n-tab
              name="0"
            >
              全部
            </n-tab>
            <n-tab
              name="1"
            >
              销售中
            </n-tab>
            <n-tab
              name="2"
            >
              已售罄
            </n-tab>
            <n-tab
              name="3"
            >
              仓库中
            </n-tab>
          </n-tabs>

          <n-space
            class="py-3"
            align="center"
          >
            <n-checkbox class="ml-3">
              <n-text class="ml-2">
                当页全选
              </n-text>
            </n-checkbox>
            <n-button size="small">
              下架
            </n-button>
            <n-button size="small">
              删除
            </n-button>
          </n-space>

          <n-data-table
            ref="table"
            :columns="columns"
            :data="dataRef"
            :single-line="true"
            :bordered="false"
            :loading="loadingRef"
            :row-key="rowKey"
          >
            <template #empty>
              <n-p>
                还没有商品,快去
                <router-link
                  to="/mall/goods/create"
                  #="{ navigate, href }"
                  custom
                >
                  <n-a
                    :href="href"
                    @click="navigate"
                  >
                    创建
                  </n-a>
                </router-link>
                吧
              </n-p>
            </template>
          </n-data-table>

          <n-space
            align="center"
            justify="space-between"
          >
            <n-space
              class="py-4"
              align="center"
            >
              <n-checkbox class="ml-3">
                <n-text class="ml-2">
                  当页全选
                </n-text>
              </n-checkbox>
              <n-button size="small">
                下架
              </n-button>
              <n-button size="small">
                删除
              </n-button>
            </n-space>
            <n-pagination
              :show-quick-jumper="paginationReactive.showQuickJumper"
              :show-size-picker="paginationReactive.showSizePicker"
              :page-size="paginationReactive.pageSize"
              :page="paginationReactive.page"
              :item-count="paginationReactive.itemCount"
              @update:change="paginationReactive.onChange"
            >
              <template #prefix="{ itemCount }">
                共 {{ itemCount }} 项
              </template>
            </n-pagination>
          </n-space>
        </div>
      </n-space>
    </n-card>
  </space-view>
</template>

<script lang="ts" setup>
import { getLists } from '@/api/mall/goods';
import { RouterButton } from '@/components/router-button';
import { SpaceView } from '@/components/space-view';
import { DataTableColumn, NA, NButton, NDivider, NImage, NSpace, NTag } from 'naive-ui';
import { computed, h, onMounted, reactive, ref } from 'vue';
import { RouterLink } from 'vue-router';

const dataRef = ref([]);
const loadingRef = ref(false);

const columns: DataTableColumn[] = [
  {
    type: 'selection'
  },
  {
    title: '主图',
    key: 'thumb',
    width: 80,
    render (row: any) {
      return h(NImage, {
        src: row.thumb,
        width: 24
      });
    }
  },
  {
    title: '商品名',
    key: 'name',
    width: 300
  },
  {
    title: '价格',
    key: 'min_price',
    width: 300
  },
  {
    title: '库存',
    key: 'stock',
    render (row: any) {
      return h(NTag, {
        type: row.stock > 10 ? 'success' : 'error',
        size: 'small'
      }, {
        default: () => row.stock > 10 ? '库存充足' : '库存告警'
      });
    }
  },
  {
    title: '销量',
    key: 'sold_num'
  },
  {
    title: '状态',
    key: 'publish',
    render (row: any) {
      return h(NTag, {
        type: row.publish ? 'success' : 'error',
        size: 'small'
      }, {
        default: () => row.publish ? '上架' : '下架'
      });
    }
  },
  {
    title: '创建时间',
    key: 'created_at',
    width: 250
  },
  {
    title: '操作',
    key: 'action',
    width: '120px',
    render (row) {
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

const paginationReactive = reactive({
  page: 1,
  pageSize: 20,
  pageCount: 1,
  itemCount: 0,
  showSizePicker: false,
  showQuickJumper: true,
  onChange: (page: number) => {
    paginationReactive.page = page;
    handleGetLists();
  }
});

const filterParams = computed(() => {
  return {
    page: paginationReactive.page
  };
});

function handleGetLists () {
  return new Promise(async (resolve, reject) => {
    loadingRef.value = true;
    try {
      const { data, meta } = await getLists(filterParams.value);
      console.log(data);
      dataRef.value = data;

      paginationReactive.page = meta.current_page;
      paginationReactive.pageCount = meta.last_page;
      paginationReactive.pageSize = meta.per_page;
      paginationReactive.itemCount = meta.total;

      resolve(data);
    } catch (error) {
      console.log(error);
      reject(error);
    }
    loadingRef.value = false;
  });
}

function rowKey (row: any) {
  return row.id;
}

async function init () {
  await handleGetLists();
}

onMounted(() => {
  init();
  console.log('mounted');
});

</script>

<style lang="scss">
.goods-lists {
  height: 100%;
}
</style>
