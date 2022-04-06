<template>
  <n-layout
    class="layout"
    position="absolute"
    content-style="display: flex; flex-direction: column;"
  >
    <layout-header />

    <n-layout has-sider>
      <layout-sider />
      <n-layout-content :native-scrollbar="false">
        <n-breadcrumb
          :style="{
            padding: '12px 24px 0'
          }"
        >
          <template
            v-for="item in breadcrumbList"
            :key="item.name"
          >
            <n-breadcrumb-item>
              <router-link :to="item.path">
                {{ item.meta.title }}
              </router-link>
            </n-breadcrumb-item>
          </template>
        </n-breadcrumb>
        <router-view />
      </n-layout-content>
    </n-layout>
    <n-layout-footer
      bordered
    >
      <div class="copyright">
        Eamesh Mall · Made by Easeava
      </div>
    </n-layout-footer>
  </n-layout>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { Header as LayoutHeader } from './components/header';
import { Sider as LayoutSider } from './components/sider';

const route = useRoute();

const generator: any = (routerMap: any) => {
  return routerMap.map((item: any) => {
    const currentMenu = {
      ...item,
      label: item.meta.title,
      key: item.name,
      disabled: item.path === '/'
    };

    if (item.children && item.children.length > 0) {
      currentMenu.children = generator(item.children, currentMenu);
    }

    return currentMenu;
  });
};

const breadcrumbList = computed(() => {
  return generator(route.matched);
});
console.log(breadcrumbList.value);
</script>

<style lang="scss">
.copyright {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  line-height: 24px;
}
</style>
