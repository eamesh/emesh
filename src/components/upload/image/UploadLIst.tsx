import { NGi, NGrid, NPagination, NSpace, NText } from 'naive-ui';
import { FileInfo } from 'naive-ui/lib/upload/src/interface';
import { computed, defineComponent, PropType, ref, watch, watchEffect } from 'vue';
import ImageItem from './ImageItem';

export interface SelectExtraListSchema extends FileInfo {
  select: boolean;
}

export interface SelectListSchema {
  [key: string]: FileInfo;
}

export interface SelectKeyExtraListSchema {
  [key: string]: SelectExtraListSchema;
}

const listProps = {
  // data: {
  //   type: Array as PropType<ListSchema[]>,
  //   default: () => []
  // },
  defaultSelect: {
    type: Array as PropType<FileInfo[]>,
    default: () => []
  },

  type: {
    type: String as PropType<'image' | 'video'>,
    default: 'image',
  },

  max: {
    type: Number,
    default: 0,
  }
};

export default defineComponent({
  name: 'UploadList',

  props: listProps,

  emits: ['change'],

  setup (props, { emit }) {
    const page = ref(0);
    const dataRef = ref<FileInfo[]>();
    const selectItems = ref<SelectListSchema>({});
    const extraDataRef = ref<SelectKeyExtraListSchema>({});

    // 设置select字段
    const handleSetExtraData = () => {
      dataRef.value?.map(item => {
        return extraDataRef.value[item.id] = {
          ...item,
          select: false,
        };
      });
    };

    watchEffect(() => {
      handleSetExtraData();
      props.defaultSelect.map(item => {
        selectItems.value[item.id] = item;
        extraDataRef.value[item.id].select = true;
      });
    });

    watch(
      () => dataRef.value,
      () => {
        handleSetExtraData();
      },
      {
        deep: true,
      }
    );

    const handleSelect = ({ item }: { index: number, item: SelectExtraListSchema }) => {
      console.log(props.max, selectItems.value, Object.values(selectItems.value).length > props.max);
      if (props.max === 1 && Object.values(selectItems.value).length === 1) {
        const oldItem = Object.values(selectItems.value)[0];
        extraDataRef.value[oldItem.id].select = false;
        selectItems.value = {};
      }

      if (props.max && Object.values(selectItems.value).length >= props.max) return;

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { select, ...current } = item;

      extraDataRef.value[current.id].select = true;
      selectItems.value[item.id] = current;
    };

    const handleUnSelect = ({ item }: { index: number, item: SelectExtraListSchema }) => {
      extraDataRef.value[item.id].select = false;
      delete selectItems.value[item.id];
    };

    watch(
      () => selectItems.value,
      () => {
        // 传递选中项
        emit('change', Object.values(selectItems.value));
      },
      {
        deep: true,
        immediate: true
      }
    );

    setTimeout(() => {
      dataRef.value = [...Array(10)].map((_, i) => {
        return {
          id: i.toString(),
          name: '',
          status: 'finished',
          thumbnailUrl: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg'
        };
      });
    }, 1000);

    const typeText = computed(() => {
      return props.type === 'image' ? '图片' : '视频';
    });

    const handleReset = () => {
      // TODO ...
    };

    return {
      page,
      typeText,
      selectItems,
      handleSelect,
      handleUnSelect,
      extraData: extraDataRef,
      handleReset,
    };
  },

  render () {
    const {
      typeText,
      extraData,
      handleSelect,
      handleUnSelect,
    } = this;

    return (
      <NSpace vertical justify='space-between'>
        <div style={{height: '456px'}}>
          {
            Object.values(extraData).length ? (
              <NGrid xGap={12} yGap={12} cols={6}>
                {
                  Object.values(extraData).map((item, index) => (
                    <NGi>
                      <ImageItem
                        index={index}
                        item={item}
                        onSelect={handleSelect}
                        onUnSelect={handleUnSelect}
                      />
                    </NGi>
                  ))
                }
              </NGrid>
          ) : (
            <NSpace justify='center' style={{paddingTop: '20px'}}>
              <NText >暂无数据，可点击左上角“上传{typeText}”按钮添加</NText>
            </NSpace>
          )
          }
        </div>
        <NSpace style={{flexDirection: 'row-reverse'}}>
          <NPagination
            v-model:page={this.page}
            pageSlot={6}
            itemCount={0}
            showQuickJumper
          />
        </NSpace>
      </NSpace>
    );
  }
});
