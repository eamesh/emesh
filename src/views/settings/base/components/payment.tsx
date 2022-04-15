import { FormItem } from '@/components/naive-ui/form';
import { NForm, NRadio, NRadioGroup, NSpace } from 'naive-ui';
import { defineComponent } from 'vue';
import FormCard from './card';

export default defineComponent({
  name: 'PaymentForm',

  setup () {
    //
  },

  render () {
    return (
      <FormCard title="支付设置">
        <NForm labelWidth={225} labelPlacement='left' labelAlign='right'>
          <NSpace vertical size={[0, 16]}>
            <FormItem label='微信支付优惠：' hideHelp>
              <NRadioGroup defaultValue={0}>
                <NSpace>
                  <NRadio name='wechat-discount' value={1}>开启</NRadio>
                  <NRadio name='wechat-discount' value={0}>关闭</NRadio>
                </NSpace>
              </NRadioGroup>
            </FormItem>
          </NSpace>
        </NForm>
      </FormCard>
    );
  }
});
