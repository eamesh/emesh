import { FormRules, NButton, NDivider, NForm, NFormItem, NInput, NModal, NRadio, NRadioGroup, NSelect, NSpace, NUpload } from 'naive-ui';
import NA from '../a';
import { defineComponent, ref } from 'vue';
import { RouterLink } from 'vue-router';

import '../styles/upload.scss';
interface UploadTypeSchema {
  label: string;
  value: string;
}

const uploadTypes: UploadTypeSchema[] = [
  {
    label: '本地上传',
    value: 'local',
  },
  {
    label: '扫码上传',
    value: 'scan',
  },
  {
    label: '网络图片',
    value: 'net',
  }
];

export default defineComponent({
  name: 'UploadImage',

  setup () {
    const showModal = ref(false);
    const formRef = ref();
    const modelRef = ref({
      type: 'local',
      group_id: null,
      image: '',
    });

    const rules: FormRules = {
      type: [
        {
          required: true,
          message: '请选择上传方式',
        }
      ],
      group_id: [
        {
          required: true,
          message: '请选择分组',
        }
      ],
      images: [
        {
          required: true,
          message: '请上传图片',
        }
      ],
      image: [
        {
          required: true,
          message: '请填写网络图片地址',
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
        type: 'local',
        group_id: null,
        image: '',
      };
    };

    return {
      uploadTypes,
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
      uploadTypes,
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
          上传图片
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
          title="上传图片"
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
                  <NFormItem label='上传方式：' path='type'>
                    <NRadioGroup v-model:value={model.type}>
                      <NSpace>
                        {uploadTypes.map(type => (
                          <NRadio key={type.value} value={type.value}>
                            {type.label}
                          </NRadio>
                        ))}
                      </NSpace>
                    </NRadioGroup>
                  </NFormItem>
                  {
                    ['local', 'net'].includes(model.type) ? (
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
                    ) : ''
                  }


                  {model.type === 'local' ? (
                    <NFormItem label='本地图片：' path='images'>
                      <NUpload listType="image-card" />
                    </NFormItem>
                  ) : ''}
                  {model.type === 'net' ? (
                    <NFormItem label='网络图片：' path='image'>
                      <NSpace>
                        <NInput style={{width: '300px'}} placeholder="请填写网络图片地址" v-model:value={model.image} />
                        <NButton>提取</NButton>
                      </NSpace>
                    </NFormItem>
                  ) : ''}
                </NForm>
              </div>
            ),
            footer: () => (
              <NSpace style={{flexDirection: 'row-reverse'}}>
                <NSpace>
                  <NButton onClick={cancel}>返回</NButton>
                  {
                    model.type === 'local' ? <NButton type='primary' onClick={confirm}>确定</NButton> : ''
                  }
                </NSpace>
              </NSpace>
            ),
          }}
        </NModal>
      </>
    );
  }
});
