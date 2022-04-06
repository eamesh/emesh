import { FormItem } from '@/components/naive-ui/form';
import { Sku, SkuTable } from '@/components/sku';
import { SkuSchemas } from '@/components/sku/interface';
import { FlattenStock } from '@/components/sku/utils';
import { TitleDivider } from '@/components/title-divider';
import { isNumber } from 'lodash-es';
import { FormInst, FormRules, NCollapseTransition, NForm, NInputNumber, NP, NSpace, NSwitch } from 'naive-ui';
import { TableColumns } from 'naive-ui/lib/data-table/src/interface';
import { computed, defineComponent, h, inject, onMounted, ref, unref, watch } from 'vue';
import { useGoods } from '../../../hooks/goods';
import { useSku } from '../../../hooks/sku';
import { createGoodsFormInjectionKey } from '../interface';

export default defineComponent({
  name: 'FormData',

  setup () {
    const {
      isAction,
      goodsModel
    } = useGoods();
    const goods = inject(createGoodsFormInjectionKey);
    const formRef = ref<FormInst>();
    const priceRef = ref<FormInst>();
    const model = ref({
      none_sku: true,
      price: 0.00,
      cost_price: 0.00,
      weight: 0.00,
      stock: 0
    });

    const {
      handleCreateSkuGroup,
      handleCreateSkuValues,
      handleGetGroups,
      handleGetValues
    } = useSku();

    const listRef = ref<FlattenStock[]>([]);
    const skuRef = ref<SkuSchemas>([]);
    const flattenRef = ref<FlattenStock[]>([]);

    // const flatten = [
    //   {'skus':[{'k_id':1,'k':'颜色','v_id':1,'v':'红色'},{'k_id':2,'k':'尺寸','v_id':3,'v':'xl'}], price: 100.01,}
    // ];

    const rules: FormRules = {
      price: {
        type: 'number',
        trigger: 'blur',
        required: true,
        asyncValidator: (rule) => {
          return new Promise((resolve, reject) => {
            console.log(resolve, reject, rule, model.value.price);
            isSku.value || isNumber(model.value.price) ? resolve() : reject('请输入价格');
          });
        }
      }
    };

    // 设置编辑值
    watch(
      () => goodsModel.value,
      () => {
        const goodsModelUnRef = unref(goodsModel);
        const {
          none_sku,
          skus
        } = goodsModelUnRef;
        const tmpData = none_sku
          ? {
              price: skus[0].price,
              cost_price: skus[0].cost_price,
              weight: skus[0].weight,
              stock: goodsModelUnRef.stock
            }
          : {
              price: 0,
              cost_price: 0,
              weight: 0,
              stock: goodsModelUnRef.stock
            };

        model.value = {
          ...tmpData,
          none_sku
        };

        skuRef.value = goodsModelUnRef.tree.map((item: any) => {
          const sku = {
            ...item,
            leaf: item.values
          };

          delete sku.values;
          return sku;
        });

        flattenRef.value = goodsModelUnRef.skus;
      },
      {
        deep: true
      }
    );

    const renderColumn = (row: FlattenStock, column: string, start = 0) => {
      row[column] = row[column] || start;
      return h(NInputNumber, {
        value: row[column] as number,
        'onUpdate:value': (value: number | null) => row[column] = value
      });
    };

    const defaultColumns: TableColumns = [
      {
        title: '销售价',
        key: 'price',
        width: 160,
        render (row) {
          return renderColumn(row as FlattenStock, 'price');
        }
      },
      {
        title: '划线价',
        key: 'cost_price',
        width: 160,
        render (row) {
          return renderColumn(row as FlattenStock, 'cost_price');
        }
      },
      {
        title: '库存',
        key: 'stock',
        width: 160,
        render (row) {
          return renderColumn(row as FlattenStock, 'stock');
        }
      },
      {
        title: '重量(kg)',
        key: 'weight',
        width: 160,
        render (row) {
          return renderColumn(row as FlattenStock, 'weight', 0.00);
        }
      },
      {
        title: '默认展示',
        key: 'default',
        width: 160,
        render (row) {
          row.is_default = row.is_default || false;
          return h(NSwitch, {
            value: row.is_default as boolean,
            onUpdateValue: (v: boolean) => {
              console.log(listRef.value);
              listRef.value.map(item => item.is_default = false);

              row.is_default = v;
            }
          });
        }
      }
    ];

    function handleChangeData (data: FlattenStock[]) {
      listRef.value = data;
      console.log(data);
    }

    const isSku = computed({
      get: () => {
        return !model.value.none_sku;
      },

      set: (value: boolean) => {
        return model.value.none_sku = !value;
      }
    });

    function getModel () {
      const { none_sku } = model.value;

      const skus = none_sku
        ? [
            {
              price: model.value.price,
              cost_price: model.value.cost_price,
              weight: model.value.cost_price,
              stock: model.value.stock
            }
          ]
        : listRef.value;
      return {
        none_sku,
        stock: model.value.stock,
        skus,
        tree: skuRef.value
      };
    }

    onMounted(() => {
      goods?.setForm('data', formRef.value!, getModel);
    });

    watch(
      () => isSku.value,
      () => {
        isSku.value && priceRef.value?.restoreValidation();
      }
    );

    return {
      isAction,
      isSku,
      model,
      rules,
      formRef,
      skuRef,
      flattenRef,
      priceRef,
      // flatten,
      defaultColumns,
      handleChangeData,
      handleCreateSkuGroup,
      handleCreateSkuValues,
      handleGetGroups,
      handleGetValues
    };
  },

  render () {
    const {
      rules,
      // flatten,
      defaultColumns,
      handleChangeData,
      handleCreateSkuGroup,
      handleCreateSkuValues,
      handleGetGroups,
      handleGetValues
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
        <TitleDivider title="价格库存">
          <FormItem
            label="多规格:"
            path="none_sku"
          >
            <NSpace
              style="width: 100%;"
              vertical
            >
              {
                !this.isAction || this.model.none_sku ? <NSwitch v-model:value={this.isSku} /> : null
              }
              {
                this.isSku
                  ? (
                  <>
                    <Sku
                      v-model:sku={this.skuRef}
                      onCreateGroup={handleCreateSkuGroup}
                      onCreateValue={handleCreateSkuValues}
                      onGetGroups={handleGetGroups}
                      onGetValues={handleGetValues}

                    />
                    <NCollapseTransition show={!!this.skuRef.length}>
                      <SkuTable
                        sku={this.skuRef}
                        extraColumns={defaultColumns}
                        flatten={this.flattenRef}
                        onChangeData={handleChangeData}
                      />
                    </NCollapseTransition>
                  </>
                    )
                  : null
              }
            </NSpace>
          </FormItem>
          <FormItem
            label="价格:"
            path="price"
            class="form-long"
            ref="priceRef"
          >
            <NInputNumber
              showButton={false}
              v-model:value={this.model.price}
              disabled={this.isSku}
            >
              {{
                prefix: () => (
                  <NP>￥</NP>
                ),
                suffix: () => (
                  <NP>元</NP>
                )
              }}
            </NInputNumber>
          </FormItem>
          <FormItem
            label="划线价:"
            path="cost_price"
            class="form-long"
          >
            <NInputNumber
              showButton={false}
              v-model:value={this.model.cost_price}
              disabled={this.isSku}
            >
              {{
                prefix: () => (
                  <NP>￥</NP>
                ),
                suffix: () => (
                  <NP>元</NP>
                )
              }}
            </NInputNumber>
          </FormItem>
          <FormItem
            label="重量:"
            path="weight"
            class="form-long"
          >
            <NInputNumber
              showButton={false}
              v-model:value={this.model.weight}
              disabled={this.isSku}
            >
              {{
                suffix: () => (
                  <NP>kg</NP>
                )
              }}
            </NInputNumber>
          </FormItem>
          <FormItem
            label="库存:"
            path="stock"
            class="form-long"
          >
            <NInputNumber
              showButton={false}
              v-model:value={this.model.stock}
              disabled={this.isSku}
            >
              {{
                suffix: () => (
                <NP>件</NP>
                )
              }}
            </NInputNumber>
          </FormItem>
        </TitleDivider>
      </NForm>
    );
  }
});
