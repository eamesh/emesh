import { FormItem } from '@/components/naive-ui/form';
import { TitleDivider } from '@/components/title-divider';
import { FormInst, NDatePicker, NForm, NInput, NInputNumber, NP, NRadio, NRadioGroup, NSpace, NText } from 'naive-ui';
import { defineComponent, inject, onMounted, ref, unref, watch } from 'vue';
import { useGoods } from '../../../hooks/goods';
import { createGoodsFormInjectionKey } from '../interface';

export interface FormSchema {
  publish: boolean;
  buy_text: string;
  unit: string;
  virtual_sold_num: number;
  quota: number;
  mininum: number;
  publish_datetime: string | null;
  down_datetime: string| null;
}

export default defineComponent({
  name: 'FormBase',

  setup () {
    const {
      goodsModel
    } = useGoods();
    const goods = inject(createGoodsFormInjectionKey);
    const formRef = ref<FormInst>();
    const model = ref<FormSchema>({
      publish: true,
      buy_text: '购买',
      unit: '件',
      virtual_sold_num: 0,
      quota: 0,
      mininum: 0,
      publish_datetime: null,
      down_datetime: null
    });
    const customBuyText = ref(model.value.buy_text !== '购买' ? model.value.buy_text : '');
    const customType = ref('default');

    const publishType = ref(model.value.publish_datetime ? 'datetime' : 'publish');

    watch(
      () => goodsModel.value,
      () => {
        const goodsModelUnRef = unref(goodsModel);
        model.value = {
          publish: goodsModelUnRef.publish,
          buy_text: '购买',
          unit: goodsModelUnRef.unit,
          virtual_sold_num: goodsModelUnRef.virtual_sold_num,
          quota: goodsModelUnRef.quota,
          mininum: goodsModelUnRef.mininum,
          publish_datetime: null,
          down_datetime: null
        };
      }
    );

    function getModel () {
      return model.value;
    }

    onMounted(() => {
      goods?.setForm('other', formRef.value!, getModel);
    });

    watch(
      () => publishType.value,
      (value) => {
        switch (value) {
          case 'publish':
            model.value.publish = true;
            model.value.publish_datetime = null;
            break;

          case 'datetime':
            model.value.publish = false;
            break;
        }
      },
      {
        immediate: true
      }
    );

    watch(
      () => customType.value,
      () => {
        customType.value === 'default' && (customBuyText.value = '', model.value.buy_text = '购买');
      }
    );

    watch(
      () => customBuyText.value,
      () => {
        model.value.buy_text = customBuyText.value;
      }
    );

    return {
      model,
      formRef,
      publishType,
      customBuyText,
      customType
    };
  },

  render () {
    return (
      <NForm
        v-model={this.model}
        ref="formRef"
        label-placement="left"
        label-width="200px"
        require-mark-placement="right-hanging"
        class="form-model"
      >
        <TitleDivider title="其它信息">
          <FormItem
            label="开售时间:"
          >
            <NRadioGroup v-model:value={this.publishType}>
              <NSpace
                class="mt-2"
                vertical
              >
                <NRadio value="publish" size="small">
                  <NP>立即开售</NP>
                </NRadio>
                <NSpace align="center">
                  <NRadio value="datetime" size="small">
                    <NP>定时开售</NP>
                  </NRadio>
                  <NDatePicker
                    type="datetime"
                    clearable
                    size="small"
                    v-model:formattedValue={this.model.publish_datetime}
                    disabled={this.publishType !== 'datetime'}
                  />
                </NSpace>
              </NSpace>
            </NRadioGroup>
          </FormItem>
          <FormItem
            label="定时下架:"
            path="unit"
          >
            {{
              default: () => (
                <NDatePicker
                  type="datetime"
                  clearable
                  size="small"
                  v-model:formattedValue={this.model.down_datetime}
                />
              ),
              help: () => (
                <NText depth="3">
                  开启定时下架后，系统会在设置时间下架该商品。下架时间需要晚于开售时间，商品才能定时开售。
                </NText>
              )
            }}
          </FormItem>
          <FormItem
            label="立即购买按钮:"
            path="unit"
          >
            <NSpace>
              <NRadioGroup
                v-model:value={this.customType}
                name="radiogroup"
              >
                <NSpace
                  align="center"
                >
                  <NRadio value="default" size="small">
                    <NP>默认名称</NP>
                  </NRadio>
                  <NSpace align="center">
                    <NRadio value="custom">
                      <NP>自定义名称</NP>
                    </NRadio>
                    <NInput placeholder={''} disabled={this.customType !== 'custom'} v-model:value={this.customBuyText} size="small" />
                  </NSpace>
                </NSpace>
              </NRadioGroup>
            </NSpace>
          </FormItem>
          <FormItem
            label="单位:"
            path="unit"
            class="form-short"
          >
            <NInput
              v-model:value={this.model.unit}
              placeholder="请输入单位"
            />
          </FormItem>
          <FormItem
            label="虚拟销量:"
            path="virtual_sold_num"
            class="form-short"
          >
            <NInputNumber
              v-model:value={this.model.virtual_sold_num}
              showButton={false}
            >
              {{
                suffix: () => (
                  <NP>件</NP>
                )
              }}
            </NInputNumber>
          </FormItem>
          <FormItem
            label="限购:"
            path="quota"
            class="form-short"
          >
            {/* <NCheckboxGroup>
              <NSpace>
                <NCheckbox size="small">
                  <NP>限制每人可购数量</NP>
                </NCheckbox>
                <NCheckbox size="small">
                  <NP>只允许特定用户购买</NP>
                </NCheckbox>
              </NSpace>
            </NCheckboxGroup> */}
            <NInputNumber
              v-model:value={this.model.quota}
            />
          </FormItem>
          <FormItem
            label="起售:"
            path="mininum"
          >
            <NSpace vertical>
              <NSpace align="center">
                <NP>商品至少</NP>
                <NInputNumber
                  size="small"
                  style="width: 160px;"
                  v-model:value={this.model.mininum}
                />
                <NP>件起售</NP>
              </NSpace>
            </NSpace>
          </FormItem>
        </TitleDivider>
      </NForm>
    );
  }
});
