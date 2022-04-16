import { SpaceView } from '@/components/space-view';
import { NButton, NCard, NCascader, NForm, NFormItem, NInput, NInputNumber, NRadio, NRadioGroup, NSpace } from 'naive-ui';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SettingIndex',

  setup () {

  },

  render () {
    return (
      <SpaceView>
        <NCard size='small'>
          <NForm labelPlacement='left' labelWidth={120}>
            <NFormItem label='客服电话：'>
              <NSpace vertical class='mt-2'>
                <NRadioGroup defaultValue='tel'>
                  <NRadio name='type' value='tel'>座机号</NRadio>
                  <NRadio name='type' value='mobile'>手机号</NRadio>
                </NRadioGroup>

                <NSpace align='center'>
                  <NInputNumber style={{width: '60px'}} placeholder={'区号'} showButton={false} />
                  -
                  <NInputNumber placeholder={'座机号'} showButton={false} />
                </NSpace>
              </NSpace>
            </NFormItem>

            <NFormItem label='联系地址：'>
              <NCascader style={{width: '300px'}} />
            </NFormItem>

            <NFormItem label='详细地址：'>
              <NSpace>
                <NInput placeholder='请填写详细地址，以便买家联系；（勿重复填写省市区信息）' style={{width: '480px'}}/>
                <NButton>搜索地图</NButton>
              </NSpace>
            </NFormItem>
          </NForm>
        </NCard>
      </SpaceView>
    );
  }
});
