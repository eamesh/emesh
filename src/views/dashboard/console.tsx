import { SpaceView } from '@/components/space-view';
import { NGi, NGrid, NNumberAnimation, NSpace, NStatistic } from 'naive-ui';
import { defineComponent } from 'vue';
import PieChart from './components/Pie';
import Linehart from './components/Line';


export default defineComponent({
  name: 'Console',

  render () {
    return (
      <div class='flex justify-center' style={{
        width: '100%'
      }}>
        <SpaceView style={{
          width: '85%'
        }}>
          <NSpace vertical size={[0, 30]}>
            <NGrid xGap={12} cols={4} class='mt-5'>
              <NGi>
                <NStatistic label="待发货订单" class='text-center'>
                  <NNumberAnimation from={0} to={100} />
                </NStatistic>
              </NGi>
              <NGi>
                <NStatistic label="待处理退款订单" class='text-center'>
                  <NNumberAnimation from={0} to={200} />
                </NStatistic>
              </NGi>
              <NGi>
                <NStatistic label="配送提醒" class='text-center'>
                  <NNumberAnimation from={0} to={210} />

                </NStatistic>
              </NGi>
              <NGi>
                <NStatistic label="售后订单" class='text-center'>
                  <NNumberAnimation from={0} to={10} />

                </NStatistic>
              </NGi>
            </NGrid>

            <NGrid xGap={12} cols={24}>
              <NGi span={12}>
                <NGrid xGap={12} yGap={12} cols={24}>
                  <NGi span={12}>
                    <PieChart />
                  </NGi>
                  <NGi span={12}>
                    <PieChart />
                  </NGi>
                  <NGi span={12}>
                    <PieChart />
                  </NGi>
                  <NGi span={12}>
                    <PieChart />
                  </NGi>
                </NGrid>
              </NGi>
              <NGi span={12}>
                <Linehart />
              </NGi>
            </NGrid>
          </NSpace>
        </SpaceView>
      </div>
    );
  }
});
