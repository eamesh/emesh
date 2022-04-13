import { FreeActionTitle, widgetDataProps } from 'free-core';
import { NButton, NColorPicker, NForm, NFormItem, NInput, NSpace, NText } from 'naive-ui';
import { CSSProperties, defineComponent, ref, unref } from 'vue';

import './style.scss';

export interface NutuiSearchProps {
  text: string,
  background: string,
  inputBackground: string,
  textColor: string
}

const nutuiSearchProps = widgetDataProps<NutuiSearchProps>({
  text: '',
  background: '#ffffff',
  inputBackground: '#f7f7f7',
  textColor: '#9f9f9f'
});

export default defineComponent({
  name: 'Search',

  props: nutuiSearchProps,

  setup (props) {
    const model = ref(props.data);
    const modelUnref = unref(model);

    function renderAction () {
      return (
        <>
          <FreeActionTitle title='商品搜索' />
          <div class='free-action-form free-action-render'>
            <NForm>
              <NFormItem label='右侧添加文字' labelPlacement='left'>
                <NInput v-model:value={modelUnref.text} />
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
              <NFormItem label='输入框背景颜色' labelPlacement='left'>
                <NSpace align='center' justify='space-between' class='nav-image-type' style={{ width: '100%' }}>
                  <NText>{modelUnref.inputBackground}</NText>
                  <NSpace>
                    <NButton quaternary size='small'>重置</NButton>
                    <NColorPicker size='small' style={{ width: '80px' }} v-model:value={modelUnref.inputBackground} />
                  </NSpace>
                </NSpace>
              </NFormItem>
              <NFormItem label='文本颜色' labelPlacement='left'>
                <NSpace align='center' justify='space-between' class='nav-image-type' style={{ width: '100%' }}>
                  <NText>{modelUnref.textColor}</NText>
                  <NSpace>
                    <NButton quaternary size='small'>重置</NButton>
                    <NColorPicker size='small' style={{ width: '80px' }} v-model:value={modelUnref.textColor} />
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
      <div class='search' style={{
        '--search-text-color': this.model.textColor
      } as CSSProperties}>
        {
          this.model.text ? (
            <nut-searchbar background={this.model.background} inputBackground={this.model.inputBackground}>
              {{
                rightout: () => this.model.text,
                leftin: () => {
                  return <nut-icon color={this.model.textColor} size="14" name="search2"></nut-icon>;
                }
              }}
            </nut-searchbar>
          ) : (
            <nut-searchbar background={this.model.background} inputBackground={this.model.inputBackground}>
              {{
                leftin: () => {
                  return <nut-icon color={this.model.textColor} size="14" name="search2"></nut-icon>;
                }
              }}
            </nut-searchbar>
          )
        }
      </div>
    );
  }
});
