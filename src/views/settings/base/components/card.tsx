import { defineComponent } from 'vue';
import { NCard, NText } from 'naive-ui';

export default defineComponent({
  name: 'FormCard',

  props: {
    title: {
      type: String,
      required: true
    }
  },

  setup () {
    //
  },

  render () {
    const {
      title,
      $slots
    } = this;

    return (
      <NCard size="small" title={title}>
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
