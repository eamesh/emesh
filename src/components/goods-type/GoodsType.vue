<template>
  <div
    :class="typeClasses"
  >
    <n-text>{{ title }}</n-text>
    <n-text>({{ deliveryText }})</n-text>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  delivery: {
    type: Boolean,
    default: true
  },
  active: {
    type: Boolean,
    default: false
  },
});

const deliveryText = computed(() => {
  return props.delivery ? '需要物流' : '无需物流';
});

const typeClasses = computed(() => {
  return {
    'goods-type': true,
    'goods-type__active': props.active
  };
});
</script>

<style lang="scss">
.goods-type {
  margin-right: 15px;
  padding: 15px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid var(--n-border-color);
  cursor: pointer;

  &__active {
    border: 1px solid var(--n-color-target);
  }
}
</style>
