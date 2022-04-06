<template>
  <n-card
    content-style="padding: 0;"
  >
    <n-tabs
      v-model:value="tabRef"
      type="line"
      :tabs-padding="20"
      pane-style="padding: 20px;box-sizing: border-box;"
    >
      <n-tab-pane
        name="0"
        tab="基础设置"
        display-directive="show"
      >
        <TitleDivider title="商品类型">
          <Types
            ref="typeRef"
            :type-key="typeKeyRef"
            @change="changeType"
          />
        </TitleDivider>
        <component
          :is="typeComponent"
          ref="formRef"
        />
      </n-tab-pane>
      <n-tab-pane
        name="1"
        tab="商品详情"
        display-directive="show"
      >
        <Editor v-model:content="content" />
      </n-tab-pane>
      <!-- <n-tab-pane
        name="2"
        tab="商品属性"
        display-directive="show"
      >
        七里香
      </n-tab-pane> -->
    </n-tabs>
  </n-card>
</template>

<script lang="ts" setup>
import { TypeKeys, TypeSchema } from './components/interface';
import { TitleDivider } from '@/components/title-divider';
import { shallowRef, ref } from 'vue';
import Types from './components/types';
import { Editor } from '@/components/editor';

const formRef = ref();
const typeRef = ref();
const typeKeyRef = ref<TypeKeys>('entity');
const typeComponent = shallowRef();
const tabRef = ref('0');
const content = ref('');

const changeType = (type: TypeSchema) => {
  typeKeyRef.value = type.key;
  typeComponent.value = type.name;
};

function submit () {
  formRef.value.submit(content.value);
}

function handleTypeTrigger (key: TypeKeys) {
  typeRef.value.handleTrigger(key);
}

defineExpose({
  submit,
  tabRef,
  handleTypeTrigger
});

</script>
