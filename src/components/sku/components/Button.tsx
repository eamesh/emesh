import { NButton, NSpace } from 'naive-ui';
import { MaybeArray } from 'naive-ui/lib/_utils';
import { defineComponent, PropType } from 'vue';

const skuButtonProps = {
  clsPrefix: String,
  onClick: [Function, Array] as PropType<MaybeArray<(e: MouseEvent) => void>>,
};

export default defineComponent({
  name: 'SkuButton',

  props: skuButtonProps,

  render () {
    const {
      clsPrefix,
      onClick,
    } = this;

    return (
      <div class={[
        `${clsPrefix}-group`
      ]}>
        <NSpace
          class={[
            `${clsPrefix}-group-section`
          ]}
          vertical
        >
          <NSpace class={[
            `${clsPrefix}-group-header`
          ]} align='center'>
            <NButton size='small' onClick={onClick}>添加规格</NButton>
          </NSpace>
        </NSpace>
      </div>
    );
  }
});
