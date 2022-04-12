import { defineComponent } from 'vue';
import { NConfigProvider, lightTheme } from 'naive-ui';
import { RouterView } from 'vue-router';

export default defineComponent({
  name: 'Light',

  setup () {
    //
  },

  render () {
    return (
      <NConfigProvider
        theme={lightTheme}
      >
        <RouterView />
      </NConfigProvider>
    );
  }
});
