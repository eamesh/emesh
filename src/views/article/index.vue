<template>
  <space-view>
    <n-space
      vertical
      :size="[0, 20]"
    >
      <router-button
        to="/article/create"
        type="primary"
      >
        新建内容
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
        title: '标题',
        key: 'title',
      },
      {
        title: '访客数/浏览量',
        key: 'views',
      },
      {
        title: '点赞数',
        key: 'like',
      },
      {
        title: '评论',
        key: 'comment_count',
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
</script>
