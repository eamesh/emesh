<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <n-layout position="absolute">
      <n-layout
        position="absolute"
      >
        <n-layout>
          <div class="sigin-container">
            <div class="sigin-form">
              <n-form
                ref="formRef"
                :model="model"
                label-placement="left"
                size="large"
                :rules="rules"
              >
                <n-form-item
                  path="email"
                >
                  <n-input
                    v-model:value="model.email"
                    placeholder="请输入邮箱"
                    @keydown.enter.prevent
                  />
                </n-form-item>
                <n-form-item
                  path="password"
                >
                  <n-input
                    v-model:value="model.password"
                    placeholder="请输入密码"
                    type="password"
                    @keydown.enter.prevent
                  />
                </n-form-item>
                <n-form-item>
                  <n-button
                    type="primary"
                    size="large"
                    block
                    :loading="loadingRef"
                    @click="submitSigin"
                  >
                    登录
                  </n-button>
                </n-form-item>
              </n-form>
            </div>
          </div>
        </n-layout>
      </n-layout>
      <n-layout-footer
        bordered
        position="absolute"
      >
        @
      </n-layout-footer>
    </n-layout>
  </n-config-provider>
</template>

<script lang="ts" setup>
import { FormRules, GlobalThemeOverrides, useMessage } from 'naive-ui';
import { useForm } from '@/hooks/form';
import { ref } from 'vue';
import { useUserStore } from '@/store/modules/user';
import { useRoute, useRouter } from 'vue-router';

const { formRef, loadingRef, formSubmit } = useForm();
const userStore = useUserStore();
const message = useMessage();

const route = useRoute();
const router = useRouter();

interface ModelType {
  email: string | null
  password: string | null
  device_name: string
}

const model = ref<ModelType>({
  email: 'easeava@gmail.com',
  password: '123456',
  device_name: 'control'
});

const rules: FormRules = {
  email: { required: true, message: '请输入邮箱', trigger: 'blur' },
  password: { required: true, message: '请输入密码', trigger: 'blur' }
};

const themeOverrides: GlobalThemeOverrides = {
  common: {
    heightLarge: '50px',
    fontSizeLarge: '14px'
  }
};

const submitSigin = async (e: MouseEvent) => {
  e.preventDefault();

  try {
    await formSubmit(userStore.login(model.value), (_) => {
      message.error('校验未通过');
    });
    message.success('登录成功');
    const path = decodeURIComponent((route.query?.redirect || '/') as string);
    router.replace(path);
  } catch (error) {
    message.error('登录失败');
  }
};
</script>

<style lang="scss">
.sigin-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .sigin-form {
    width: 400px;
  }
}
</style>
