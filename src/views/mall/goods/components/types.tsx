import { defineComponent, PropType, toRef, watch } from 'vue';
import { GoodsType } from '@/components/goods-type';
import { Entity } from './entity';
import { Virtual } from './virtual';
import { Card } from './card';
import { TypeKeys, TypeSchema } from './interface';
import { useGoods } from '../hooks/goods';

const goodsTypeProps = {
  typeKey: {
    type: String as PropType<TypeKeys>,
    default: 'entity'
  }
};

export default defineComponent({
  name: 'GoodsType',

  props: goodsTypeProps,

  emits: ['change'],

  setup (props, { emit }) {
    const {
      isAction
    } = useGoods();
    const activeKey = toRef<{typeKey: TypeKeys}, 'typeKey'>(props, 'typeKey');

    const types: TypeSchema[] = [
      {
        title: '实物商品',
        delivery: true,
        key: 'entity',
        name: Entity
      },
      {
        title: '虚拟商品',
        delivery: false,
        key: 'virtual',
        name: Virtual
      },
      {
        title: '电子卡密',
        delivery: false,
        key: 'card',
        name: Card
      }
    ];

    function getCurrent (key: TypeKeys) {
      return types.find(type => type.key === key);
    }

    const handleTrigger = (key: TypeKeys) => {
      if (activeKey.value === key || isAction.value) return;

      emit('change', getCurrent(key));
    };

    watch(
      () => activeKey.value,
      () => {
        emit('change', getCurrent(activeKey.value));
      },
      {
        immediate: true
      }
    );

    return {
      types,
      activeKey,
      isAction,
      handleTrigger
    };
  },

  render () {
    const {
      types,
      handleTrigger
    } = this;

    return (
      <div class={[
        'goods-types',
        {
          'types-disabled': this.isAction
        }
      ]} style={{
        display: 'flex'
      }}>
        {
          types.map((item, index) => (
            <GoodsType
              key={index}
              title={item.title}
              delivery={item.delivery}
              active={this.activeKey === item.key}
              {...{
                onClick: () => handleTrigger(item.key)
              }}
            />
          ))
        }
      </div>
    );
  }
});
