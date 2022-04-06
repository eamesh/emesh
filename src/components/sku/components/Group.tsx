import { FormItem } from '@/components/naive-ui/form';
import { NCheckbox, NIcon, NSelect, NSpace, SelectOption } from 'naive-ui';
import { computed, defineComponent, inject, ref, PropType, toRef, watchEffect, watch } from 'vue';
import { SkuInjection, skuInjectionKey, SkuSchema } from '../interface';
import { CloseCircleTwotone } from '@vicons/antd';
import SkuValue from './Value';
import { randomNumber } from '../utils';

const skuGroupProps = {
  index: Number,

  group: {
    type: Object as PropType<SkuSchema>,
    default: () => {}
  }
};

export default defineComponent({
  name: 'SkuGroup',

  props: skuGroupProps,

  setup (props) {
    const skuMain = inject(skuInjectionKey);
    const {
      clsPrefixRef,
      handleChangeSku,
      handleRemoveSku,
      createGroup,
      getGroups,
      groupsRef,
      skuData,
    } = skuMain as SkuInjection;
    const groupRef = toRef(props, 'group');
    const selectLoadingRef = ref(false);
    const useImage = ref(false);

    watchEffect(() => {
      useImage.value = groupRef.value.leaf.some(value => Object.prototype.hasOwnProperty.call(value, 'img_url')) && props.index === 0;
    });

    watch(
      () => useImage.value,
      (value) => {
        value ? groupRef.value.leaf.map(value => {
          !Object.prototype.hasOwnProperty.call(value, 'img_url') && (value.img_url = '');
        }) : groupRef.value.leaf.map(value => {
          delete value.img_url;
        });
      }
    );

    const groupOptions = computed<SelectOption[]>(() => {
      return groupsRef.value.map(item => ({
        label: item.name,
        value: item.id,
      })).filter(item => {
        return skuData.value.findIndex(itm => itm.id === item.value) === -1 || item.value === groupRef.value.id;
      });
    });

    const currentGroupValue = computed<any>({
      get () {
        return groupRef.value.name ? groupRef.value.id : null;
      },

      async set (value: string | number | null) {
        const {
          index
        } = props;
        let group: SkuSchema;
        selectLoadingRef.value = true;

        try {
          switch (typeof value) {
            case 'string': {
              // 未自定义Select组件 所以要判断一步创建规格是否已经存在
              // 创建规格
              const selectOption = getOptionByLabel(value);

              group = selectOption ? {
                id: selectOption.id,
                name: selectOption.name,
                leaf: [],
              } : await createGroup(value);
              group.leaf = [...groupRef.value.leaf];

              // 触发拉取规格
              !selectOption && await getGroups(true);
              break;
            }
            case 'number': {
              const selectOption = getOptionById(value as number);

              group = {
                id: selectOption?.id as number,
                name: selectOption?.name as string,
                leaf: [...groupRef.value.leaf]
              };
              break;
            }
            case 'object': {
              group = {
                id: -randomNumber(),
                name: '',
                leaf: [...groupRef.value.leaf]
              };
            }
          }

          handleChangeSku(index as number, group);
        } catch (error) {
          console.log(error);
        }
        selectLoadingRef.value = false;
      }
    });

    function getOptionById (id: number) {
      return groupsRef.value.find(option => option.id === id);
    }

    function getOptionByLabel (label: string) {
      return groupsRef.value.find(option => option.name === label);
    }

    const showCheckbox = computed(() => {
      return props.index === 0;
    });

    async function handleGetGroups () {
      selectLoadingRef.value = true;

      try {
        await getGroups(false);
      } catch (error) {
        console.log(error);
        throw error;
      }

      selectLoadingRef.value = false;
    }

    return {
      clsPrefix: clsPrefixRef,
      useImage,
      showCheckbox,
      groupRef,
      groupOptions,
      currentGroupValue,
      selectLoading: selectLoadingRef,
      handleGetGroups,
      handleRemoveSku,
    };
  },

  render () {
    const {
      index,
      group,
      clsPrefix,
      showCheckbox,
      groupOptions,
      selectLoading,
      handleGetGroups,
      handleRemoveSku,
    } = this;

    return (
      <FormItem hideFeedback hideHelp style={{gridTemplateRows: 'initial'}}>
        <div class={[
          `${clsPrefix}-group`
        ]}>
          <NSpace
            class={[
              `${clsPrefix}-group-section`
            ]}
            vertical
          >
            <NSpace
              class={[
                `${clsPrefix}-group-header`
              ]}
              align='center'
              size={[10, 0]}
            >
              <FormItem
                hideFeedback
                hideHelp
                labelPlacement='left'
                label='规格名:'
                labelWidth={'60'}
              >
                <NSelect
                  filterable
                  tag
                  size='small'
                  placeholder={''}
                  options={groupOptions}
                  v-model:value={this.currentGroupValue}
                  loading={selectLoading}
                  onFocus={handleGetGroups}
                  clearable
                />
              </FormItem>

              { showCheckbox ? <NCheckbox size='small' v-model:checked={this.useImage} label="添加规格图片" /> : null }

              <div
                class={[
                  `${clsPrefix}-group-close`
                ]}
                onClick={() => handleRemoveSku(index as number)}
              >
                <NIcon size={20}>
                  <CloseCircleTwotone />
                </NIcon>
              </div>
            </NSpace>
            <SkuValue index={index} group={group} useImage={this.useImage} />
          </NSpace>
        </div>
      </FormItem>
    );
  }
});
