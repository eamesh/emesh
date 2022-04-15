import { FormItem } from '@/components/naive-ui/form';
import { NCheckbox, NCheckboxGroup, NForm, NGi, NGrid, NInput, NInputNumber, NRadio, NRadioGroup, NSpace, NText } from 'naive-ui';
import { defineComponent } from 'vue';
import FormCard from './card';

export default defineComponent({
  name: 'GoodsForm',

  setup () {
    //
  },

  render () {
    return (
      <FormCard title="商品设置">
        <NForm labelWidth={225} labelPlacement='left' labelAlign='right'>
          <NSpace vertical size={[0, 16]}>
            <FormItem label='为你推荐：'>
              {{
                default: () => {
                  return (
                    <NRadioGroup defaultValue={0}>
                      <NSpace size={0}>
                        <NRadio name='recommend' value={1} checked>开启</NRadio>
                        <NRadio name='recommend' value={0}>关闭</NRadio>
                      </NSpace>
                    </NRadioGroup>
                  );
                },
                help: () => {
                  return (
                    <NText depth={3}>
                      开启后，商详页商品基本信息下会根据用户行为展示用户可能喜欢的商品，提高商品成交转化。
                    </NText>
                  );
                }
              }}
            </FormItem>
            <FormItem label='商品榜单信息：'>
              {{
                default: () => {
                  return (
                    <NRadioGroup defaultValue={0}>
                      <NSpace size={0}>
                        <NRadio name='goods-top' value={1} checked>展示</NRadio>
                        <NRadio name='goods-top' value={0}>不展示</NRadio>
                      </NSpace>
                    </NRadioGroup>
                  );
                },
                help: () => {
                  return (
                    <NText depth={3}>
                      在商品页/搜索结果页/猜你喜欢页展示商品榜单信息，有助于提升下单转化。
                    </NText>
                  );
                }
              }}
            </FormItem>
            <FormItem label='商品评价：' hideHelp>
              <NSpace vertical>
                <FormItem>
                  {{
                    default: () => {
                      return (
                        <NRadioGroup defaultValue={1}>
                          <NSpace>
                            <NRadio name='show-comment' value={1}>展示全网评价</NRadio>
                            <NRadio name='show-comment' value={0}>隐藏全网评价</NRadio>
                          </NSpace>
                        </NRadioGroup>
                      );
                    },
                    help: () => {
                      return <NText depth={3}>全网评价将在商品详情页对买家进行展示</NText>;
                    }
                  }}
                </FormItem>
                <FormItem>
                  {{
                    default: () => {
                      return (
                        <>
                          <NCheckbox label='好评率大于等于' /> <NInputNumber defaultValue={90} style={{width: '100px'}} class='mr-2' />%时展示好评率数值
                        </>
                      );
                    },
                    help: () => {
                      return <NText depth={3}>仅展示评价时，好评率逻辑才生效，不设置好评率数据，不影响评价展示。</NText>;
                    }
                  }}
                </FormItem>
              </NSpace>
            </FormItem>
            <FormItem label='店铺评价：' hideHelp>
              <NRadioGroup defaultValue={1}>
                <NSpace vertical>
                  <FormItem>
                    {{
                      default: () => {
                        return (
                          <>
                            <NRadio name='show-comment' value={1} class='flex justify-center items-center'>
                              <NSpace align='center'>
                                展示，评价标签数量大于等于
                                <NInputNumber defaultValue={6} />
                                个时展示
                              </NSpace>
                            </NRadio>
                          </>
                        );
                      },
                      help: () => {
                        return <NText depth={3}>选择后，若评价标签数量达到设置值后将在商品详情页展示店铺评价。 如：设定值为6，则评价标签数量大于等于6个后展示该商品所属店铺评价。</NText>;
                      }
                    }}
                  </FormItem>
                  <NRadio name='show-comment' value={0}>不展示</NRadio>
                </NSpace>
              </NRadioGroup>
            </FormItem>
            <FormItem label='评价会员标签展示：'>
              {{
                default: () => {
                  return (
                    <NRadioGroup defaultValue={'name'}>
                      <NSpace size={0}>
                        <NRadio name='member-tag' value={'level'} checked>评价展示会员等级</NRadio>
                        <NRadio name='member-tag' value={'name'}>评价展示会员名称</NRadio>
                      </NSpace>
                    </NRadioGroup>
                  );
                },
                help: () => {
                  return (
                    <NText depth={3}>
                      展示评价时将会展示出评价者的会员名称
                    </NText>
                  );
                }
              }}
            </FormItem>
            <FormItem label='评价排序：'>
              {{
                default: () => {
                  return (
                    <NRadioGroup defaultValue={'auto'}>
                      <NSpace size={0}>
                        <NRadio name='comment-order' value={'auto'} checked>智能推荐排序</NRadio>
                        <NRadio name='comment-order' value={'time'}>评价产生时间排序</NRadio>
                      </NSpace>
                    </NRadioGroup>
                  );
                },
                help: () => {
                  return (
                    <NText depth={3}>
                      系统按照多维度权重排序，无价值评价将会下沉
                    </NText>
                    // <NText depth={3}>
                    //   按照评价产生的时间先后顺序排序，评价越新，排序越前
                    // </NText>
                  );
                }
              }}
            </FormItem>
            <FormItem label='更多商品推荐：' hideHelp>
              <NSpace vertical>
                <FormItem>
                  {{
                    default: () => {
                      return (
                        <NRadioGroup defaultValue={1}>
                          <NSpace size={0}>
                            <NRadio name='goods-recommend' value={1} checked>开启</NRadio>
                            <NRadio name='goods-recommend' value={0}>关闭</NRadio>
                          </NSpace>
                        </NRadioGroup>
                      );
                    },
                    help: () => {
                      return (
                        <NText depth={3}>
                          基于用户行为智能推荐合适的商品，提升用户购买转化。
                        </NText>
                        // <NText depth={3}>
                        //   按照评价产生的时间先后顺序排序，评价越新，排序越前
                        // </NText>
                      );
                    }
                  }}
                </FormItem>
                <NCheckboxGroup style={{width: '360px'}}>
                  <NGrid cols={3}>
                    <NGi>
                      <NCheckbox value='detail' label='商品详情页' />
                    </NGi>
                    <NGi>
                      <NCheckbox value='cart' label='购物车' />
                    </NGi>
                    <NGi>
                      <NCheckbox value='payment-success' label='支付成功页' />
                    </NGi>
                    <NGi>
                      <NCheckbox value='order-list' label='订单列表页' />
                    </NGi>
                    <NGi>
                      <NCheckbox value='order-detail' label='订单详情页' />
                    </NGi>
                    <NGi>
                      <NCheckbox value='equity-card' label='权益卡页' />
                    </NGi>
                    <NGi>
                      <NCheckbox value='express-detail' label='物流详情页' />
                    </NGi>
                    <NGi>
                      <NCheckbox value='refund-detail' label='退款详情页' />
                    </NGi>
                    <NGi>
                      <NCheckbox value='free-member-detail' label='免费会员中心页' />
                    </NGi>
                    <NGi>
                      <NCheckbox value='member-detail' label='付费会员中心页' />
                    </NGi>
                    <NGi>
                      <NCheckbox value='order-search' label='订单搜索页' />
                    </NGi>
                  </NGrid>
                </NCheckboxGroup>
              </NSpace>
            </FormItem>
            <FormItem label='商详页店铺按钮：'>
              {{
                default: () => {
                  return (
                    <NRadioGroup defaultValue={1}>
                      <NSpace size={0}>
                        <NRadio name='detail-store-btn' value={1} checked>展示</NRadio>
                        <NRadio name='detail-store-btn' value={0}>不展示</NRadio>
                      </NSpace>
                    </NRadioGroup>
                  );
                },
                help: () => {
                  return (
                    <NText depth={3}>
                      展示后，买家可以点击该按钮快速回到店铺主页。
                    </NText>
                  );
                }
              }}
            </FormItem>
            <FormItem label='商详页立即购买：'>
              {{
                default: () => {
                  return (
                    <NSpace vertical>
                      <FormItem>
                        {{
                          default: () => {
                            return (
                              <NRadioGroup defaultValue={1}>
                                <NSpace>
                                  <NRadio name='detail-buynow' value={1}>展示</NRadio>
                                  <NRadio name='detail-buynow' value={0}>不展示</NRadio>
                                </NSpace>
                              </NRadioGroup>
                            );
                          },
                          help: () => {
                            return (
                              <NText depth={3}>
                                设置选择不展示，商品详情页仅展示加入购物车，不展示立即购买按钮。
                              </NText>
                            );
                          }
                        }}
                      </FormItem>
                      <FormItem>
                        {{
                          default: () => {
                            return (
                              <NRadioGroup defaultValue={1}>
                                <NSpace align='center'>
                                  <NRadio name='detail-buynow-custom' value={1}>默认名称</NRadio>
                                  <NRadio class='flex justify-center items-center' name='detail-buynow-custom' value={0}>
                                    自定义名称 <NInput class='ml-2' style={{width: '100px'}} />
                                  </NRadio>
                                </NSpace>
                              </NRadioGroup>
                            );
                          },
                          help: () => {
                            return (
                              <NText depth={3}>
                                默认名称为立即购买，可自定义名称，支持中英文混合（全中文最多6个字，全英文最多12个字母），如：马上抢购。
                              </NText>
                            );
                          }
                        }}
                      </FormItem>
                    </NSpace>
                  );
                },
                help: () => {
                  return (
                    <NText depth={3}>
                      自定义后，全店商品详情页名称都将更改，若需要设置单个商品的立即购买按钮，可前往商品管理页单独编辑相关的商品。
                    </NText>
                  );
                }
              }}
            </FormItem>
            <FormItem label='商详页展示弹幕：'>
              {{
                default: () => {
                  return (
                    <NRadioGroup defaultValue={1}>
                      <NSpace>
                        <NRadio name='bullet-chat' value={1}>展示</NRadio>
                        <NRadio name='bullet-chat' value={0}>不展示</NRadio>
                      </NSpace>
                    </NRadioGroup>
                  );
                },
                help: () => {
                  return (
                    <NText depth={3}>
                      选中展示后，进入商品详情页面将滚动展示弹幕内容。
                    </NText>
                  );
                }
              }}
            </FormItem>
            <FormItem label='商详页购买记录：' hideHelp>
              <NRadioGroup defaultValue={1}>
                <NSpace vertical>
                  <FormItem>
                    {{
                      default: () => {
                        return (
                          <NRadio name='detail-buy-hisyoty' value={1} class='flex justify-center items-center'>
                            <NSpace align='center'>
                              展示，购买记录达到
                              <NInputNumber defaultValue={5} style={{width: '100px'}} />
                              人时展示
                            </NSpace>
                          </NRadio>
                        );
                      },
                      help: () => {
                        return (
                          <NText depth={3}>
                            选择后，若购买记录达到设定值后将展示该模块。如：设定值为 50，则购买记录 ≥50 件后展示该模块。
                          </NText>
                        );
                      }
                    }}
                  </FormItem>
                  <NRadio name='detail-buy-hisyoty' value={0}>不展示</NRadio>
                </NSpace>
              </NRadioGroup>
            </FormItem>
            <FormItem label='商品海报样式：'>
              {{
                default: () => {
                  return (
                    <NRadioGroup defaultValue={1}>
                      <NSpace>
                        <NRadio name='poster-style' value={1}>样式一</NRadio>
                        <NRadio name='poster-style' value={2}>样式二</NRadio>
                        <NRadio name='poster-style' value={3}>样式三</NRadio>
                      </NSpace>
                    </NRadioGroup>
                  );
                },
                help: () => {
                  return (
                    <>
                      <NText depth={3} tag='div'>
                        海报样式暂时仅对H5/小程序端生效，小程序版本需升级在v2.51以上。
                      </NText>
                      <NText depth={3}>
                        如单个商品设置自定义海报推广，则该商品优先展示自定义样式。
                      </NText>
                    </>
                  );
                }
              }}
            </FormItem>
            <FormItem label='商品海报分享人：'>
              {{
                default: () => {
                  return (
                    <NRadioGroup defaultValue={1}>
                      <NSpace>
                        <NRadio name='share-card-style' value={1}>展示</NRadio>
                        <NRadio name='show-sharer' value={0}>不展示</NRadio>
                      </NSpace>
                    </NRadioGroup>
                  );
                },
                help: () => {
                  return (
                    <>
                      <NText depth={3} tag='div'>
                        该设置仅对系统海报生效，自定义海报不受影响。
                      </NText>
                      <NText depth={3}>
                        微信小程序版本需升级至v2.55以上。
                      </NText>
                    </>
                  );
                }
              }}
            </FormItem>
            <FormItem label='小程序分享卡片：' hideHelp>
              <NSpace vertical>
                <FormItem>
                  {{
                    default: () => {
                      return <NRadioGroup defaultValue={1}>
                        <NSpace>
                          <NRadio name='share-card-style' value={1}>基础样式1</NRadio>
                          <NRadio name='share-card-style' value={2}>基础样式2</NRadio>
                          <NRadio name='share-card-style' value={3}>基础样式3</NRadio>
                        </NSpace>
                      </NRadioGroup>;
                    },
                    help: () => {
                      return (
                        <NText depth={3}>应用促销样式，将展示 7 种营销活动信息，提升商品点击率。</NText>
                      );
                    }
                  }}
                </FormItem>
                <div class='pl-6'>
                  <FormItem>
                    {{
                      default: () => {
                        return (
                          <NCheckboxGroup defaultValue={[1,2]}>
                            <NSpace>
                              <NCheckbox value={1}>主图水印自动适配</NCheckbox>
                              <NCheckbox value={2}>商品主图智能适配</NCheckbox>
                            </NSpace>
                          </NCheckboxGroup>
                        );
                      },
                      help: () => {
                        return (
                          <>
                            <NText depth={3} tag='div'>
                              开启主图水印自动适配时，主图水印，会自动调整大小和位置。
                            </NText>
                            <NText depth={3}>
                              开启商品主图智能适配时，使用白底图的商品会对分享图片进行智能裁剪。
                            </NText>
                          </>
                        );
                      }
                    }}
                  </FormItem>
                </div>
              </NSpace>
            </FormItem>
            <FormItem label='小程序分享标题：'>
              {{
                default: () => {
                  return (
                    <NRadioGroup defaultValue={'custom'}>
                      <NSpace vertical>
                        <NRadio name='share-title' value='name'>仅展示商品名称</NRadio>
                        <NRadio name='share-title' value='text'>展示智能文案</NRadio>
                        <NRadio class='flex justify-center items-center' name='share-title' value='custom'>
                          <NSpace align='center'>
                            展示自定义前缀
                            <NInput size='small' style={{width: '160px'}} defaultValue='有人拍了拍你，推荐了：' />
                            和商品名称
                          </NSpace>
                        </NRadio>

                      </NSpace>
                    </NRadioGroup>
                  );
                },
                help: () => {
                  return (
                    <>
                      <NText tag='div' depth={3}>设置有吸引力的分享标题，吸引更多消费者注意。</NText>
                      <NText depth={3}>通过智能文案，快速智能生成分享标题，更贴合分享场景。</NText>
                    </>
                  );
                }
              }}
            </FormItem>
            <FormItem label='H5商品分享标题：'>
              {{
                default: () => {
                  return (
                    <NRadioGroup defaultValue={'custom'}>
                      <NSpace vertical>
                        <NRadio name='h5-share-title' value='name'>仅展示商品名称</NRadio>
                        <NRadio name='h5-share-title' value='text'>展示智能文案</NRadio>
                        <NRadio class='flex justify-center items-center' name='h5-share-title' value='custom'>
                          <NSpace align='center'>
                            展示自定义前缀
                            <NInput size='small' style={{width: '160px'}} defaultValue='有人拍了拍你，推荐了：' />
                            和商品名称
                          </NSpace>
                        </NRadio>

                      </NSpace>
                    </NRadioGroup>
                  );
                },
                help: () => {
                  return (
                    <>
                      <NText tag='div' depth={3}>设置有吸引力的分享标题，吸引更多消费者注意。</NText>
                    </>
                  );
                }
              }}
            </FormItem>
            <FormItem label='H5商品分享描述：' hideHelp>
              <NRadioGroup defaultValue={1}>
                <NSpace>
                  <NRadio name='h5-share-desc' value={1}>默认文案</NRadio>
                  <NRadio name='h5-share-desc' value={2}>展示智能文案</NRadio>
                </NSpace>
              </NRadioGroup>
            </FormItem>
            <FormItem label='商品详情页展示活动倒计时：' hideHelp>
              <NRadioGroup defaultValue={1}>
                <FormItem>
                  {{
                    default: () => {
                      return (
                        <NRadio class='flex justify-center items-center' name='detail-count-down' value={1}>
                          <NSpace align='center'>
                            展示，距离活动结束仅剩
                            <NInputNumber defaultValue={12} />
                            小时开始提示
                          </NSpace>
                        </NRadio>
                      );
                    },
                    help: () => {
                      return <NText depth={3}>开启后，指定活动满足倒计时条件时，商品详情页展示活动倒计时。</NText>;
                    }
                  }}
                </FormItem>
                <NRadio name='detail-count-down' value={0}>不展示</NRadio>
              </NRadioGroup>
            </FormItem>
            <FormItem label='商品发布智能类目：'>
              {{
                default: () => {
                  return (
                    <NRadioGroup defaultValue={1}>
                      <NSpace>
                        <NRadio name='goods-auto-group' value={1}>自动填写</NRadio>
                        <NRadio name='goods-auto-group' value={0}>不自动填写，仅做推荐</NRadio>
                      </NSpace>
                    </NRadioGroup>
                  );
                },
                help: () => {
                  return (
                    <>
                      <NText depth={3} tag='div'>
                        开启自动填写后，如通过商品图片和标题识别出商品类目则自动填写。未开启则仅做推荐。
                      </NText>
                    </>
                  );
                }
              }}
            </FormItem>
            <FormItem label='商品详情页面展示类目参数：'>
              {{
                default: () => {
                  return (
                    <NRadioGroup defaultValue={1}>
                      <NSpace>
                        <NRadio name='detail-group' value={1}>展示</NRadio>
                        <NRadio name='detail-group' value={0}>不展示</NRadio>
                      </NSpace>
                    </NRadioGroup>
                  );
                },
                help: () => {
                  return (
                    <>
                      <NText depth={3} tag='div'>
                        商品使用新类目且维护了类目参数，开启“展示”后，则将在商品详情页展示类目参数。
                      </NText>
                    </>
                  );
                }
              }}
            </FormItem>
            <FormItem label='领券促销入口：'>
              {{
                default: () => {
                  return (
                    <NRadioGroup defaultValue={1}>
                      <NSpace>
                        <NRadio name='coupons-entity' value={1}>前置展示</NRadio>
                        <NRadio name='coupons-entity' value={0}>不前置展示</NRadio>
                      </NSpace>
                    </NRadioGroup>
                  );
                },
                help: () => {
                  return (
                    <>
                      <NText depth={3} tag='div'>
                        开启后，优惠促销模块将会前置，有利于优惠券的曝光，促进下单转化。
                      </NText>
                    </>
                  );
                }
              }}
            </FormItem>
            <FormItem label='商品预估价：'>
              {{
                default: () => {
                  return (
                    <NRadioGroup defaultValue={1}>
                      <NSpace>
                        <NRadio name='estimate-price' value={1}>展示</NRadio>
                        <NRadio name='estimate-price' value={0}>不展示</NRadio>
                      </NSpace>
                    </NRadioGroup>
                  );
                },
                help: () => {
                  return (
                    <>
                      <NText depth={3} tag='div'>
                        开启后商品预估价（或购买多件时预估单价）展示在“商品详情页”、“购物车”，放大价格差异刺激消费者下单。
                      </NText>
                    </>
                  );
                }
              }}
            </FormItem>
            <FormItem label='大家喜欢入口：'>
              {{
                default: () => {
                  return (
                    <NSpace vertical>
                      <NRadioGroup defaultValue={1}>
                        <NSpace>
                          <NRadio name='like-enity' value={1}>开启</NRadio>
                          <NRadio name='like-enity' value={0}>关闭</NRadio>
                        </NSpace>
                      </NRadioGroup>
                      <NCheckboxGroup defaultValue={['order-list', 'order-detail', 'express-detail']}>
                        <NSpace>
                          <NCheckbox value='order-list'>订单列表页</NCheckbox>
                          <NCheckbox value='order-detail'>订单详情页</NCheckbox>
                          <NCheckbox value='express-detail'>物流详情页</NCheckbox>
                        </NSpace>
                      </NCheckboxGroup>
                    </NSpace>
                  );
                },
                help: () => {
                  return (
                    <>
                      <NText depth={3} tag='div'>
                        开启后将在对应页面展示智能内容产品「大家喜欢」功能入口，有助于店铺获得更多订单。
                      </NText>
                    </>
                  );
                }
              }}
            </FormItem>
            <FormItem label='商品规格标签：'>
              {{
                default: () => {
                  return (
                    <NRadioGroup defaultValue={1}>
                      <NSpace>
                        <NRadio name='sku-tag' value={1}>展示热销标签</NRadio>
                        <NRadio name='sku-tag' value={0}>不展示热销标签</NRadio>
                      </NSpace>
                    </NRadioGroup>
                  );
                },
                help: () => {
                  return (
                    <>
                      <NText depth={3} tag='div'>
                        选中展示后在规格选择页中，销量最高的规格上会展示“热销”标签。
                      </NText>
                    </>
                  );
                }
              }}
            </FormItem>
          </NSpace>
        </NForm>
      </FormCard>
    );
  }
});
