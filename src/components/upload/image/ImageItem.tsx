import { NIcon, NImage, useThemeVars } from 'naive-ui';
import { computed, defineComponent, PropType, StyleValue } from 'vue';
import { CheckmarkDoneCircle } from '@vicons/ionicons5';
import { SelectExtraListSchema } from './UploadLIst';

export default defineComponent({
  name: 'UploadImage',

  props: {
    index: {
      type: Number,
      default: 0,
    },

    item: {
      type: Object as PropType<SelectExtraListSchema>,
      default: () => {}
    },
  },

  emits: ['select', 'unSelect',],

  setup (props, { emit }) {
    const themeRef = useThemeVars();
    const cssVarsRef = computed(() => {
      return {
        '--n-selected-color': themeRef.value.primaryColorHover
      };
    });

    const handleClick = () => {
      const current = {
        index: props.index,
        item: props.item,
      };
      props.item.select ? emit('unSelect', current) : emit('select', current);
    };

    return {
      cssVars: cssVarsRef as StyleValue,
      handleClick,
    };
  },

  render () {
    const {
      item,
      handleClick,
    } = this;
    return (
      <div class={[
        'list-image',
        item.select ? 'selected' : ''
      ]} style={this.cssVars} onClick={handleClick}>
        <NImage
          previewDisabled
          src={item.thumbnailUrl || item.url || undefined}
        />
        <div class="list-image__selected">
          <NIcon size={20}>
            <CheckmarkDoneCircle />
          </NIcon>
        </div>
      </div>
    );
  }
});
