import { NButton } from 'naive-ui';
import { Size, Type } from 'naive-ui/lib/button/src/interface';
import { defineComponent, PropType } from 'vue';
import { RouteLocationRaw, RouterLink } from 'vue-router';

const routerButtonProps = {
  to: {
    type: [String, Object] as PropType<RouteLocationRaw>,
    required: true,
  },
  type: {
    type: String as PropType<Type>,
    default: 'default',
  },
  size: String as PropType<Size>
};

export default defineComponent({
  name: 'RouterButton',

  props: routerButtonProps,

  setup () {

  },

  render () {
    const {
      to,
      type,
      size,
      $slots
    } = this;

    return (
      <RouterLink to={to!} class='router-button'>
        <NButton type={type} size={size}>
          {$slots}
        </NButton>
      </RouterLink>
    );
  }
});
