<template>
  <n-form
    :model="model"
    :rules="rules"
    label-placement="left"
    label-width="200px"
    require-mark-placement="right-hanging"
  >
    <TitleDivider title="基础信息">
      <n-form-item
        label="商品名称:"
        path="name"
        class="form-mid"
      >
        <n-input
          v-model:value="model.name"
          placeholder="请输入商品名称，不能超过60个字符"
        />
      </n-form-item>
      <n-form-item
        label="促销语:"
        path="description"
        class="form-mid"
      >
        <n-input
          v-model:value="model.description"
          type="textarea"
          placeholder="请输入促销语，不能超过100个字符"
          :autosize="{
            minRows: 4,
            maxRows: 4
          }"
        />
      </n-form-item>

      <n-form-item
        label="商品图:"
        path="images"
        class="form-mid"
      >
        <n-upload
          action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
          list-type="image-card"
        />
      </n-form-item>
      <div class="help-text">
        <n-text
          depth="3"
          tag="div"
        >
          第一张图片将作为商品主图,支持同时上传多张图片,多张图片之间可随意调整位置；
        </n-text>
        <n-text
          depth="3"
          tag="div"
        >
          支持jpg、gif、png格式上传或从图片空间中选择，建议使用尺寸800x800像素以上、大小不超过1M的正方形图片；
        </n-text>
        <n-text
          depth="3"
          tag="div"
        >
          上传后的图片将会自动保存在图片空间的默认分类中，最多上传10张（至少1张）
        </n-text>
      </div>

      <n-form-item
        label="关键词:"
        path="tags"
        class="form-long"
      >
        <n-dynamic-tags v-model:value="model.tags" />
      </n-form-item>
      <n-form-item
        label="商品分组:"
        path="description"
      >
        <n-select
          v-model:value="model.description"
          multiple
          filterable
          placeholder="请选择商品分组"
          clearable
          remote
          :clear-filter-after-select="false"
          style="width: 250px;"
        />
      </n-form-item>
      <n-form-item
        label="商品分类:"
        path="description"
        class="form-mid"
      >
        <n-select
          v-model:value="model.description"
          multiple
          filterable
          placeholder="请选择商品分类"
          clearable
          remote
          :clear-filter-after-select="false"
          style="width: 250px;"
        />
      </n-form-item>
    </TitleDivider>
    <TitleDivider title="价格库存">
      <n-form-item
        label="多规格:"
        path="none_sku"
        class="form-long"
      >
        <n-switch v-model:value="model.none_sku" />
      </n-form-item>
      <n-form-item
        label="销售价:"
        path="price"
        class="form-long"
      >
        <n-input-number
          v-model:value="model.price"
          :show-button="false"
        >
          <template #prefix>
            ￥
          </template>
          <template #suffix>
            元
          </template>
        </n-input-number>
      </n-form-item>
      <n-form-item
        label="划线价:"
        path="price"
        class="form-long"
      >
        <n-input-number
          v-model:value="model.price"
          :show-button="false"
        >
          <template #prefix>
            ￥
          </template>
          <template #suffix>
            元
          </template>
        </n-input-number>
      </n-form-item>
      <n-form-item
        label="成本价:"
        path="price"
        class="form-long"
      >
        <n-input-number
          v-model:value="model.price"
          :show-button="false"
        >
          <template #prefix>
            ￥
          </template>
          <template #suffix>
            元
          </template>
        </n-input-number>
      </n-form-item>
      <n-form-item
        label="重量:"
        path="price"
        class="form-long"
      >
        <n-input-number
          v-model:value="model.price"
          :show-button="false"
        >
          <template #suffix>
            kg
          </template>
        </n-input-number>
      </n-form-item>
      <n-form-item
        label="体积:"
        path="price"
        class="form-long"
      >
        <n-input-number
          v-model:value="model.price"
          :show-button="false"
        >
          <template #suffix>
            m3
          </template>
        </n-input-number>
      </n-form-item>
      <n-form-item
        label="库存:"
        path="price"
        class="form-long"
      >
        <n-input-number
          v-model:value="model.price"
          :show-button="false"
        >
          <template #suffix>
            件
          </template>
        </n-input-number>
      </n-form-item>
      <n-form-item
        label="库存预警:"
        path="price"
        class="form-long"
      >
        <n-input-number
          v-model:value="model.price"
          :show-button="false"
        >
          <template #suffix>
            件
          </template>
        </n-input-number>
      </n-form-item>
    </TitleDivider>

    <TitleDivider title="核销设置">
      <n-form-item
        label="核销"
        path="description"
        class="form-mid"
      >
        <n-switch v-model:value="model.none_sku" />
      </n-form-item>
    </TitleDivider>

    <TitleDivider title="会员设置">
      <n-form-item
        label="限购"
        path="description"
        class="form-mid"
      >
        <n-input-number
          v-model:value="model.price"
          :show-button="false"
        >
          <template #suffix>
            件
          </template>
        </n-input-number>
      </n-form-item>
      <n-form-item
        label="起购"
        path="description"
        class="form-mid"
      >
        <n-input-number
          v-model:value="model.price"
          :show-button="false"
        >
          <template #suffix>
            件
          </template>
        </n-input-number>
      </n-form-item>
    </TitleDivider>

    <TitleDivider title="其它信息">
      <n-form-item
        label="单位:"
        path="description"
        class="form-short"
      >
        <n-input
          v-model:value="model.description"
          placeholder="请输入单位"
        />
      </n-form-item>
      <n-form-item
        label="虚拟销量"
        path="description"
        class="form-mid"
      >
        <n-input-number
          v-model:value="model.price"
          :show-button="false"
        >
          <template #suffix>
            件
          </template>
        </n-input-number>
      </n-form-item>
      <n-form-item
        label="上架"
        path="none_sku"
        class="form-mid"
      >
        <n-switch v-model:value="model.none_sku" />
      </n-form-item>
      <n-form-item
        label="定时上架"
        path="timestamp"
      >
        <n-date-picker
          v-model:value="model.timestamp"
          type="datetime"
          clearable
        />
      </n-form-item>
    </TitleDivider>
  </n-form>
</template>

<script lang="ts" setup>
import { TitleDivider } from '@/components/title-divider';
import { ref } from 'vue';

const model = ref({
  name: null,
  description: null,
  images: null,
  tags: [],
  none_sku: false,
  price: 0.00,
  timestamp: null
});

const rules = {
  name: {
    required: true,
    message: '请输入商品名称',
    trigger: 'blur'
  },
  images: {
    required: true,
    message: '请上传商品图'
  },
  timestamp: {
    type: 'number',
    message: '请选择上架时间'
  }
};
defineExpose({
  submit: () => {
    console.log('card submit');
    return Promise.resolve();
  }
});
</script>

<style lang="scss">
.form-short {
  .n-form-item-blank {
    width: 160px;
  }
}

.form-mid {
  .n-form-item-blank {
    width: 460px;
  }
}

.form-long {
  .n-form-item-blank {
    width: 800px;
  }
}

</style>
