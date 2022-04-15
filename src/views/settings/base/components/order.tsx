import { FormItem } from '@/components/naive-ui/form';
import { NForm, NInputNumber, NRadio, NRadioGroup, NSpace, NText } from 'naive-ui';
import { defineComponent } from 'vue';
import FormCard from './card';
import FormSection from './section';

export default defineComponent({
  name: 'OrderForm',

  setup () {
    //
  },

  render () {
    return (
      <FormCard title="订单设置">
        <NForm labelWidth={225} labelPlacement='left' labelAlign='right'>
          <NSpace vertical size={[0, 16]}>
            <FormSection title='经营设置' description='设置你的网点经营模式；多网点请前往应用-配套工具-多网点进行设置' />
            <FormItem label='默认库存扣减方式：' hideHelp>
              <NRadioGroup defaultValue={1}>
                <NSpace vertical size={0}>
                  <FormItem hideFeedback>
                    {{
                      default: () => {
                        return (
                          <NRadio name='stock-reduce' value={1} checked>拍下减库存</NRadio>
                        );
                      },
                      help: () => {
                        return <NText depth={3}>发布商品时，库存扣减方式将默认选择拍下减库存，也可手动修改。</NText>;
                      }
                    }}
                  </FormItem>
                  <FormItem hideFeedback>
                    {{
                      default: () => {
                        return (
                          <NRadio name='stock-reduce' value={0}>付款减库存</NRadio>
                        );
                      },
                      help: () => {
                        return <NText depth={3}>发布商品时，库存扣减方式将默认选择付款减库存，也可手动修改。不支持付款减库存的商品不受影响。</NText>;
                      }
                    }}
                  </FormItem>
                </NSpace>
              </NRadioGroup>
            </FormItem>
            <FormItem label='付款减库存预占时间：'>
              {{
                default: () => {
                  return (
                    <>
                      <NText>拍下后</NText>
                      <NInputNumber style={{width: '80px'}} defaultValue={10} class='mx-2' />
                      <NText>分钟内未付款，库存自动释放，方便其他消费者下单。</NText>
                    </>
                  );
                },
                help: () => {
                  return <NText depth={3}>
                    注：当拍下的商品库存预占超时后，商品的库存会返还，但不影响订单状态。付款减库存预占时间范围为1-10分钟。
                  </NText>;
                }
              }}
            </FormItem>
            <FormItem label='超卖订单处理：' hideHelp>
              <NRadioGroup defaultValue={1}>
                <NSpace vertical size={0}>
                  <FormItem hideFeedback class=''>
                    {{
                      default: () => {
                        return (
                          <NRadio checked name='out-order' value={1}>人工处理</NRadio>
                        );
                      },
                      help: () => {
                        return <NText depth={3}>付款减库存模式下，出现超卖订单时，订单管理中会标记出此笔订单，可人工选择发货或主动退款关单。</NText>;
                      }
                    }}
                  </FormItem>
                  <FormItem hideFeedback>
                    {{
                      default: () => {
                        return (
                          <NRadio name='out-order' value={0}>系统自动退款</NRadio>
                        );
                      },
                      help: () => {
                        return <NText depth={3}>付款减库存模式下，出现超卖订单时，系统会自动关闭订单并为买家退款。</NText>;
                      }
                    }}
                  </FormItem>
                </NSpace>
              </NRadioGroup>
            </FormItem>
            <FormItem label='待付款订单取消时间：' hideHelp>
              <NText>拍下未付款订单</NText>
              <NInputNumber style={{width: '80px'}} defaultValue={60} class='mx-2' />
              <NText>分钟内未付款，自动取消订单</NText>
            </FormItem>
            <FormItem label='发货后自动确认收货时间：'>
              {{
                default: () => {
                  return (
                    <>
                      <NText>发货后</NText>
                      <NInputNumber style={{width: '80px'}} defaultValue={7} class='mx-2' />
                      <NText>天，自动确认收货</NText>
                    </>
                  );
                },
                help: () => {
                  return (
                    <>
                      <NText tag='div' depth={3}>
                        修改后将对新产生的订单立即生效，已产生的订单自动确认收货时间将在以发货时的设置为准。
                      </NText>
                      <NText depth={3}>
                        应快手平台要求，2019年11月21日17时起订单来源为快手的订单自动确认收货时间与商家配置无关。
                      </NText>
                    </>
                  );
                }
              }}
            </FormItem>
            <FormItem label='未付款订单改价维度：' hideHelp>
              <NRadioGroup defaultValue={1}>
                <NSpace>
                  <NRadio name='change-price' value={1}>在整单基础上改价</NRadio>
                  <NRadio name='change-price' value={0}>在单商品货款基础上改价</NRadio>
                </NSpace>
              </NRadioGroup>
            </FormItem>
            <FormItem label='单品多数量发货：'>
              {{
                default: () => {
                  return (
                    <NRadioGroup defaultValue={0}>
                      <NSpace>
                        <NRadio name='single-express' value={1}>在整单基础上改价</NRadio>
                        <NRadio name='single-express' value={0}>在单商品货款基础上改价</NRadio>
                      </NSpace>
                    </NRadioGroup>
                  );
                },
                help: () => {
                  return <NText depth={3}>单品按数量拆分多包裹发货，支持填写多个运单号。</NText>;
                }
              }}
            </FormItem>
            <FormItem label='收货人姓名校验：'>
              {{
                default: () => {
                  return (
                    <NRadioGroup defaultValue={0}>
                      <NSpace>
                        <NRadio name='buyer-validate' value={1}>开启</NRadio>
                        <NRadio name='buyer-validate' value={0}>关闭</NRadio>
                      </NSpace>
                    </NRadioGroup>
                  );
                },
                help: () => {
                  return (
                    <>
                      <NText depth={3} tag='div'>应国家邮政总局的要求，个人快递包裹必须收货人实名制。</NText>
                      <NText depth={3}>开启配置后收货人姓名含小姐，女士，先生，男士”等模糊字段的都无法下单。</NText>
                    </>
                  );
                }
              }}
            </FormItem>
            <FormItem label='买家自助修改收货地址：'>
              {{
                default: () => {
                  return (
                    <NRadioGroup defaultValue={0}>
                      <NSpace>
                        <NRadio name='buyer-update-address' value={1}>开启</NRadio>
                        <NRadio name='buyer-update-address' value={0}>关闭</NRadio>
                      </NSpace>
                    </NRadioGroup>
                  );
                },
                help: () => {
                  return (
                    <>
                      <NText depth={3} tag='div'>只有订单为非分销类型的普通订单、物流配送方式为快递配送、且订单未发货时允许买家修改1次收货地址。</NText>
                      <NText depth={3}>新收货地址超出运费模板配送范围或运费发生变化，不允许修改。</NText>
                    </>
                  );
                }
              }}
            </FormItem>
            <FormItem label='自动同意退货申请：' hideHelp>
              <NRadioGroup defaultValue={0}>
                <NSpace>
                  <NRadio name='auto-refund' value={1}>开启</NRadio>
                  <NRadio name='auto-refund' value={0}>关闭</NRadio>
                </NSpace>
              </NRadioGroup>
            </FormItem>
            <FormItem label='买家退货后商家自动确认收货时间：' hideHelp>
              <NText>买家发货后</NText>
              <NInputNumber class='mx-2' defaultValue={7} />
              <NText>天，自动确认收货</NText>
            </FormItem>
            <FormItem label='买家开发票设置：'>
              {{
                default: () => {
                  return (
                    <NRadioGroup defaultValue={0}>
                      <NSpace>
                        <NRadio name='invoice' value={1}>开启</NRadio>
                        <NRadio name='invoice' value={0}>关闭</NRadio>
                      </NSpace>
                    </NRadioGroup>
                  );
                },
                help: () => {
                  return (
                    <>
                      <NText depth={3}>关闭后，买家在提交订单页/订单详情页，无法填写发票信息，只能通过客服/电话联系商家处理。</NText>
                    </>
                  );
                }
              }}
            </FormItem>
            <FormItem label='下单模式：'>
              {{
                default: () => {
                  return (
                    <NRadioGroup defaultValue={'normal'}>
                      <NSpace>
                        <NRadio name='invoice' value={'normal'}>普通下单</NRadio>
                        <NRadio name='invoice' value={'detail'}>商详页极速下单</NRadio>
                        <NRadio name='invoice' value={'strep'}>分步极速下单</NRadio>
                      </NSpace>
                    </NRadioGroup>
                  );
                },
                help: () => {
                  return (
                    <>
                      <NText depth={3} tag='div'>商详页极速下单与分步极速下单不支持营销活动，不支持仅粉丝可以购买，且仅对实物商品生效。</NText>
                      <NText depth={3}>开通极速下单前，请确认支付方式已开启微信支付和支付宝支付。</NText>
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
