import { FormItem } from '@/components/naive-ui/form';
import { TitleDivider } from '@/components/title-divider';
import { UploadImageMain, UploadVideoMain } from '@/components/upload';
import { FormInst, FormRules, NDivider, NDynamicTags, NForm, NInput, NSelect, NSpace, NText, SelectOption } from 'naive-ui';
import { computed, defineComponent, inject, onMounted, ref, unref, watch } from 'vue';
import { RouterLink } from 'vue-router';
import NA from '@/components/upload/a';
import { createGoodsFormInjectionKey } from '../interface';
import { FileInfo } from 'naive-ui/lib/upload/src/interface';
import { GoodsGroupSchema, lists as getGroupLists } from '@/api/mall/group';
import { useGoods } from '../../../hooks/goods';

interface FormModel {
  type: string;
  name: string;
  description: string;
  introduction: string;
  group_ids: number[];
  images: string[];
  video: string;
}

export default defineComponent({
  name: 'FormBase',

  setup () {
    const {
      goodsModel
    } = useGoods();
    const goods = inject(createGoodsFormInjectionKey);
    const model = ref<FormModel>({
      type: 'entity',
      name: '',
      description: '',
      introduction: '',
      group_ids: [],
      images: [],
      video: ''
    });
    const formRef = ref<FormInst>();
    const groupLoadingRef = ref(false);
    const groupOptionsRef = ref<GoodsGroupSchema[]>([]);
    const isLoadGroupRef = ref(false);
    const imagesTmpRef = ref<FileInfo[]>([]);
    const videoTmpRef = ref<FileInfo[]>([]);

    const groupOptions = computed<SelectOption[]>(() => {
      return groupOptionsRef.value.map(item => ({
        value: item.id,
        label: item.name
      }));
    });

    // 设置编辑值
    watch(
      () => goodsModel.value,
      updateModel,
      {
        deep: true
      }
    );

    function updateModel () {
      const goodsModelUnRef = unref(goodsModel);
      loadGoodsGroup();
      model.value = {
        type: model.value.type,
        name: goodsModelUnRef.name,
        description: goodsModelUnRef.description,
        introduction: goodsModelUnRef.introduction,
        group_ids: goodsModelUnRef.groups.map((group: any) => group.id),
        images: goodsModelUnRef.images,
        video: goodsModelUnRef.video
      };

      setImages();
      setVideo();
    }

    function setImages () {
      const images = goodsModel.value.images as string[];
      images.length && (imagesTmpRef.value = images.map((image, index) => ({
        id: index.toString(),
        name: '',
        status: 'finished',
        url: image,
        thumbnailUrl: image
      })));
      console.log('update images', imagesTmpRef.value);
    }

    function setVideo () {
      const video = goodsModel.value.video;
      !!video && (videoTmpRef.value = [
        {
          id: '1',
          name: '',
          status: 'finished',
          url: video,
          thumbnailUrl: video
        }
      ]);
      console.log('update video', videoTmpRef.value);
    }

    watch(
      () => imagesTmpRef.value,
      (value) => {
        handleChangeIMages(value);
      }
    );

    watch(
      () => videoTmpRef.value,
      (value) => {
        handleChangeVideo(value);
      }
    );

    const rules: FormRules = {
      name: {
        required: true,
        message: '请输入商品名称'
      },
      images: {
        required: true,
        message: '请上传商品图'
      },
      description: {
        max: 36,
        message: '请按要求填写描述'
      },
      introduction: {
        max: 100,
        required: true,
        message: '请按要求填写商品卖点'
      },
      group_ids: {
        type: 'array',
        required: true,
        min: 1,
        trigger: 'change',
        message: '请选择商品分组'
        // asyncValidator: () => {
        //   return new Promise((resolve, reject) => {
        //     model.value.group_ids.length > 0 ? resolve() : reject('请选择商品分组');
        //   });
        // }
      }
    };

    // const defaultFileList = computed<FileInfo[]>(() => {
    //   console.log('computed default', model.value.images);
    //   return model.value.images.map((image, index) => {
    //     return {
    //       id: index.toString(),
    //       name: '',
    //       status: 'finished',
    //       thumbnailUrl: image
    //     };
    //   });
    // });

    function handleChangeIMages (files: FileInfo[]) {
      model.value.images = files.map(file => file.thumbnailUrl!);
      console.log(model.value.images);
    }

    function handleChangeVideo (files: FileInfo[]) {
      files.length && (model.value.video = files[0].thumbnailUrl!);
      console.log(model.value.video);
    }

    function loadGoodsGroup () {
      groupLoadingRef.value = true;
      return new Promise(async (resolve, reject) => {
        try {
          groupOptionsRef.value = await getGroupLists();
          resolve(true);
        } catch (error) {
          reject(error);
        }
        groupLoadingRef.value = false;
      });
    }

    function handleGroupFocus () {
      !isLoadGroupRef.value && loadGoodsGroup();
      isLoadGroupRef.value = true;
    }

    function getModel () {
      return {
        type: 'entity',
        name: model.value.name || '',
        description: model.value.description || '',
        introduction: model.value.introduction || '',
        group_ids: model.value.group_ids,
        images: model.value.images,
        video: model.value.video || ''
      };
    }

    onMounted(() => {
      goods?.setForm('base', formRef.value!, getModel);
    });

    return {
      model,
      rules,
      formRef,
      imagesTmpRef,
      videoTmpRef,
      groupLoadingRef,
      groupOptions,
      handleChangeIMages,
      handleChangeVideo,
      loadGoodsGroup,
      handleGroupFocus
    };
  },

  render () {
    const {
      model,
      rules,
      groupLoadingRef,
      groupOptions,
      loadGoodsGroup,
      handleGroupFocus
    } = this;

    return (
      <NForm
        model={this.model}
        rules={rules}
        ref="formRef"
        label-placement="left"
        label-width="200px"
        require-mark-placement="right-hanging"
        class="form-model"
      >
        <TitleDivider title="基础信息">
          <FormItem
            label="商品图:"
            path="images"
          >

            {{
              default: () => (
                <UploadImageMain
                  max={10}
                  v-model:fileList={this.imagesTmpRef}
                />
              ),
              help: () => (
                <>
                  <NText
                    depth="3"
                    tag="div"
                  >
                    第一张图片将作为商品主图,支持同时上传多张图片,多张图片之间可随意调整位置；
                  </NText>
                  <NText
                    depth="3"
                    tag="div"
                  >
                    支持jpg、gif、png格式上传或从图片空间中选择，建议使用尺寸800x800像素以上、大小不超过1M的正方形图片；
                  </NText>
                  <NText
                    depth="3"
                    tag="div"
                  >
                    上传后的图片将会自动保存在图片空间的默认分类中，最多上传10张（至少1张）
                  </NText>
                </>
              )
            }}
          </FormItem>
          <FormItem
            label="主图视频:"
            path="video"
            class="form-mid"
          >
            <UploadVideoMain v-model:fileList={this.videoTmpRef} max={1} />
          </FormItem>
          <FormItem
            label="商品名:"
            path="name"
            class="form-mid"
          >
            <NInput
              v-model:value={model.name}
              placeholder="请输入商品名称，不能超过60个字符"
            />
          </FormItem>
          <FormItem
            label="分享描述:"
            path="description"
            class="form-mid"
          >
            {{
              default: () => (
                <NInput
                  v-model:value={this.model.description}
                  placeholder="请输入分享描述，不能超过30个字符"
                />
              ),
              help: () => (
                <NText depth={3}>
                  微信分享给好友时会显示，建议36个字以内
                </NText>
              )
            }}
          </FormItem>
          <FormItem
            label="商品卖点:"
            path="introduction"
            class="form-mid"
          >
            <NInput
              v-model:value={this.model.introduction}
              placeholder="请输入促销语，不能超过100个字符"
            />
          </FormItem>

          <FormItem
            label="关键词:"
            path="tags"
            class="form-long"
          >
            <NDynamicTags />
          </FormItem>
          <FormItem
            label="商品分组:"
            path="group_ids"
          >
            <NSpace align="center">
              <NSelect
                multiple
                filterable
                placeholder="请选择商品分组"
                clearable
                remote
                clear-filter-after-select={false}
                style="width: 250px;"
                loading={groupLoadingRef}
                options={groupOptions}
                onFocus={handleGroupFocus}
                v-model:value={this.model.group_ids}
              />

              <div>
                <RouterLink
                  to="/mall/group"
                  custom>
                  <NA target="_blank">新建</NA>
                </RouterLink>
                <NDivider vertical />
                <NA onClick={loadGoodsGroup}>刷新</NA>
              </div>
            </NSpace>
          </FormItem>
        </TitleDivider>
      </NForm>
    );
  }
});
