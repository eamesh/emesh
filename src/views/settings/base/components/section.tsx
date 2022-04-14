import { NSpace, NText } from 'naive-ui';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FormSection',

  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: ''
    }
  },

  setup () {
    //
  },

  render () {
    const {
      title,
      description
    } = this;
    return (
      <NSpace class='store-section' align='center'>
        <div class='store-section__title'>
          <NText strong class='text-sm'>{title}</NText>
        </div>
        <NText depth={3} class='text-sm'>{description}</NText>
      </NSpace>
    );
  }
});
