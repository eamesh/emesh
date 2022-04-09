import { ApexOptions } from 'apexcharts';
import { NCard, NNumberAnimation, NSpace, NStatistic } from 'naive-ui';
import { defineComponent, h, reactive } from 'vue';
import VueApexCharts from 'vue3-apexcharts';

export default defineComponent({
  name: 'PieChart',

  setup () {
    const data = reactive<{
      series: any,
      chartOptions: ApexOptions
    }>({
      series: [100, 250],

      chartOptions: {
        chart: {
          width: 227,
          height: 227,
          type: 'pie'
        },
        labels: ['Ethereum', 'Bitcoin'],
        colors: ['#777aca', '#5156be'],
        stroke: {
            width: 0
        },
        legend: {
            show: !1
        },
        dataLabels: {
          formatter (val: number, opts) {
            console.log(opts);
            return val.toFixed(0);
          }
        },
        responsive: [
          {
            breakpoint: 1760,
            options: {
              chart: {
                width: 200
              }
            }
          },
          {
            breakpoint: 1620,
            options: {
              chart: {
                width: 150
              }
            }
          }
        ]
      }
    });

    return {
      data
    };
  },

  render () {
    const {
      data
    } = this;
    return (
      <NCard>
        <NSpace align='center' justify='space-between'>
          {
            h(VueApexCharts, {
              width: 230,
              type: 'pie',
              options: data.chartOptions,
              series: data.series
            })
          }
          <NSpace vertical>
            <NStatistic label="未付款订单" class='text-center'>
              <NNumberAnimation from={0} to={10} />
            </NStatistic>
            <NStatistic label="已付款订单" class='text-center'>
              <NNumberAnimation from={0} to={10} />
            </NStatistic>
          </NSpace>
        </NSpace>
      </NCard>
    );
  }
});
