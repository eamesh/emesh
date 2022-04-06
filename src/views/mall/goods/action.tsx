import { computed, defineComponent, provide, ref } from 'vue';
import { SpaceView } from '@/components/space-view';
import BaseAction from './base.vue';
import { NButton, NLayoutFooter, NSpace } from 'naive-ui';
import { goodsDetail } from '@/api/mall/goods';
import { goodsActionInjectionKey } from './interface';
import { useRoute } from 'vue-router';
import { SpinView } from '@/components/spin-view';

import './style.scss';

export default defineComponent({
  name: 'Goods',

  setup () {
    const route = useRoute();
    const baseRef = ref();
    // submit loading
    const loadingRef = ref(false);
    // global loading
    const showSpin = ref(false);
    const goodsModelRef = ref<any>({});

    const next = () => {
      const nextTab = parseInt(baseRef.value.tabRef) + 1;
      baseRef.value.tabRef = (nextTab > 1 ? 0 : nextTab).toString();
      console.log(baseRef.value.tabRef);
    };

    // 编辑
    const {
      params: {
        id
      }
    } = route;

    function getGoodsDetail () {
      return new Promise(async (resolve, reject) => {
        try {
          goodsModelRef.value = await goodsDetail(id as string);
          console.log(goodsModelRef.value);

          // 设置Type
          console.log('设置商品Type');
          baseRef.value.handleTypeTrigger(goodsModelRef.value.type);

          resolve(true);
        } catch (error) {
          console.log(error);
          reject(error);
        }
      });
    }

    const isAction = computed<boolean>(() => {
      console.log(id);
      return !!id;
    });

    async function submit () {
      loadingRef.value = true;
      try {
        await baseRef.value.submit();
      } catch (error) {
        console.log(error);
      }
      loadingRef.value = false;
    }

    async function action () {
      showSpin.value = true;
      loadingRef.value = true;
      console.log('获取商品id:', id);

      await getGoodsDetail();

      showSpin.value = false;
      loadingRef.value = false;
    }

    id && action();

    provide(goodsActionInjectionKey, {
      goodsModelRef,
      isAction
    });

    return {
      baseRef,
      submit,
      next,
      loading: loadingRef,
      showSpin
    };
  },

  render () {
    const {
      submit,
      next,
      loading
    } = this;

    return (
      <div class="goods-action">
        <SpaceView >
          { this.showSpin && <SpinView /> }
          <div v-show={!this.showSpin}>
            <BaseAction ref="baseRef" />
            <NLayoutFooter
              position="absolute"
              bordered
            >
              <div class="goods-action__footer">
                <NSpace justify="space-around" size="large">
                  <NButton type="success" onClick={submit} loading={loading}>保存</NButton>
                  <NButton secondary onClick={next}>下一步</NButton>
                </NSpace>
              </div>
            </NLayoutFooter>
          </div>
        </SpaceView>
      </div>
    );
  }
});
