import { FormItem } from '@/components/naive-ui/form';
import { SpaceView } from '@/components/space-view';
import { NForm, NInputNumber, NText } from 'naive-ui';
import { defineComponent } from 'vue';
import FormCard from './base/components/card';

export default defineComponent({
  name: 'SettingIndex',

  setup () {

  },

  render () {
    return (
      <SpaceView>
        <FormCard title='售后/维权客服电话'>
          <NForm labelPlacement='left' labelWidth='120'>
            <FormItem label='手机号码：'>
              {{
                default: () => {
                  return <NInputNumber showButton={false} placeholder='请填写手机号码' style={{width: '240px'}} />;
                },
                help: () => {
                  return <NText depth={3}>手机号可用于接收买家维权咨询、维权通知提醒，如不填写，将收不到消息提醒</NText>;
                }
              }}
            </FormItem>
          </NForm>

        </FormCard>
      </SpaceView>
    );
  }
});
