import { FreeActionTitle, widgetDataProps } from 'free-core';
import { NText } from 'naive-ui';
import { defineComponent, ref } from 'vue';

import './style.scss';

export interface NutuiSearchProps {
  keyword: string;
}

const nutuiSearchProps = widgetDataProps<NutuiSearchProps>({
  keyword: ''
});

export default defineComponent({
  name: 'Search',

  props: nutuiSearchProps,

  setup () {
    const model = ref({
      keyword: ''
    });

    function renderAction () {
      return (
        <>
          <FreeActionTitle title='搜索' />
          <div class='free-action-form'>
            <NText>功能待完善</NText>
          </div>
        </>
      );
    }

    return {
      model,
      renderAction
    };
  },

  render () {
    return (
      <div class='search'>
        <nut-searchbar v-model={this.model.keyword}></nut-searchbar>
      </div>
    );
  }
});
