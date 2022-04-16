import { NA, NButton } from 'naive-ui';
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
  target: {
    type: String as PropType<'_blank' | '_self' | '_top' | '_parent'>,
    default: '_self'
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
      target,
      to,
      type,
      size,
      $slots
    } = this;

    return (
      <RouterLink to={{
        path: to as string
      }} custom>
        {{
          default: ({ href, navigate }: any) => {
            return (
              <NA
                {...{
                  href,
                  target,
                  onClick: target === '_blank' ? () => {} : navigate
                }}
              >
                <NButton type={type} size={size}>
                  {$slots}
                </NButton>
              </NA>
            );
          }
        }}
      </RouterLink>
    );
  }
});
