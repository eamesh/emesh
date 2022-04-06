import { DynamicTags } from '@/components/naive-ui/dynamic-tags';
import { FormItem } from '@/components/naive-ui/form';
import { NSelect } from 'naive-ui';
import { FileInfo } from 'naive-ui/lib/upload/src/interface';
import { computed, defineComponent, inject, PropType, ref, toRef } from 'vue';
import { SkuInjection, skuInjectionKey, SkuSchema, SkuValueSchemas } from '../interface';
import SkuImage from './Image';
// import { randomNumber } from '../utils';

const skuValueProps = {
  index: Number,

  group: {
    type: Object as PropType<SkuSchema>,
    default: () => {}
  },

  useImage: Boolean
};

export default defineComponent({
  name: 'SkuValue',

  props: skuValueProps,

  setup (props) {
    const skuMain = inject(skuInjectionKey);
    const {
      clsPrefixRef,
      createValue,
      valuesRef,
      handleChangeSku
    } = skuMain as SkuInjection;
    const selectValuesRef = ref([]);
    const selectLoadingRef = ref(false);
    // const leafValuesRef = toRef<SkuSchema, 'leaf'>(props.group, 'leaf');
    const groupRef = toRef(props, 'group');
    // const tagValuesRef = ref([]);

    const optionsRef = computed(() => {
      return valuesRef.value.map(item => {
        return {
          label: item.name,
          value: item.id,
        };
      }).filter(item => {
        return tagValues.value.findIndex(label => label === item.label) === -1;
      });
    });

    async function handleBlur (e: FocusEvent, deactivate: () => void) {
      // 遍历selectValuesRef.value 筛选typeof为string的值
      // 把string[]传递给createValue
      // 接收创建的规格值
      // 插入当前group的叶子节点

      /**
       * string 为新增
       * number 为选中
       */

      let leafs: SkuValueSchemas = [];

      const createData = selectValuesRef.value.filter(item => {
        return typeof item === 'string';
      }).filter(item => {
        return tagValues.value.findIndex(label => label === item) === -1;
      });

      if (createData.length) {
        selectLoadingRef.value = true;
        try {
          leafs = await createValue(createData) || [];
          selectLoadingRef.value = false;
        } catch (error) {
          console.log(error);
          selectLoadingRef.value = false;
          throw error;
        }
      }

      const options = selectValuesRef.value.map(item => {
        switch (typeof item) {
          case 'string': {
            return leafs.find(leaf => {
              return leaf.name === item;
            });
          }
          case 'number': {
            return valuesRef.value.find(value => {
              return value.id === item;
            });
          }
        }
      }).filter(item => item) as SkuValueSchemas;

      if (props.useImage) {
        options.map(option => {
          option.img_url = '';
        });
      }

      handleChangeSku(props.index as number, {
        ...props.group,
        leaf: [
          ...props.group.leaf,
          ...options
        ]
      });

      selectValuesRef.value = [];
      deactivate();
    }

    const tagValues = computed({
      get () {
        return groupRef.value.leaf.map(item => item.name.toString());
      },
      set (labels: string[]) {
        // 判断labels个数 小于当前叶子节点个数为close操作
        const tagOrValue = labels.length < tagValues.value.length ? groupRef.value.leaf : valuesRef.value;

        const options = labels.map(label => {
          return tagOrValue.find(value => {
            return value.name === label;
          });
        }).filter(item => item) as SkuValueSchemas;

        console.log('更新tag value', options, valuesRef.value);

        handleChangeSku(props.index as number, {
          ...props.group,
          leaf: [
            ...options
          ]
        });
      }
    });

    function handleSetImage (index: number, files: FileInfo[]) {
      if (files.length) {
        const options = props.group.leaf;
        options[index].img_url = files[0].thumbnailUrl! || '';
        handleChangeSku(props.index as number, {
          ...props.group,
          leaf: [
            ...options
          ]
        });
      }
    }

    return {
      clsPrefix: clsPrefixRef,
      options: optionsRef,
      handleBlur,
      selectValues: selectValuesRef,
      selectLoading: selectLoadingRef,
      leafValues: groupRef.value.leaf,
      tagValues,
      groupRef,
      handleSetImage,
    };
  },

  render () {
    const {
      $props,
      clsPrefix,
      handleBlur,
      selectLoading,
      useImage,
    } = this;

    return (
      <FormItem
        class={[
          `${clsPrefix}-group-body`
        ]}
        hideFeedback
        hideHelp
        labelPlacement='left'
        label='规格值:'
        labelWidth={'60'}
      >
        <DynamicTags v-model:value={this.tagValues} size='small'>
          {{
            input: ({ deactivate} : { submit: (value: any) => void, deactivate: () => void }) => (
              <NSelect
                size='small'
                style={{minWidth: '140px'}}
                placeholder=''
                filterable
                tag
                multiple
                options={this.options}
                onBlur={(e) => handleBlur(e, deactivate)}
                v-model:value={this.selectValues}
                loading={selectLoading}
              />
            ),
            tagExtra: ({ index }: { index: number }) => {
              return useImage ? (
                <SkuImage index={index} groupIndex={$props.index} group={this.groupRef} />
                // <UploadImageMain defaultFileList={defaultFile} max={1} onChange={(files) => handleSetImage(index, files)} />
              ) : null;
            }
          }}
        </DynamicTags>
      </FormItem>
    );
  }
});
