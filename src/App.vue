<template>
  <n-config-provider
    :theme="useTheme.getDark ? darkTheme : null"
    :theme-overrides="overrideTheme"
    :locale="locale"
    :date-locale="dateLocale"
  >
    <application>
      <router-view />
    </application>
  </n-config-provider>
</template>

<script setup lang="ts">
import { Application } from './components/application';

import { zhCN, dateZhCN, darkTheme } from 'naive-ui';
import { computed, ref } from 'vue';
import { useThemeStore } from './store/modules/theme';
import { globalTheme } from './theme';

const locale = ref(zhCN);
const dateLocale = ref(dateZhCN);
const useTheme = useThemeStore();

const overrideTheme = computed(() => {
  return globalTheme(useTheme);
});
</script>

<style lang="scss">
@import "@/styles/core";
</style>
