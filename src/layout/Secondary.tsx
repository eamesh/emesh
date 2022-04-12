import { NLayout, NLayoutContent } from 'naive-ui';
import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';
import LayoutBase from './Base.vue';
import { Sider as LayoutSider } from './components/sider';

import $style from './style.module.scss';

export default defineComponent({
  name: 'Secondary',

  setup () {
    //
  },

  render () {
    return (
      <LayoutBase hideSider>
        <div class={$style.hiddenContainer}>
          <NLayout hasSider>
            <LayoutSider class={$style.hiddenMenus} width={'160'} />
            {/* <NLayoutSider width={160} style={{ minHeight: '400px' }} bordered>
              <NMenu rootIndent={14} class={$style.hiddenMenus} defaultValue={'page'}></NMenu>
            </NLayoutSider> */}
            <NLayoutContent>
              <RouterView />
            </NLayoutContent>
          </NLayout>
        </div>
      </LayoutBase>
    );
  }
});
