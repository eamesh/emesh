<template>
  <div class="title-divider">
    <n-text class="text-title">
      {{ title }}
    </n-text>
    <n-hr class="title-divider__hr" />
    <slot />
  </div>
</template>

<script lang="ts" setup>
defineProps<{ title: string }>();
</script>

<style lang="scss">
.title-divider {
  margin-bottom: 24px;

  &__hr {
    margin-bottom: 20px;
  }
}

.text-title {
  font-weight: 600;
  font-size: 14px;
}
</style>
