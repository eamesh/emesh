import { FormItem } from '@/components/naive-ui/form';
import { TitleDivider } from '@/components/title-divider';
import { FormInst, FormRules, NCheckbox, NCheckboxGroup, NDivider, NForm, NInputNumber, NP, NRadio, NRadioGroup, NSelect, NSpace } from 'naive-ui';
import { defineComponent, inject, onMounted, ref, unref, watch } from 'vue';
import { RouterLink } from 'vue-router';
import NA from '@/components/upload/a';
import { createGoodsFormInjectionKey } from '../interface';
import { isNumber } from 'lodash-es';
import { useGoods } from '../../../hooks/goods';

export default defineComponent({
  name: 'FormBase',

  setup () {
    const {
      goodsModel
    } = useGoods();
    const goods = inject(createGoodsFormInjectionKey);
    const formRef = ref<FormInst>();
    const model = ref({
      delivery_type: ['express'],
      express: {
        delivery_price: 0,
        delivery_id: null,
        express_type: 'price'
      }
    });

    const rules: FormRules = {
      delivery_type: {
        type: 'array',
        required: true,
        trigger: 'change',
        asyncValidator: () => {
          return new Promise((resolve, reject) => {
            model.value.delivery_type.length > 0 ? resolve() : reject('请选择配送方式');
          });
        }
      },
      express: {
        delivery_price: {
          type: 'number',
          asyncValidator: () => {
            return new Promise((resolve, reject) => {
              (model.value.delivery_type as string[]).includes('express') === false ||
                model.value.express.express_type !== 'price' ||
                isNumber(model.value.express.delivery_price)
                ? resolve()
                : reject('请输入配送价格');
            });
          }
        },
        delivery_id: {
          type: 'string',
          trigger: 'change',
          asyncValidator: () => {
            return new Promise((resolve, reject) => {
              (model.value.delivery_type as string[]).includes('express') === false ||
                model.value.express.express_type !== 'template' ||
                isNumber(model.value.express.delivery_id)
                ? resolve()
                : reject('请选择运费模板');
            });
          }
        }
      }
    };

    watch(
      () => goodsModel.value,
      () => {
        const goodsModelUnRef = unref(goodsModel);
        model.value = {
          delivery_type: goodsModelUnRef.delivery_type,
          express: {
            delivery_price: goodsModelUnRef.delivery_price,
            delivery_id: goodsModelUnRef.delivery_id || null,
            express_type: goodsModelUnRef.express_type
          }
        };
      }
    );

    function getModel () {
      return {
        delivery_type: model.value.delivery_type,
        ...model.value.express,
        delivery_id: model.value.express.delivery_id || 0
      };
    }

    onMounted(() => {
      goods?.setForm('delivery', formRef.value!, getModel);
    });

    return {
      model,
      rules,
      formRef
    };
  },

  render () {
    const {
      rules
    } = this;

    return (
      <NForm
        v-model={this.model}
        ref="formRef"
        rules={rules}
        label-placement="left"
        label-width="200px"
        require-mark-placement="right-hanging"
        class="form-model"
      >
        <TitleDivider title="物流信息">
          <FormItem
            label="配送方式:"
            path="delivery_type"
            class="form-mid"
          >
            <NCheckboxGroup v-model:value={this.model.delivery_type}>
              <NSpace item-style="display: flex;">
                <NCheckbox
                  value="express"
                  size="small"
                >
                  <NP>
                    快递发货
                  </NP>
                </NCheckbox>
              </NSpace>
            </NCheckboxGroup>
          </FormItem>
          {
            this.model.delivery_type.includes('express')
              ? (
              <FormItem
                label="快递运费:"
                path="express.delivery"
              >
                <NRadioGroup v-model:value={this.model.express.express_type}>
                  <NSpace vertical>
                    <NSpace align="center">
                      <NRadio
                        value="price"
                        size="small"
                      >
                        <NP>统一邮费</NP>
                      </NRadio>
                      <FormItem hideHelp hideFeedback path='express.delivery_price'>
                        <NInputNumber disabled={this.model.express.express_type !== 'price'} v-model:value={this.model.express.delivery_price} size="small" style={{ width: '140px' }} />
                      </FormItem>
                    </NSpace>
                    <NSpace align="center">
                      <NRadio
                        value="template"
                        size="small"
                      >
                        <NP>运费模板</NP>
                      </NRadio>
                      <FormItem hideFeedback hideHelp path='express.delivery_id'>
                        <NSelect
                          v-model:value={this.model.express.delivery_id}
                          style="width: 200px;"
                          size="small"
                          disabled={this.model.express.express_type !== 'template'}
                        />
                      </FormItem>
                      <div>
                        <RouterLink to="/">
                          <NA>新建</NA>
                        </RouterLink>
                        <NDivider vertical />
                        <NA>刷新</NA>
                      </div>
                    </NSpace>
                  </NSpace>
                </NRadioGroup>
              </FormItem>
                )
              : null
          }
        </TitleDivider>
      </NForm>
    );
  }
});
