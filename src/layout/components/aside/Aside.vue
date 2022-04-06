<template>
  <n-menu
    :mode="mode"
    :options="menusRef"
    :collapsed-width="64"
    :collapsed-icon-size="20"
    :expanded-keys="state.openKeys"
    :value="getSelectedKeys"
    @update:value="clickMenuItem"
    @update:expanded-keys="menuExpanded"
  />
</template>

<script lang="ts" setup>
import { computed, reactive, ref, unref, watch, watchEffect } from 'vue';

import { useRoute, useRouter } from 'vue-router';
import { generatorMenuMix } from '@/utils';
import { useRouterStore } from '@/store/modules/router';

const props = defineProps({
  location: {
    type: String,
    default: 'header'
  },

  collapsed: {
    type: Boolean
  },

  mode: {
    type: String,
    default: 'horizontal'
  }
});

const emit = defineEmits<{
  (e: 'toggleSider', toggle: boolean): void,
  (e: 'clickMenuItem', key: any): void
}>();

const currentRoute = useRoute();
const router = useRouter();
const useRouterState = useRouterStore();
const menusRef = ref<any[]>([]);
const selectedKeys = ref<string>(currentRoute.name as string);
const headerMenuSelectKeyRef = ref<string>('');

// 获取当前打开的子菜单
const matched = currentRoute.matched;

const getOpenKeys = matched && matched.length ? matched.map((item) => item.name) : [];

const state = reactive({
  openKeys: getOpenKeys
});

const getSelectedKeys = computed(() => {
  const location = props.location;
  return location === 'left' ? unref(selectedKeys) : unref(headerMenuSelectKeyRef);
});

watchEffect(() => {
  updateMenu();
});

watch(
  () => currentRoute.fullPath,
  () => {
    updateMenu();
    const matched = currentRoute.matched;
    state.openKeys = matched.map((item) => item.name);
    const activeMenu: string = (currentRoute.meta?.activeMenu as string) || '';
    selectedKeys.value = activeMenu ? (activeMenu as string) : (currentRoute.name as string);
  }
);

function updateMenu () {
  const firstRouteName: string = (currentRoute.matched[0].name as string) || '';
  menusRef.value = generatorMenuMix(useRouterState.getMenus, firstRouteName, props.location);
  const activeMenu: string = currentRoute?.matched[0].meta?.activeMenu as string;
  headerMenuSelectKeyRef.value = (activeMenu || firstRouteName) || '';
  // props.toggleSider(!!menusRef.value.length);
  emit('toggleSider', !!menusRef.value.length);
}

// 展开菜单
function menuExpanded (openKeys: string[]) {
  if (!openKeys) return;
  const latestOpenKey = openKeys.find((key) => state.openKeys.indexOf(key) === -1);
  const isExistChildren = findChildrenLen(latestOpenKey as string);
  state.openKeys = isExistChildren ? (latestOpenKey ? [latestOpenKey] : []) : openKeys;
}

// 查找是否存在子路由
function findChildrenLen (key: string) {
  if (!key) return false;
  const subRouteChildren: string[] = [];
  for (const { children, key } of unref(menusRef)) {
    if (children && children.length) {
      subRouteChildren.push(key as string);
    }
  }
  return subRouteChildren.includes(key);
}

// 点击菜单
function clickMenuItem (key: string) {
  if (/http(s)?:/.test(key)) {
    window.open(key);
  } else {
    router.push({ name: key });
  }
  emit('clickMenuItem' as any, key);
}
</script>
