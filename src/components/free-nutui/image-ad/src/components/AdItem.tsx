import { computed, defineComponent, PropType, ref, unref, watch } from 'vue';
import { UploadImageMain } from '@/components/upload';
import { NButton, NCard, NDropdown, NIcon, NSpace } from 'naive-ui';
import { ChevronDown20Regular, ChevronUp20Regular } from '@vicons/fluent';
import { FileInfo } from 'naive-ui/lib/upload/src/interface';
import { AdItemData } from '../ImageAd';

const adItemProps = {
  index: Number,
  data: {
    type: Object as PropType<AdItemData>,
    default: () => ({
      img_url: '',
      redirect: {}
    })
  }
};

export default defineComponent({
  name: 'AdItem',

  props: adItemProps,

  emits: ['onUpdate:data'],

  setup (props, { emit }) {
    const model = ref<AdItemData>(props.data);
    const modeulUnref = unref(model);
    const hoverState = ref(false);

    const fileListCompute = computed<FileInfo[]>({
      get () {
        return modeulUnref.img_url ? [
          {
            id: props.index?.toString() as string,
            name: '',
            status: 'finished',
            url: modeulUnref.img_url,
            thumbnailUrl: modeulUnref.img_url
          }
        ] : [];
      },

      set (files) {
        console.log(files);
        modeulUnref.img_url = files.length === 0 ? '' : files[0].thumbnailUrl! || files[0].url!;
      }
    });

    const dropdownOptions = ref([
      {
        label: '微页面',
        key: '1',
        children: [
          {
            label: '微页面及分类',
            key: '2'
          },
          {
            label: '店铺主页',
            key: '3'
          },
          {
            label: '个人中心',
            key: ' 4'
          }
        ]
      },
      {
        label: '商品',
        key: '5',
        children: [
          {
            label: '全部商品',
            key: '6'
          },
          {
            label: '商品及分组',
            key: '7'
          },
          {
            label: '购物车',
            key: ' 8'
          }
        ]
      }
    ]);

    watch(
      () => model.value,
      () => {
        emit('onUpdate:data', model.value);
      }
    );

    return {
      model,
      hoverState,
      dropdownOptions,
      fileListCompute
    };
  },

  render () {
    const {
      hoverState,
      dropdownOptions,
    } = this;

    return (
      <NCard class='image-ad-card' size='small'>
        <NSpace justify='space-between' align='center'>
          <UploadImageMain max={1} v-model:fileList={this.fileListCompute} />
          <NDropdown options={dropdownOptions} trigger='click'>
            <NButton size='tiny' quaternary type='primary' {...{
              onMouseoverCapture: () => {
                console.log('over');
                this.hoverState = true;
              },
              onMouseoutCapture: () => {
                this.hoverState = false;
              }
            }}>
              选择跳转到页面
              <NIcon>
                { hoverState ? <ChevronUp20Regular /> : <ChevronDown20Regular /> }
              </NIcon>
            </NButton>
          </NDropdown>
        </NSpace>
      </NCard>
    );
  }
});
