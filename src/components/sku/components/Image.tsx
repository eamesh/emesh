import { UploadImageMain } from '@/components/upload';
import { FileInfo } from 'naive-ui/lib/upload/src/interface';
import { computed, defineComponent, inject, PropType, toRef } from 'vue';
import { SkuInjection, skuInjectionKey, SkuSchema } from '../interface';

const skuImageProps = {
  groupIndex: Number,
  index: Number,
  group: {
    type: Object as PropType<SkuSchema>,
    default: () => {}
  }
};

export default defineComponent({
  name: 'SkuImage',

  props: skuImageProps,

  setup (props) {
    const skuMain = inject(skuInjectionKey);
    const { handleChangeSku } = skuMain as SkuInjection;
    const groupRef = toRef(props, 'group');

    const defaultFileList = computed({
      get () {
        const imgUrl = groupRef.value.leaf[props.index!].img_url;

        const files = imgUrl ? [
          {
            id: props.index?.toString() as string,
            name: '',
            status: 'finished',
            url: imgUrl,
            thumbnailUrl: imgUrl
          }
        ] : [];

        return files as FileInfo[];
      },
      set (files: FileInfo[]) {
        console.log('update files');
        handleSetImage(files);
      }
    });

    function handleSetImage (files: FileInfo[]) {
      console.log('set files', files);
      const options = props.group.leaf;

      options[props.index as number].img_url = files.length ? files[0].url || files[0].thumbnailUrl! : '';
      handleChangeSku(props.groupIndex as number, {
        ...props.group,
        leaf: [
          ...options
        ]
      });
    }

    return {
      groupRef,
      defaultFileList,
      handleSetImage
    };
  },

  render () {
    return (
      <UploadImageMain v-model:fileList={this.defaultFileList} max={1} />
    );
  }
});
