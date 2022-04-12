import { defineConfig, PluginOption } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import Components from 'unplugin-vue-components/vite';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';
import { createStyleImportPlugin, NutuiResolve } from 'vite-plugin-style-import';
import { resolve } from 'path';

const plugins: PluginOption[] = [
  vue(),
  vueJsx(),
  Components({
    dts: false,
    resolvers: [
      NaiveUiResolver()
    ]
  }),
  createStyleImportPlugin({
    resolves: [
      NutuiResolve(),
    ]
  }),
];

// https://vitejs.dev/config/
export default defineConfig({
  plugins,
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 配置 nutui 全局 scss 变量
        additionalData: '@import "@/styles/nutui/variables.scss";'
      }
    }
  }
});
