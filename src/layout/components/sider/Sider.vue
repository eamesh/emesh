<template>
  <n-layout-sider
    v-show="toggleRef"
    bordered
    show-trigger
    collapse-mode="width"
    :collapsed-width="64"
    :width="240"
    :native-scrollbar="false"
    @collapse="collapsed = true"
    @expand="collapsed = false"
  >
    <aside-menu
      v-model:location="getLocation"
      mode="vertical"
      :collapsed="collapsed"
      @toggle-sider="toggleSider"
    />
  </n-layout-sider>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { Aside as AsideMenu } from '../aside';

const collapsed = ref(false);
const toggleRef = ref(true);

const getLocation = computed(() => {
  return 'left';
});

function toggleSider (toggle: boolean) {
  toggleRef.value = toggle;
}
</script>
