<template>
  <n-layout-header
    bordered
    class="layout-header"
  >
    <div class="layout-header__left">
      Header Header Header
      <Aside />
    </div>
    <div class="layout-header__right">
      <div class="tool-lists">
        <div class="tool-item">
          <n-icon size="18">
            <component
              :is="dark ? Moon : MoonOutline"
              @click="toggleDark"
            />
          </n-icon>
        </div>

        <div class="tool-item">
          <n-tooltip placement="bottom">
            <template #trigger>
              <n-icon size="18">
                <component
                  :is="fullscreen"
                  @click="toggleFullScreen"
                />
              </n-icon>
            </template>
            <span>全屏</span>
          </n-tooltip>
        </div>

        <div class="tool-item">
          <n-dropdown
            trigger="hover"
            :options="avatarOptions"
            @select="handleSelect"
          >
            <n-avatar
              round
              size="small"
            >
              太年轻
            </n-avatar>
          </n-dropdown>
        </div>

        <div class="tool-item">
          <n-icon
            round
            size="18"
          >
            <SettingsOutline />
          </n-icon>
        </div>
      </div>
    </div>
  </n-layout-header>
</template>

<script lang="ts" setup>
import { computed, ref, shallowRef } from 'vue';
import { NIcon, useDialog } from 'naive-ui';
import {
  SettingsOutline,
  Moon,
  MoonOutline
} from '@vicons/ionicons5';
import { FullScreenMaximize24Regular, FullScreenMinimize24Regular } from '@vicons/fluent';
import { useThemeStore } from '@/store/modules/theme';
import { Aside } from '../aside';
import { useUserStore } from '@/store/modules/user';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();
const dialog = useDialog();
// const message = useMessage();
const useUser = useUserStore();

const confirmLoading = ref(false);

// function renderIcon (icon: vue.Component) {
//   return () => h(NIcon, null, { default: () => h(icon) });
// }

// const menuOptions = [
//   {
//     label: '概览',
//     key: '1',
//     icon: renderIcon(PieChartOutline)
//   },
//   {
//     label: '商品',
//     key: '2',
//     icon: renderIcon(ListCircleOutline)
//   },
//   {
//     label: '订单',
//     key: '3',
//     icon: renderIcon(ReorderFourOutline)
//   },
//   {
//     label: '会员',
//     key: '4',
//     icon: renderIcon(PeopleCircleOutline)
//   },
//   {
//     label: '财务',
//     key: '5',
//     icon: renderIcon(CardOutline)
//   },
//   {
//     label: '设置',
//     key: '6',
//     icon: renderIcon(SettingsOutline)
//   }
// ];

const avatarOptions = [
  {
    label: '个人设置',
    key: 1,
    props: {
      onClick: () => {
        console.log('setting');
      }
    }
  },
  {
    label: '退出登录',
    key: 2,
    props: {
      onClick: () => {
        dialog.warning({
          title: '警告',
          content: '你确定？',
          positiveText: '确定',
          negativeText: '取消',
          loading: confirmLoading.value,
          onPositiveClick: async () => {
            confirmLoading.value = true;
            try {
              await useUser.logout();
              router.replace({
                name: 'system-auth-sigin',
                query: {
                  redirect: route.fullPath
                }
              });
            } catch (error) {
              console.log(error);
            }
            confirmLoading.value = false;
          },
          onNegativeClick: () => {}
        });
      }
    }
  }
];

function handleSelect (key: string | number) {
  console.log(key);
}

const fullscreen = shallowRef(FullScreenMaximize24Regular);

const toggleFullscreenIcon = () => {
  fullscreen.value = document.fullscreenElement !== null ? FullScreenMinimize24Regular : FullScreenMaximize24Regular;
};

document.addEventListener('fullscreenchange', toggleFullscreenIcon);

const toggleFullScreen = () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
};

const useTheme = useThemeStore();
const dark = computed(() => useTheme.dark);
const toggleDark = () => {
  useTheme.toggleDark();
};
</script>

<style lang="scss" scoped>
.layout-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 0 24px;
  flex-shrink: 0;

  &__left {
    display: flex;
    align-items: center;
  }

  ::deep(.n-menu-item-content-header) {
    line-height: initial;
  }
}

.tool-lists,
.tool-item,
.n-icon {
  display: flex;
  align-items: center;
}

.tool-lists {
  flex-direction: row;
}

.tool-item {
  margin: 0 10px;
  cursor: pointer;
}

</style>
