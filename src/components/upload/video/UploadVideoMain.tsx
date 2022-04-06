import { NIcon, NImageGroup, NInput, NMenu, NSpace } from 'naive-ui';
import { defineComponent, PropType, provide } from 'vue';
import UploadMain from '../UploadMain';
import { NBaseIcon } from 'naive-ui/lib/_internal';
import { AddIcon } from 'naive-ui/lib/_internal/icons';
import { FileInfo } from 'naive-ui/lib/upload/src/interface';
import { createInjectionKey } from 'naive-ui/lib/_utils';
import FileList from '../image/FileList';
import UploadImage from '../image/UploadImage';
import { SearchOutline } from '@vicons/ionicons5';
import UploadLIst from '../image/UploadLIst';
import { useMain } from '../hooks/main';

export const uploadMainImageProps = {
  fileList: {
    type: Array as PropType<FileInfo[]>,
    default: () => []
  },
  max: {
    type: Number,
    default: 0,
  },
  onUpdateFileList: Function as PropType<(files: FileInfo[]) => void>,
  'onUpdate:fileList': Function as PropType<(files: FileInfo[]) => void>,
};

interface UploadImageMainInjection {
  handleRemove: (index: number) => void;
}

export const uploadImageMainInjectionKey = createInjectionKey<UploadImageMainInjection>('upload-image-main');

export default defineComponent({
  name: 'UploadImageMain',

  props: uploadMainImageProps,

  setup (props) {
    const {
      mainRef,
      fileListRef,
      cssVarsRef,
      mergedClsPrefixRef,
      mainMax,
      groupOptions,
      renderCount,
      handleSelect,
      handleRemove,
      handleSelectChange,
    } = useMain(props);

    provide(uploadImageMainInjectionKey, {
      handleRemove
    });

    return {
      mainRef,
      mergedClsPrefix: mergedClsPrefixRef,
      cssVars: cssVarsRef,
      handleSelect,
      fileList: fileListRef,
      mainMax,
      handleRemove,
      groupOptions,
      renderCount,
      handleSelectChange,
    };
  },

  render () {
    const {
      mergedClsPrefix,
      handleSelect,
      fileList,
      max,
      mainMax,
      groupOptions,
      renderCount,
      handleSelectChange
    } = this;


    return (
      <UploadMain ref="mainRef" type='video' max={mainMax} title='我的图片' onSelected={handleSelect}>
        {{
          default: ({ toggle }: { toggle: () => void }) => (
            <div
              class={[
                `${mergedClsPrefix}-upload`,
              ]}
              style={this.cssVars as any}
            >
              <div
                class={[
                  `${mergedClsPrefix}-upload-file-list`,
                  `${mergedClsPrefix}-upload-file-list--grid`,
                ]}
              >
                <NImageGroup>
                  {fileList.map((file, index) => (
                    <FileList clsPrefix={mergedClsPrefix} file={file} index={index} />
                  ))}
                  {!max || max > fileList.length ? (
                    <div
                      class={[
                        `${mergedClsPrefix}-upload-trigger`,
                        `${mergedClsPrefix}-upload-trigger--image-card`
                      ]}
                    >
                      <div
                        class={[
                          `${mergedClsPrefix}-upload-dragger`,
                        ]}
                        onClick={toggle}
                      >
                        <NBaseIcon clsPrefix={mergedClsPrefix}>
                          {{ default: () => <AddIcon /> }}
                        </NBaseIcon>
                      </div>
                    </div>
                  ) : null }
                </NImageGroup>
              </div>
            </div>
          ),

          header: () => (
            <UploadImage />
          ),

          sider: () => (
            <NSpace vertical>
              <NInput
                placeholder="搜索分组名称"
              >
                {{
                  suffix: () => (
                    <NIcon>
                      <SearchOutline />
                    </NIcon>
                  )
                }}
              </NInput>

              <NMenu options={groupOptions} rootIndent={12} defaultValue={1} renderExtra={renderCount} />
            </NSpace>
          ),

          lists: () => (
            <UploadLIst max={max} type='image' onChange={handleSelectChange} />
          )
        }}
      </UploadMain>
    );
  }
});
