import { FormItem } from '@/components/naive-ui/form';
import { UploadImageMain, UploadVideoMain } from '@/components/upload';
import { Play20Filled } from '@vicons/fluent';
import { FreeActionTitle, widgetDataProps } from 'free-core';
import { NDivider, NForm, NFormItem, NIcon, NInput, NInputNumber, NRadioButton, NRadioGroup, NSlider, NSpace, NSwitch, NText, NThing } from 'naive-ui';
import { FileInfo } from 'naive-ui/lib/upload/src/interface';
import { computed, defineComponent, ref, unref, watchEffect } from 'vue';

import './style.scss';

export interface NutuiVideoPlayerProps {
  type: 'resource' | 'network',
  coverType: 'default' | 'resource',
  radioType: 'square' | 'round',
  pagePadding: number,
  resource: {
    src: string,
    type: string
  },
  network: {
    src: string,
    type: string
  },
  options: {
    controls: boolean,
    poster: string,
    autoplay: boolean,
    muted: boolean,
    loop: boolean
  }
}

const nutuiVideoPlayerProps = widgetDataProps<NutuiVideoPlayerProps>({
  type: 'resource',
  coverType: 'default',
  radioType: 'square',
  pagePadding: 0,
  resource: {
    src: '',
    type: 'video/mp4'
  },
  network: {
    src: '',
    type: 'video/mp4'
  },
  options: {
    controls: true,
    poster: '',
    autoplay: false,
    muted: true,
    loop: true
  }
});

