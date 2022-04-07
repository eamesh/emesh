import { NTab, NTabs } from 'naive-ui';
import { computed, defineComponent } from 'vue';
import { useRouter } from 'vue-router';

const storeTabProps = {
  defaultValue: {
    type: String
  }
};

export default defineComponent({
  name: 'StoreTabs',

  props: storeTabProps,

  setup () {
    const router = useRouter();
    const tabOptions = [
      {
        name: 'page',
        title: '微页面',
        path: '/store/page'
      },
      {
        name: 'category',
        title: '微页面分类',
        path: '/store/page/category'
      },
      {
        name: 'draft',
        title: '微页面草稿',
        path: '/store/page/draft'
      }
    ];

    const pathMap = computed(() => {
      const maps = new Map();
      tabOptions.map(item => maps.set(item.name, item.path));

      return maps;
    });

    function handleChangeRoute (value: string | number) {
      router.push({
        path: pathMap.value.get(value)
      });
    }

    return {
      tabOptions,
      handleChangeRoute
    };
  },

  render () {
    const {
      tabOptions,
      defaultValue,
      handleChangeRoute
    } = this;

    return (
      <NTabs type='line' animated defaultValue={defaultValue} onUpdateValue={handleChangeRoute}>
        {tabOptions.map(item => {
          return (
            <NTab name={item.name}>
              {item.title}
            </NTab>
          );
        })}
      </NTabs>
    );
  }
});
