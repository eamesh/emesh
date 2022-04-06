import { NSpin } from 'naive-ui';
import { defineComponent } from 'vue';

import './style.scss';

export default defineComponent({
  name: 'SpinView',

  render () {
    return (
      <div class='spin-view'>
        <NSpin size="small" />
      </div>
    );
  }
});
