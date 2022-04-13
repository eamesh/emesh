import { FreeActionTitle, widgetDataProps } from 'free-core';
import { NButton, NColorPicker, NForm, NFormItem, NInput, NSpace, NText } from 'naive-ui';
import { defineComponent, ref, unref } from 'vue';

import './style.scss';

export interface NutuiNoticeBarProps {
  title: string;
  color: string;
  background: string;
}

const nutuiNoticeBarProps = widgetDataProps<NutuiNoticeBarProps>({
  title: '',
  color: '#D9500B',
  background: 'rgb(255, 248, 233)'
});

export default defineComponent({
  name: 'NoticeBar',

  props: nutuiNoticeBarProps,

  setup (props) {
    const model = ref(props.data);
    const modelUnref = unref(model);

    function renderAction () {
      return (
        <>
          <FreeActionTitle title='公告' />
          <div class='free-action-form free-action-render'>
            <NForm>
              <NFormItem label='公告'>
                <NInput v-model:value={modelUnref.title} placeholder='请填写公告' />
              </NFormItem>
              <NFormItem label='背景颜色' labelPlacement='left'>
                <NSpace align='center' justify='space-between' class='nav-image-type' style={{ width: '100%' }}>
                  <NText>{modelUnref.background}</NText>
                  <NSpace>
                    <NButton quaternary size='small'>重置</NButton>
                    <NColorPicker size='small' style={{ width: '80px' }} v-model:value={modelUnref.background} />
                  </NSpace>
                </NSpace>
              </NFormItem>
              <NFormItem label='文字颜色' labelPlacement='left'>
                <NSpace align='center' justify='space-between' class='nav-image-type' style={{ width: '100%' }}>
                  <NText>{modelUnref.color}</NText>
                  <NSpace>
                    <NButton quaternary size='small'>重置</NButton>
                    <NColorPicker size='small' style={{ width: '80px' }} v-model:value={modelUnref.color} />
                  </NSpace>
                </NSpace>
              </NFormItem>
            </NForm>
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
      <div class='notice-bar'>
        <nut-noticebar
          color={this.model.color}
          background={this.model.background}
          scrollable={false}
          text={this.model.title || '请填写内容，如果过长，将会在手机上滚动显示'}
        >

        </nut-noticebar>
      </div>
    );
  }
});
