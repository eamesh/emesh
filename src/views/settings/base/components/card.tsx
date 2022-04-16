import { computed, defineComponent } from 'vue';
import { cB, commonLight, NCard, NText } from 'naive-ui';
import { createTheme, useTheme } from 'naive-ui/lib/_mixins';

export default defineComponent({
  name: 'FormCard',

  props: {
    title: {
      type: String,
      required: true
    }
  },

  setup () {
    const themeRef = useTheme(
      'Card',
      '-form-card',
      cB('card', ''),
      createTheme({
        name: 'FormCard',
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

    return {
      cssVarsRef
    };
  },

  render () {
    const {
      title,
      $slots,
      cssVarsRef
    } = this;

    return (
      <NCard size="small" title={title} style={cssVarsRef}>
        {{
          header: () => {
            return (
              <NCard class='title-card' embedded bordered={false} size='small'>
                {{
                  header: () => {
                    return <NText class='text-sm'>{title}</NText>;
                  },
                }}
              </NCard>
            );
          },
          default: $slots.default
        }}
      </NCard>
    );
  }
});
