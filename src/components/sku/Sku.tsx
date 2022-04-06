import { NCard, NSpace, useMessage } from 'naive-ui';
import { computed, defineComponent, onMounted, PropType, provide, ref, toRef, watch } from 'vue';
import { useTheme } from 'naive-ui/lib/_mixins';
import skuLight from './styles/light';
import style from './styles/sku.cssr';
import { CreateGroup, CreateValue, GetGroups, GetValues, SkuBaseSchema, skuInjectionKey, SkuSchema, SkuSchemas, SkuValueSchemas } from './interface';
import SkuGroup from './components/Group';
import SkuButton from './components/Button';
import { randomNumber } from './utils';

const skuProps = {
  sku: {
    type: Array as PropType<SkuSchemas>,
    default: () => []
  },
  max: {
    type: Number,
    default: 3,
  },
  onCreateGroup: {
    type: Function as PropType<CreateGroup>,
    required: true,
    default: () => {}
  },
  onCreateValue: {
    type: Function as PropType<CreateValue>,
    required: true,
    default: () => {}
  },
  onGetGroups: {
    type: Function as PropType<GetGroups>,
    required: true,
    default: () => {}
  },
  onGetValues: {
    type: Function as PropType<GetValues>,
    required: true,
    default: () => {}
  },
};

export default defineComponent({
  name: 'Sku',

  props: skuProps,

  emits: ['update:sku'],

  setup (props, { emit }) {
    const clsPrefixRef = ref('sku');
    const useImageRef = ref(false);
    const skuData = toRef(props, 'sku');
    const groupsRef = ref<SkuBaseSchema[]>([]);
    const valuesRef = ref<SkuValueSchemas>([]);
    // 已加载规格名
    const isLoadGroups = ref(false);
    const isLoadValues = ref(false);
    const message = useMessage();

    useTheme(
      'Card',
      '-card',
      style,
      skuLight,
      {},
      clsPrefixRef
    );

    // const cssVarsRef = computed(() => {
    //   const {
    //     self: {
    //       borderColor
    //     }
    //   } = themeRef.value;

    //   return {
    //     '--n-border-color': borderColor
    //   };
    // });

    const showButton = computed(() => {
      const { max } = props;
      return skuData.value.length < max;
    });

    function handleAddSku () {
      skuData.value.push({
        id: -randomNumber(),
        name: '',
        leaf: []
      });
    }

    function handleChangeSku (index: number, group: SkuSchema) {
      if (skuData.value.findIndex((sku, idx) => sku.id === group.id && index !== idx) !== -1) {
        console.log('规格名重复');
        message.error('规格名重复');
        return false;
      }
      skuData.value[index] = group;
    }

    function handleRemoveSku (index: number) {
      skuData.value.splice(index, 1);
    }

    function handleGetGroups (force = false): Promise<boolean> {
      return new Promise(async (resolve, reject) => {
        try {
          if (false === isLoadGroups.value || force) {
            groupsRef.value = (await props.onGetGroups()) || [],
            isLoadGroups.value = true;
          }
          resolve(true);
        } catch (error) {
          reject(error);
        }
      });
    }

    function handleGetValues (force = false): Promise<boolean> {
      return new Promise(async (resolve, reject) => {
        try {
          if (false === isLoadValues.value || force) {
            valuesRef.value = (await props.onGetValues()) || [],
            isLoadValues.value = true;
          }
          resolve(true);
        } catch (error) {
          reject(error);
        }
      });
    }

    watch(
      () => skuData.value,
      () => {
        emit('update:sku', skuData.value);
      },{
        deep: true,
        immediate: true,
      }
    );

    onMounted(async () => {
      await handleGetGroups();
      await handleGetValues();
    });

    provide(skuInjectionKey, {
      clsPrefixRef,
      handleChangeSku,
      handleRemoveSku,
      createGroup: props.onCreateGroup,
      createValue: props.onCreateValue,
      getGroups: handleGetGroups,
      getValues: handleGetValues,
      groupsRef,
      valuesRef,
      skuData,
    });

    return {
      clsPrefix: clsPrefixRef,
      useImage: useImageRef,
      // cssVars: cssVarsRef
      skuData,
      showButton,
      handleAddSku,
      groupsRef,
    };
  },

  render () {
    const {
      clsPrefix,
      showButton,
      handleAddSku,
    } = this;

    return (
      <NCard
        size="small"
        class={[
          `${clsPrefix}-card`
        ]}
        contentStyle={{padding: 0}}
        // style={this.cssVars}
      >
        <NSpace vertical>
          {
            this.skuData.map((group, index) => <SkuGroup group={group} index={index} />)
          }
          { showButton ? <SkuButton clsPrefix={clsPrefix} onClick={handleAddSku} /> : null }
        </NSpace>
      </NCard>
    );
  }
});
