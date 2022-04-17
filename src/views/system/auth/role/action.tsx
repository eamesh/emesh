import { SpaceView } from '@/components/space-view';
import { NCard } from 'naive-ui';
import { defineComponent} from 'vue';

export default defineComponent({
  name: 'AuthRole',

  setup () {
    //
  },

  render () {
    return (
      <SpaceView>
        <NCard size="small" bordered>
          Action
        </NCard>
      </SpaceView>
    );
  }
});
