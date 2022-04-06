import { NButton, NImage } from 'naive-ui';
import { ImageInst } from 'naive-ui/lib/image/src/Image';
import { FileInfo } from 'naive-ui/lib/upload/src/interface';
import { NBaseIcon, NIconSwitchTransition } from 'naive-ui/lib/_internal';
import { EyeIcon, TrashIcon } from 'naive-ui/lib/_internal/icons';
import { defineComponent, inject, PropType, ref } from 'vue';
import { uploadImageMainInjectionKey } from './UploadImageMain';

const fileListProps = {
  index: {
    type: Number,
    required: true,
  },

  clsPrefix: {
    type: String,
    required: true,
  },

  file: {
    type: Object as PropType<FileInfo>,
    required: true
  },
};

export default defineComponent({
  name: 'FileList',

  props: fileListProps,

  setup () {
    const uploadImageMain = inject(uploadImageMainInjectionKey);
    const imageRef = ref<ImageInst | null>(null);

    const handlePreview = () => {
      const { value } = imageRef;
      if (!value) return;
      value.click();
    };

    return {
      handlePreview,
      handleRemove: uploadImageMain?.handleRemove,
      imageRef,
    };
  },

  render () {
    const {
      index,
      clsPrefix,
      file,
      handlePreview,
      handleRemove,
    } = this;

    return (
      <div
        class={[
          `${clsPrefix}-upload-file`,
          `${clsPrefix}-upload-file--success-status`,
          `${clsPrefix}-upload-file--image-card-type`
        ]}
      >
        <div
          class={[
            `${clsPrefix}-upload-file-info`,
          ]}
        >
          <a
            rel="noopener noreferer"
            target="_blank"
            class={`${clsPrefix}-upload-file-info__thumbnail`}
          >
              <NImage
                src={file?.url || file?.thumbnailUrl || undefined}
                previewSrc={file?.thumbnailUrl || file?.url || undefined}
                alt="测试"
                ref="imageRef"
              />
          </a>
          <div class={`${clsPrefix}-upload-file-info__name`}>

          </div>
          <div
            class={[
              `${clsPrefix}-upload-file-info__action`,
              `${clsPrefix}-upload-file-info__action--image-card-type`
            ]}
          >
            <NButton
              key="preview"
              text
              onClick={handlePreview}
            >
              {{
                icon: () => (
                  <NBaseIcon clsPrefix={clsPrefix!}>
                    {{ default: () => <EyeIcon /> }}
                  </NBaseIcon>
                )
              }}
            </NButton>
            <NButton
              key="cancelOrTrash"
              text
              onClick={() => handleRemove!(index as number)}
            >
              {{
                icon: () => (
                  <NIconSwitchTransition>
                    {{
                      default: () => (
                        <NBaseIcon clsPrefix={clsPrefix!} key="trash">
                          {{ default: () => <TrashIcon /> }}
                        </NBaseIcon>
                      )
                    }}
                  </NIconSwitchTransition>
                )
              }}
            </NButton>
          </div>
        </div>
      </div>
    );
  }
});
