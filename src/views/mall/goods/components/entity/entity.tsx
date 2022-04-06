import { createGoodsFormInjectionKey, FormRefs, FormRef } from './interface';
// import { watch } from 'vue';
import { FormInst, useMessage } from 'naive-ui';
import { defineComponent, onMounted, provide, ref } from 'vue';
import { FormBase, FormData, FormDelivery, FormOther } from './form';
import { create as goodsCreate, update as goodsUpdate } from '@/api/mall/goods';

import './style.scss';
import { useGoods } from '../../hooks/goods';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'GoodsEntity',

  setup () {
    const {
      isAction,
      goodsModel
    } = useGoods();

    const formRefs = ref<FormRefs>({});

    const components = [
      FormBase, FormData, FormDelivery, FormOther
    ];

    const message = useMessage();
    const router = useRouter();

    // 子表单ref缓存
    function setForm (name: string, form: FormInst, model: () => any) {
      formRefs.value[name] = {
        form,
        model
      };
    }

    // 验证子表单
    function promiseValidate (data: FormRef) {
      return new Promise((resolve, reject) => {
        data.form.validate(errors => {
          errors ? reject(errors) : resolve(data.model);
        });
      });
    }

    // 新建操作
    async function handleCreate (formModel: any) {
      try {
        await goodsCreate(formModel);
        message.success('新建成功');
        router.replace('/mall/goods');
        return Promise.resolve();
      } catch (e) {
        console.log(e);
        message.error('新建失败');
        return Promise.reject(e);
      }
    }

    // 编辑操作
    async function handleUpdate (formModel: any) {
      try {
        await goodsUpdate(goodsModel.value.id, formModel);
        message.success('更新成功');
        router.replace('/mall/goods');
        return Promise.resolve();
      } catch (e) {
        console.log(e);
        message.error('更新失败');
        return Promise.reject(e);
      }
    }

    // 提交操作
    async function submit (content = '') {
      try {
        const models = await Promise.all(
          Object.values(formRefs.value).map(data => promiseValidate(data))
        ) as Array<FormRef['model']>;

        let formModel: any = {};
        models.map(value => formModel = Object.assign(formModel, value()));
        console.log(formModel);

        content && (formModel.content = content);

        // 更新 编辑
        isAction.value ? await handleUpdate(formModel) : await handleCreate(formModel);
        return Promise.resolve();
      } catch (error) {
        return Promise.reject(error);
      }
    }

    provide(createGoodsFormInjectionKey, {
      setForm
    });

    onMounted(() => {
      console.log(formRefs.value);
    });

    return {
      components,
      submit
    };
  },

  render () {
    const {
      components
    } = this;

    return (
      <div class="goods-form">
        {
          components.map((component, index) => <component key={index} />)
        }
      </div>
    );
  }
});
