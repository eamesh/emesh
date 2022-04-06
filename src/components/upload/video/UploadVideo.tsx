import { FormRules, NButton, NDivider, NForm, NFormItem, NInput, NModal, NSelect, NSpace, NUpload } from 'naive-ui';
import NA from '../a';
import { defineComponent, ref } from 'vue';
import { RouterLink } from 'vue-router';
import UploadImageMain from '../image/UploadImageMain';

import '../styles/upload.scss';

export default defineComponent({
  name: 'UploadVideo',

  setup () {
    const showModal = ref(false);
    const formRef = ref();
    const modelRef = ref({
      video: '',
      name: '',
      group_id: null,
      thumb: '',
    });

    const rules: FormRules = {
      video: [
        {
          required: true,
          message: '请上传视频',
        }
      ],
      name: [
        {
          required: true,
          message: '请输入视频名称',
        }
      ],
      group_id: [
        {
          required: true,
          message: '请选择分组',
        }
      ]
    };

    const confirm = () => {
      showModal.value = false;
    };

    const cancel = () => {
      showModal.value = false;
    };

    const handleHide = () => {
      modelRef.value = {
        video: '',
        name: '',
        group_id: null,
        thumb: '',
      };
    };

    return {
      confirm,
      cancel,
      handleHide,
      rules,
      form: formRef,
      model: modelRef,
      showModal,
      style: {
        minWidth: '620px',
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
      handleHide,
      confirm,
      cancel,
      rules,
      model,
      style,
      headerStyle,
      contentStyle,
      footerStyle,
    } = this;

    return (
      <>
        <NButton onClick={() => this.showModal = !this.showModal}>
          上传视频
        </NButton>
        <NModal
          class="upload-modal"
          show={this.showModal}
          maskClosable={false}
          style={style}
          headerStyle={headerStyle}
          contentStyle={contentStyle}
          footerStyle={footerStyle}
          preset="card"
          title="上传视频"
          size="huge"
          bordered={false}
          onEsc={() => {}}
          onClose={() => this.showModal = false}
          onBeforeLeave={handleHide}
        >
          {{
            default: () => (
              <div class="upload-main">
                <NForm
                  ref={this.form}
                  labelPlacement="left"
                  labelWidth="120"
                  model={model}
                  rules={rules}
                  requireMarkPlacement="left"
                >
                  <NFormItem label='本地视频：' path='video'>
                    <NUpload listType='image-card' />
                  </NFormItem>
                  <NFormItem label='视频名称：' path='name'>
                      <NInput style={{width: '300px'}} placeholder="请输入视频名称" v-model:value={model.name} />
                  </NFormItem>
                  <NFormItem label='所在分组：' path='group_id'>
                    <NSpace align='center'>
                      <NSelect style={{width: '300px'}} v-model:value={model.group_id} placeholder="请选择分组" />
                      <div>
                        <RouterLink
                          to="/"
                          custom>
                          <NA href="/" target="_blank">新建</NA>
                        </RouterLink>
                        <NDivider vertical />
                        <NA>刷新</NA>
                      </div>
                    </NSpace>
                  </NFormItem>
                  <NFormItem label='视频封面：' path='thumb'>
                    <UploadImageMain />
                  </NFormItem>
                </NForm>
              </div>
            ),
            footer: () => (
              <NSpace style={{flexDirection: 'row-reverse'}}>
                <NSpace>
                  <NButton onClick={cancel}>返回</NButton>
                  <NButton type='primary' onClick={confirm}>确定</NButton>
                </NSpace>
              </NSpace>
            ),
          }}
        </NModal>
      </>
    );
  }
});
