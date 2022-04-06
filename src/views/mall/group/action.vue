<template>
  <SpaceView>
    <n-card size="small">
      <n-form
        ref="formRef"
        :model="model"
        class="group-form mt-4"
        label-placement="left"
        label-width="160px"
        size="large"
        :rules="rules"
      >
        <n-form-item
          path="name"
          label="分组名"
        >
          <n-input v-model:value="model.name" />
        </n-form-item>
        <n-form-item
          path="alias"
          label="分组别名"
        >
          <n-input v-model:value="model.alias" />
        </n-form-item>
        <n-space
          style="margin-left: 160px; margin-bottom: 20px;"
        >
          <n-button
            type="primary"
            :loading="loadingRef"
            @click="handleSubmit"
          >
            提交
          </n-button>
          <router-button to="/mall/group">
            返回
          </router-button>
        </n-space>
      </n-form>
    </n-card>
  </SpaceView>
</template>

<script lang="ts" setup>
import { RouterButton } from '@/components/router-button';
import { useForm } from '@/hooks/form';
import { FormRules, useMessage } from 'naive-ui';
import { computed, ref } from 'vue';
import { create as groupCreate, update as groupUpdate, getDetail } from '@/api/mall/group';
import { useRoute, useRouter } from 'vue-router';
import { SpaceView } from '@/components/space-view';

const router = useRouter();
const message = useMessage();
const route = useRoute();

const {
  params: {
    id
  }
} = route;

const isAction = computed<boolean>(() => {
  return !!id;
});

const model = ref({
  name: '',
  alias: ''
});

const {
  formRef,
  formSubmit,
  loadingRef
} = useForm();

const rules: FormRules = {
  name: {
    type: 'string',
    required: true,
    message: '请输入分组名'
  },
  alias: {
    type: 'string',
    required: true,
    message: '请输入分组别名'
  }
};

async function handleGetDetail () {
  loadingRef.value = true;
  try {
    model.value = await getDetail(id as string);
  } catch (error) {
    console.log(error);
  }
  loadingRef.value = false;
}

async function handleSubmit () {
  const text = isAction.value ? '更新' : '新建';
  try {
    await formSubmit(
      isAction.value ? groupUpdate(id as string, model.value) : groupCreate(model.value)
    );

    message.success(`${text}成功`);
    router.replace('/mall/group');
  } catch (error) {
    message.error(`${text}失败`);
  }
}

id && handleGetDetail();
</script>

<style lang="scss">
.group-form {
  width: 600px;

  .n-form-item-label {
    font-size: 12px;
  }

  input::input-placeholder {
    font-size: 12px;
  }
}
</style>
