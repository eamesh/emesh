import './styles/tailwind.css';
import { createApp } from 'vue';
import App from './App.vue';
import { setupStore } from './store';
import { setupRouter } from './router';
import { setMeta } from './utils/naive-ui';

const bootstrap = async (): Promise<void> => {
  const app = createApp(App);

  // 挂载状态管理
  setupStore(app);

  // 挂载路由
  setupRouter(app);
  // await router.isReady();

  setMeta();

  app.mount('#app', true);
};

bootstrap();
