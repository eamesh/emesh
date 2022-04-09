<template>
  <space-view>
    <n-space
      vertical
      :size="[0, 20]"
    >
      <router-button
        to="/article/category/create"
        type="primary"
      >
        新建内容分类
      </router-button>

      <n-data-table :columns="columns" />
    </n-space>
  </space-view>
</template>

<script lang="ts" setup>
import { SpaceView } from '@/components/space-view';
import { RouterButton } from '@/components/router-button';
import { DataTableColumn, NA, NDivider, NSpace } from 'naive-ui';
import { h } from 'vue';
import { RouterLink } from 'vue-router';

const columns: DataTableColumn[] = [
      {
        type: 'selection'
      },
      {
        title: '分类名',
        key: 'name',
      },
      {
        title: '创建时间',
        key: 'created_at',
      },
      {
        title: '操作',
        key: 'action',
        width: '120px',
        render (row: any) {
          return h(NSpace, {}, {
            default: () => [
              h(RouterLink, {
                to: `/article/category/${row.id}/edit`
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
</script>
