import { FormItem } from '@/components/naive-ui/form';
import { UploadImageMain } from '@/components/upload';
import { NButton, NCheckbox, NCheckboxGroup, NColorPicker, NForm, NImage, NInput, NRadio, NRadioGroup, NSelect, NSpace, NSwitch, NText, NTimePicker } from 'naive-ui';
import { defineComponent, ref } from 'vue';
import FormCard from './card';
import FormSection from './section';

export default defineComponent({
  name: 'StoreForm',

  setup () {
    const model = ref({
      business: true
    });

    return {
      model
    };
  },

  render () {
    return (
     <FormCard title="店铺设置">
       <NForm labelWidth={225} labelPlacement='left' labelAlign='right'>
        <NSpace vertical size={[0, 16]}>
          <FormSection title='经营设置' description='设置你的网点经营模式；多网点请前往应用-配套工具-多网点进行设置' />
          <FormItem label='经营状态：'>
            {{
              default: () => {
                return (
                  <NSpace align='center'>
                    <NSwitch size='small' v-model:value={this.model.business}></NSwitch>
                    <NText>{ this.model.business ? '营业' : '休息' }</NText>
                  </NSpace>
                );
              },
              help: () => {
                return <NText depth={3}>设置休息后，买家将无法在店内消费，请谨慎操作。</NText>;
              }
            }}
          </FormItem>
          <FormItem label='营业时间：'>
            {{
              default: () => {
                return (
                  <NRadioGroup>
                    <NSpace vertical>
                      <NRadio value='all' name='business-time'>全天</NRadio>
                      <NSpace vertical>
                        <NRadio value='custom' name='business-time'>自定义</NRadio>
                        <div class='pl-6'>
                          <NRadioGroup>
                            <NSpace vertical>
                              <NSpace vertical>
                                <NRadio>每天重复</NRadio>
                                <NSpace vertical class='pl-6'>
                                  <FormItem hideHelp>
                                    <NSpace align='center'>
                                      <NTimePicker /> 至 <NTimePicker />
                                    </NSpace>
                                  </FormItem>
                                  <NButton tag='a' text type='primary'>添加时间</NButton>
                                </NSpace>
                              </NSpace>
                              <NSpace vertical>
                                <NRadio>每周重复</NRadio>
                                <NSpace vertical class='pl-6'>
                                  <NButton tag='a' text type='primary'>添加星期</NButton>
                                </NSpace>
                              </NSpace>
                            </NSpace>
                          </NRadioGroup>
                        </div>
                      </NSpace>
                    </NSpace>
                  </NRadioGroup>
                );
              },
              help: () => {
                return (
                  <NText depth={3}>在你设置的营业时间内，买家可以在店内消费。</NText>
                );
              }
            }}
          </FormItem>

          <FormSection title='基础设置' />
          <FormItem label='购物门槛：'>
            {{
              default: () => {
                return (
                  <NSpace>
                    <NCheckbox disabled /> 仅限粉丝购买
                  </NSpace>
                );
              },
              help: () => {
                return <NText depth={3}>
                  开启后，买家在对应渠道中浏览店铺时，只有关注微信公众号才能完成下单。
                </NText>;
              }
            }}
          </FormItem>
          <FormItem label='购物车：'>
            {{
              default: () => {
                return (
                  <NRadioGroup defaultValue={1}>
                    <NSpace>
                      <NRadio name='cart' value={1}>开启</NRadio>
                      <NRadio name='cart' value={0}>关闭</NRadio>
                    </NSpace>
                  </NRadioGroup>
                );
              },
              help: () => {
                return <NText depth={3}>
                  关闭购物车后，商品仅支持单独购买并结算，请谨慎操作。
                </NText>;
              }
            }}
          </FormItem>
          <FormItem label='联系客服：'>
            {{
              default: () => {
                return (
                  <NRadioGroup defaultValue={1}>
                    <NSpace>
                      <NRadio name='cart' value={1}>开启</NRadio>
                      <NRadio name='cart' value={0}>关闭</NRadio>
                    </NSpace>
                  </NRadioGroup>
                );
              },
              help: () => {
                return <NText depth={3}>
                  开启后，买家可在你勾选的页面通过客服入口与你取得联系。
                </NText>;
              }
            }}
          </FormItem>
          <FormItem label='客服入口页面：'>
            {{
              default: () => {
                return (
                  <NSpace vertical>
                    <NCheckbox checked>商品详情页</NCheckbox>

                    <FormItem>
                      {{
                        default: () => {
                          return (
                            <NRadioGroup defaultValue={'default'}>
                              <NSpace align='center'>
                                <NRadio name='detail-name' value='default'>默认名称</NRadio>
                                <NSpace align='center' size={0}>
                                  <NRadio name='detail-name' value='custom'>
                                    自定义名称
                                  </NRadio>
                                  <NInput disabled style={{width: '120px'}} />
                                </NSpace>

                              </NSpace>
                            </NRadioGroup>
                          );
                        },
                        help: () => {
                          return <NText depth={3}>
                            默认名称为客服，可自定义，如：咨询顾问。
                          </NText>;
                        }
                      }}
                    </FormItem>

                    <NCheckbox checked>订单详情页</NCheckbox>
                    <FormItem>
                      {{
                        default: () => {
                          return (
                            <NRadioGroup defaultValue={'default'}>
                              <NSpace align='center'>
                                <NRadio name='detail-name' value='default'>默认名称</NRadio>
                                <NSpace align='center' size={0}>
                                  <NRadio name='detail-name' value='custom'>
                                    自定义名称
                                  </NRadio>
                                  <NInput disabled style={{width: '120px'}} />
                                </NSpace>

                              </NSpace>
                            </NRadioGroup>
                          );
                        },
                        help: () => {
                          return <NText depth={3}>
                            默认名称为客服，可自定义，如：咨询顾问。
                          </NText>;
                        }
                      }}
                    </FormItem>

                  </NSpace>
                );
              },
              help: () => {
                return <NText depth={3}>
                  开启后，买家可在你勾选的页面通过客服入口与你取得联系。
                </NText>;
              }
            }}
          </FormItem>

          <FormItem label='悬浮滚动栏：'>
            <NSpace vertical>
              <FormItem>
                {{
                  default: () => {
                    return (
                      <NRadioGroup defaultValue={1}>
                        <NSpace>
                          <NRadio name='float-scroll' value={1}>展示</NRadio>
                          <NRadio name='float-scroll' value={0}>不展示</NRadio>
                        </NSpace>
                      </NRadioGroup>
                    );
                  },
                  help: () => {
                    return <NText depth={3}>开启悬浮滚动栏将在商品详情页及确认订单页展示。注：确认订单页仅支持在小程序展示。</NText>;
                  }
                }}
              </FormItem>
              <FormItem>
                {{
                  default: () => {
                    return (
                      <NCheckboxGroup defaultValue={['view', 'buy', 'like']}>
                        <NSpace>
                          <NCheckbox value={'view'} label='浏览行为' />
                          <NCheckbox value={'buy'} label='购买行为' />
                          <NCheckbox value={'like'} label='好评行为' />
                        </NSpace>
                      </NCheckboxGroup>
                    );
                  },
                  help: () => {
                    return <NText depth={3}>勾选后，将在悬浮滚动栏中展示勾选的行为数据。选中“展示”后，至少选中一种行为。注：浏览行为，仅支持在商品详情页展示。</NText>;
                  }
                }}
              </FormItem>
            </NSpace>
          </FormItem>

          <FormItem label='会员招募入口：'>
            <NCheckboxGroup defaultValue={['view', 'buy', 'like']}>
              <NSpace>
                <NCheckbox value={'detail'} label='商品详情页' />
                <NCheckbox value={'submit'} label='提交订单页' />
                <NCheckbox value={'member'} label='限会员参与活动' />
              </NSpace>
            </NCheckboxGroup>
          </FormItem>

          <FormItem label='优先引导办理：'>
            {{
              default: () => {
                return (
                  <NSelect style={{width: '200px'}} />
                );
              },
              help: () => {
                return <NText depth={3}>
                  同时开启会员等级和多张权益卡时优先引导办理
                </NText>;
              }
            }}
          </FormItem>
          <FormItem label='店铺黑名单：'>
            {{
              default: () => {
                return (
                  <NRadioGroup defaultValue={1}>
                    <NSpace>
                      <NRadio name='deny-list' value={1}>开启</NRadio>
                      <NRadio name='deny-list' value={0}>关闭</NRadio>
                    </NSpace>
                  </NRadioGroup>
                );
              },
              help: () => {
                return <NText depth={3}>
                  开启后，你可以在后台客户管理模块将客户添加进黑名单，黑名单客户将禁止在店铺内下单。
                </NText>;
              }
            }}
          </FormItem>
          <FormItem label='店铺黑名单：'>
            {{
              default: () => {
                return (
                  <NRadioGroup defaultValue={0}>
                    <NSpace>
                      <NRadio name='water' value={1}>开启（推荐）</NRadio>
                      <NRadio name='water' value={0}>关闭</NRadio>
                    </NSpace>
                  </NRadioGroup>
                );
              },
              help: () => {
                return <NText depth={3}>
                  开启后，员工进入店铺管理后台会显示水印，PC端水印展示该员工姓名和日期，移动端水印展示该员工姓名。
                </NText>;
              }
            }}
          </FormItem>

          <FormSection title='页面设置' />
            <FormItem label='店铺营销标签：'>
              {{
                default: () => {
                  return (
                    <NRadioGroup defaultValue={1}>
                      <NSpace>
                        <NRadio name='store-tag' value={1}>展示</NRadio>
                        <NRadio name='store-tag' value={0}>不展示</NRadio>
                      </NSpace>
                    </NRadioGroup>
                  );
                },
                help: () => {
                  return <NText depth={3}>
                    在商品列表展示活动及优惠券信息，有利于提升下单转化。
                  </NText>;
                }
              }}
            </FormItem>
            <FormItem label='会员价标签：'>
              {{
                default: () => {
                  return (
                    <NRadioGroup defaultValue={1}>
                      <NSpace>
                        <NRadio name='member-price-tag' value={1}>展示</NRadio>
                        <NRadio name='member-price-tag' value={0}>不展示</NRadio>
                      </NSpace>
                    </NRadioGroup>
                  );
                },
                help: () => {
                  return <NText depth={3}>
                    在商品列表展示会员价标签，刺激会员客户下单转化。
                  </NText>;
                }
              }}
            </FormItem>
            <FormItem label='店铺顶部导航：'>
              {{
                default: () => {
                  return (
                    <NRadioGroup defaultValue={1}>
                      <NSpace>
                        <NRadio name='member-price-tag' value={1}>展示</NRadio>
                        <NRadio name='member-price-tag' value={0}>不展示</NRadio>
                      </NSpace>
                    </NRadioGroup>
                  );
                },
                help: () => {
                  return <NText depth={3}>
                    设置为不展示，未开启多网点的店铺将不展示顶部导航，开启了多网点的店铺始终展示顶部导航。
                  </NText>;
                }
              }}
            </FormItem>
            <FormItem label='店铺底部Logo：'>
              {{
                default: () => {
                  return (
                    <NRadioGroup defaultValue={1}>
                      <NSpace>
                        <NRadio name='member-price-tag' value={1}>默认</NRadio>
                        <NRadio name='member-price-tag' value={0}>自定义</NRadio>
                      </NSpace>
                    </NRadioGroup>
                  );
                }
              }}
            </FormItem>
            <FormItem label='微页面默认背景色：'>
              {{
                default: () => {
                  return (
                    <NSpace>
                      <NColorPicker style={{width: '140px'}} />
                      <NButton secondary>重置</NButton>
                    </NSpace>
                  );
                },
                help: () => {
                  return <NText depth={3}>
                    创建新的微页面时默认选择的背景色，创建/编辑微页面时可以自定义背景色。
                  </NText>;
                }
              }}
            </FormItem>
            <FormItem label='页面标题设置：'>
              <NSpace vertical>
                <NSpace align='center'>
                  <NCheckbox label='页面标题添加统一后缀' />
                  -
                  <NInput size='small' style={{width: '100px'}} />
                </NSpace>
                <NSpace size={6} vertical>
                  <NCheckbox checked label='微信内打开微页面时，使用“店铺名称”作为页面标题（若添加了后缀则名称后会显示后缀）' />
                  <NImage src='data:image/jpeg;base64,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' />
                </NSpace>
              </NSpace>
            </FormItem>
            <FormItem label='售罄商品：'>
              {{
                default: () => {
                  return (
                    <NRadioGroup defaultValue={1}>
                      <NSpace>
                        <NRadio name='member-price-tag' value={1}>展示</NRadio>
                        <NRadio name='member-price-tag' value={0}>不展示</NRadio>
                      </NSpace>
                    </NRadioGroup>
                  );
                },
                help: () => {
                  return <NText depth={3}>
                    展示后，售罄商品会在店铺中展示，并显示“已售罄”标记。
                  </NText>;
                }
              }}
            </FormItem>
            <FormItem label='售罄标识：'>
              {{
                default: () => {
                  return (
                    <UploadImageMain max={1} />
                  );
                },
                help: () => {
                  return <NText depth={3}>
                    支持.gif,.jpeg,.png格式。建议400*400像素，单个图片不超过500KB
                  </NText>;
                }
              }}
            </FormItem>
          </NSpace>
       </NForm>
     </FormCard>
    );
  }
});