export default defineComponent({
  name: 'VideoPlayer',

  props: nutuiVideoPlayerProps,

  setup (props) {
    const model = ref(props.data);
    const modelUnref = unref(model);
    const videoRef = ref();
    const playRef = ref(false);

    watchEffect(() => {
      videoRef.value && videoRef.value.addEventListener('play', () => {
        playRef.value = true;
      });

      videoRef.value && videoRef.value.addEventListener('pause', () => {
        playRef.value = false;
      });
    });

    const fileListVideoCompute = computed<FileInfo[]>({
      get () {
        return modelUnref.resource.src ? [
          {
            id: '0',
            name: '',
            status: 'finished',
            url: modelUnref.resource.src,
            thumbnailUrl: modelUnref.resource.src
          }
        ] : [];
      },

      set (files) {
        console.log(files);
        modelUnref.resource.src = files.length === 0 ? '' : files[0].thumbnailUrl! || files[0].url!;
      }
    });

    const fileListCoverCompute = computed<FileInfo[]>({
      get () {
        return modelUnref.options.poster ? [
          {
            id: '0',
            name: '',
            status: 'finished',
            url: modelUnref.options.poster,
            thumbnailUrl: modelUnref.options.poster
          }
        ] : [];
      },

      set (files) {
        console.log(files);
        modelUnref.options.poster = files.length === 0 ? '' : files[0].thumbnailUrl! || files[0].url!;
      }
    });

    function renderAction () {
      return (
        <>
          <FreeActionTitle title='??????' />
          <div class='free-action-form free-action-render'>
            <NForm>
              <NThing>
                {{
                  header: () => '????????????',
                }}
              </NThing>
              <FormItem label='??????' labelPlacement='left' class='mt-3'>
                <NSpace align='center' justify='space-between'  style={{ width: '100%' }}>
                  <NText></NText>
                  <NRadioGroup v-model:value={modelUnref.type}>
                    <NRadioButton key='resource' value='resource'>
                      ????????????
                    </NRadioButton>
                    <NRadioButton key='network' value='network'>
                      ????????????
                    </NRadioButton>
                  </NRadioGroup>
                </NSpace>
              </FormItem>
              {
                modelUnref.type === 'resource' ? (
                  <FormItem labelPlacement='left'>
                    {{
                      default: () => {
                        return (
                          <UploadVideoMain v-model:fileList={fileListVideoCompute.value} max={1} />
                        );
                      },
                      help: () => <NText depth={3}>????????????????????????720P???????????????</NText>
                    }}
                  </FormItem>
                ) : (
                  <>
                    <FormItem labelPlacement='left'>
                      {{
                        default: () => {
                          return (
                            <NInput placeholder={'?????????????????????'} v-model:value={modelUnref.network.src} />
                          );
                        }
                      }}
                    </FormItem>
                    <NText class='help-text' depth={3}>????????? v2.15 ??????????????????????????????.mp4????????????????????????</NText>
                    <div class='relative video-layout'>
                      <video ref={videoRef} src={modelUnref.network.src} id="linkVideo" />
                      {
                        playRef.value ? null : (
                          <NIcon class='play-btn' color='#fff' size={60}>
                            <Play20Filled />
                          </NIcon>
                        )
                      }
                    </div>
                  </>
                )
              }

              <NFormItem label='??????' labelPlacement='left'>
                <NSpace align='center' justify='space-between'  style={{ width: '100%' }}>
                  <NText></NText>
                  <NRadioGroup v-model:value={modelUnref.coverType}>
                    <NRadioButton key='default' value='default'>
                      ????????????
                    </NRadioButton>
                    <NRadioButton key='resource' value='resource'>
                      ????????????
                    </NRadioButton>
                  </NRadioGroup>
                </NSpace>
              </NFormItem>
              {
                modelUnref.coverType !== 'default' ? (
                  <FormItem labelPlacement='left'>
                  {{
                      default: () => {
                        return (
                          <UploadImageMain max={1} v-model:fileList={fileListCoverCompute.value} />
                        );
                      },
                      help: () => <NText depth={3}>?????????????????????????????????????????????</NText>
                    }}
                  </FormItem>
                ) : null
              }
              <NDivider style={{
                marginTop: '0'
              }} />
              <NThing>
                {{
                  header: () => '????????????',
                }}
              </NThing>
              <FormItem labelWidth={70} hideHelp label='???????????????' labelPlacement='left' class='mt-3' labelAlign='left'>
                <NSpace align='center' justify='space-between'  style={{ width: '100%' }}>
                  <NText>{ modelUnref.options.controls ? '??????' : '?????????' }</NText>
                  <NSwitch size='small' v-model:value={modelUnref.options.controls} />
                </NSpace>
              </FormItem>
              <FormItem labelWidth={70} hideHelp label='????????????' labelPlacement='left' labelAlign='left'>
                <NSpace align='center' justify='space-between'  style={{ width: '100%' }}>
                  <NText>{ modelUnref.options.autoplay ? '?????????' : '?????????' }</NText>
                  <NSwitch size='small' v-model:value={modelUnref.options.autoplay} />
                </NSpace>
              </FormItem>

              <NDivider />
              <NThing>
                {{
                  header: () => '????????????',
                }}
              </NThing>
              <NFormItem label='????????????' labelPlacement='left' class='mt-3'>
                <NSpace align='center' justify='space-between' class='carousel-image-type' style={{ width: '100%' }}>
                  <NText class='action-item-label' strong style={{ marginBottom: 0 }}>{ modelUnref.radioType === 'square' ? '??????' : '??????' }</NText>
                  <NRadioGroup size='small' v-model:value={modelUnref.radioType}>
                    <NRadioButton key='square' value='square'>
                      ??????
                    </NRadioButton>
                    <NRadioButton key='round' value='round'>
                      ??????
                    </NRadioButton>
                  </NRadioGroup>
                </NSpace>
              </NFormItem>
              <NFormItem label='????????????' labelPlacement='left'>
                <NSpace align='center' justify='space-between' class='carousel-image-type' style={{ width: '100%' }}>
                  <NSlider min={0} style={{ width: '160px' }} max={30} v-model:value={modelUnref.pagePadding} />
                  <NInputNumber style={{ width: '80px' }} max={30} min={0} placeholder={''} v-model:value={modelUnref.pagePadding} />
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
      <div class='video-player' style={{
        paddingLeft: `${this.model.pagePadding}px`,
        paddingRight: `${this.model.pagePadding}px`,
        height: '210px'
      }}>
        {
          this.model.type === 'resource' && this.model.resource.src ? (
            <nut-video
              source={this.model.resource}
              options={this.model.options}
              style={{
                borderRadius: this.model.radioType === 'round' ? '8px' : 0,
                overflow: 'hidden'
              }}
            >
            </nut-video>
          ) : this.model.network.src ? (
            <nut-video
              source={this.model.network}
              options={this.model.options}
              style={{
                borderRadius: this.model.radioType === 'round' ? '8px' : 0,
                overflow: 'hidden'
              }}
            >
            </nut-video>
          ) : <nut-video
            options={this.model.options}
            style={{
              borderRadius: this.model.radioType === 'round' ? '8px' : 0,
              overflow: 'hidden'
            }}
          >
          </nut-video>
        }
      </div>
    );
  }
});
