import { SpaceView } from '@/components/space-view';
import { computed, defineComponent, ref } from 'vue';
import GoodsForm from './components/goods';
import StoreForm from './components/store';
import PaymentForm from './components/payment';
import OrderForm from './components/order';
import { cB, commonLight, NButton, NLayoutFooter, NSpace } from 'naive-ui';

import $style from './style.module.scss';
import { createTheme, useTheme } from 'naive-ui/lib/_mixins';

interface FormRefs {
  [key: string]: any;
}

export default defineComponent({
  name: 'SettingIndex',

  setup () {
    const formRefs = ref<FormRefs>({});
    const formComponents = [
      StoreForm,
      GoodsForm,
      OrderForm,
      PaymentForm,
    ];

    const themeRef = useTheme(
      'Layout',
      '-free-layout',
      cB('layout', ''),
      createTheme({
        name: 'Diy',
        common: commonLight,
      }),
      {},
    );

    const cssVarsRef = computed(() => {
      const {
        common: {
          primaryColor,
        }
      } = themeRef.value;
      return {
        '--primary-color': primaryColor,
      };
    });

    function handleSetFormRefs (key: string, formRef: any) {
      formRefs.value[key] = formRef;
    }

    return {
      cssVarsRef,
      formComponents,
      handleSetFormRefs
    };
  },

  render () {
    const {
      cssVarsRef,
      formComponents,
      handleSetFormRefs
    } = this;
    return (
      <div class={$style['setting-form']}>
        <SpaceView style={cssVarsRef}>
          <NSpace vertical>
            {formComponents.map(component => {
              return <component ref={(e: any) => handleSetFormRefs(component.name, e)} />;
            })}
          </NSpace>
          <NLayoutFooter
            position="absolute"
            bordered
          >
            <div class="setting-footer flex justify-center items-center">
              <NSpace justify="space-around" size="large">
                <NButton type="success" >保存</NButton>
              </NSpace>
            </div>
          </NLayoutFooter>
        </SpaceView>
      </div>
    );
  }
});
