import { defineComponent, PropType, ref } from 'vue';
import { NButton, NGrid, NGridItem, NModal, NSpace } from 'naive-ui';
import { SelectListSchema } from './image/UploadLIst';
import { FileInfo } from 'naive-ui/lib/upload/src/interface';

import './styles/main.scss';

const uploadMainProps = {
  title: String,
  type: {
    type: String as PropType<'image' | 'video'>,
    default: 'image'
  },
  max: {
    type: Number,
    default: 0,
  }
};

export default defineComponent({
  name: 'UploadMain',

  props: uploadMainProps,

  emits: ['selected'],

  setup (props, { emit }) {
    const showModal = ref(false);
    // const dataRef = ref<FileInfo[]>();
    const selectedItems = ref<FileInfo[]>();

    // dataRef.value = [
    //   {
    //     id: 1,
    //     path: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg'
    //   },
    //   {
    //     id: 2,
    //     path: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg'
    //   }
    // ];

    const handleSelectChange = (selects: SelectListSchema) => {
      selectedItems.value = Object.values(selects);
    };

    const handleClick = () => showModal.value = !showModal.value;

    const confirm = () => {
      emit('selected', selectedItems.value);
      reset();
    };

    const cancel = () => {
      reset();
    };

    const reset = () => {
      showModal.value = false;
      selectedItems.value = [];
    };

    return {
      // data: dataRef,
      confirm,
      cancel,
      showModal,
      handleClick,
      handleSelectChange,
      style: {
        minWidth: '920px',
        width: '828px',
      },
      headerStyle: {
        padding: '15px 16px',
        borderBottom: '1px solid var(--n-border-color)'
      },
      contentStyle: {
        padding: '16px',
      },
      footerStyle: {
        padding: '0 16px 16px',
      }
    };
  },

  render () {
    const {
      // data,
      title,
      confirm,
      cancel,
      handleClick,
      style,
      headerStyle,
      contentStyle,
      footerStyle,
      $slots
    } = this;

    return (
      <>
        {
          $slots.default ? $slots.default({ toggle: handleClick }) : null
        }
        <NModal
          show={this.showModal}
          maskClosable={false}
          style={style}
          headerStyle={headerStyle}
          contentStyle={contentStyle}
          footerStyle={footerStyle}
          preset="card"
          title={title}
          size="huge"
          bordered={false}
          onEsc={() => {}}
          onClose={() => this.showModal = false}
        >
          {{
            default: () => (
              <NSpace class="upload-layout" vertical>
                <div class="upload-header">
                  {$slots.header ? $slots.header() : null}
                </div>
                <NGrid cols={12} xGap={12}>
                  <NGridItem span={3} class="upload-sider">
                    {$slots.sider ? $slots.sider() : null}
                  </NGridItem>
                  <NGridItem span={9}>
                  {$slots.lists ? $slots.lists() : null}
                  </NGridItem>
                </NGrid>
              </NSpace>
            ),
            footer: () => (
              <NSpace style={{flexDirection: 'row-reverse'}}>
                <NSpace>
                  <NButton onClick={cancel}>取消</NButton>
                  <NButton onClick={confirm}>确定</NButton>
                </NSpace>
              </NSpace>
            ),
          }}
        </NModal>
      </>
    );
  }
});
