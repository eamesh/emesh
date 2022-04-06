<template>
  <space-view>
    <n-card size="small">
      <n-space vertical>
        <n-card
          embedded
          :bordered="false"
        >
          <n-form
            label-placement="left"
            label-width="70"
          >
            <n-space
              vertical
              :size="[12,16]"
            >
              <form-item
                label="订单搜索"
                hide-feedback
                hide-help
              >
                <n-space>
                  <n-select style="width: 180px;" />
                  <n-input
                    style="width: 240px;"
                    placeholder=""
                  />
                </n-space>
              </form-item>
              <form-item
                label="下单时间"
                hide-feedback
                hide-help
              >
                <n-space>
                  <n-date-picker type="daterange" />
                  <n-button disabled>
                    今
                  </n-button>
                  <n-button disabled>
                    昨
                  </n-button>
                  <n-button disabled>
                    近7天
                  </n-button>
                  <n-button disabled>
                    近30天
                  </n-button>
                </n-space>
              </form-item>

              <n-space>
                <form-item
                  label="商品名称"
                  hide-feedback
                  hide-help
                >
                  <n-space>
                    <n-input
                      style="width: 180px;"
                      placeholder=""
                    />
                  </n-space>
                </form-item>
                <form-item
                  label="订单类型"
                  hide-feedback
                  hide-help
                >
                  <n-space>
                    <n-select
                      style="width: 180px;"
                      placeholder=""
                    />
                  </n-space>
                </form-item>
                <form-item
                  label="售后状态"
                  hide-feedback
                  hide-help
                >
                  <n-space>
                    <n-select
                      style="width: 180px;"
                      placeholder=""
                    />
                  </n-space>
                </form-item>
              </n-space>

              <n-space>
                <form-item
                  label="订单状态"
                  hide-feedback
                  hide-help
                >
                  <n-space>
                    <n-input
                      style="width: 180px;"
                      placeholder=""
                    />
                  </n-space>
                </form-item>
                <form-item
                  label="配送方式"
                  hide-feedback
                  hide-help
                >
                  <n-space>
                    <n-select
                      style="width: 180px;"
                      placeholder=""
                    />
                  </n-space>
                </form-item>
                <form-item
                  label="付款方式"
                  hide-feedback
                  hide-help
                >
                  <n-space>
                    <n-select
                      style="width: 180px;"
                      placeholder=""
                    />
                  </n-space>
                </form-item>
                <form-item
                  label="订单来源"
                  hide-feedback
                  hide-help
                >
                  <n-space>
                    <n-select
                      style="width: 180px;"
                      placeholder=""
                    />
                  </n-space>
                </form-item>
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
            </n-space>
          </n-form>
        </n-card>

        <n-tabs
          type="card"
        >
          <n-tab
            v-for="tab in tabKeys"
            :key="tab.key"
            :name="tab.name"
          />
        </n-tabs>

        <n-data-table />
      </n-space>
    </n-card>
  </space-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { SpaceView } from '@/components/space-view';
import { FormItem } from '@/components/naive-ui/form';

export default defineComponent({
  name: 'OrderIndex',

  components: {
    SpaceView,
    FormItem
  },

  setup () {
    const tabKeys = [
      {
        name: '全部',
        key: 'all'
      },
      {
        name: '待付款',
        key: 'all'
      },
      {
        name: '待发货',
        key: 'all'
      },
      {
        name: '已发货',
        key: 'all'
      },
      {
        name: '已完成',
        key: 'all'
      },
      {
        name: '已关闭',
        key: 'all'
      },
      {
        name: '售后中',
        key: 'all'
      }
    ];

    return {
      tabKeys
    };
  }
});
</script>
