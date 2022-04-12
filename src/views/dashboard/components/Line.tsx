import { ApexOptions } from 'apexcharts';
import { NCard } from 'naive-ui';
import { defineComponent, h, reactive } from 'vue';
import VueApexCharts from 'vue3-apexcharts';
import { dataSeries } from './dataSeries';

export default defineComponent({
  name: 'LineChart',

  setup () {
    let ts2 = 1484418600000;
    const dates = [];
    for (let i = 0; i < 120; i++) {
      ts2 = ts2 + 86400000;
      const innerArr = [ts2, dataSeries[1][i].value];
      dates.push(innerArr);
    }

    const data = reactive<{
      series: any,
      chartOptions: ApexOptions
    }>({
      series: [{
        name: 'Session Duration',
        data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
      }, {
        name: 'Page Views',
        data: [36, 42, 60, 42, 13, 18, 29, 37, 36, 51, 32, 35]
      }, {
        name: 'Total Visits',
        data: [89, 56, 74, 98, 72, 38, 64, 46, 84, 58, 46, 49]
      }],
      chartOptions: {
        chart: {
          type: 'line',
          zoom: {
              enabled: !1
          },
          toolbar: {
              show: !1
          }
        },
        colors: ['#5156be', '#2ab57d'],
        dataLabels: {
          enabled: !1
        },
        stroke: {
          width: [3, 4, 3],
          curve: 'straight',
          dashArray: [0, 8, 5]
        },

        title: {
          text: '访客',
          align: 'left',
          style: {
            fontWeight: '500'
          }
        },
        markers: {
          size: 0,
          hover: {
            sizeOffset: 6
          }
        },
        xaxis: {
          categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan', '10 Jan', '11 Jan', '12 Jan']
        },
        tooltip: {
          y: [{
              title: {
                  formatter: function (e) {
                      return e + ' (mins)';
                  }
              }
          }, {
              title: {
                  formatter: function (e) {
                      return e + ' per session';
                  }
              }
          }, {
              title: {
                  formatter: function (e) {
                      return e;
                  }
              }
          }]
        },
        grid: {
          borderColor: '#f1f1f1'
        },
        responsive: [
          {
            breakpoint: 1760,
            options: {
              chart: {
                height: 338
              }
            }
          },
          {
            breakpoint: 1620,
            options: {
              chart: {
                height: 301
              }
            }
          }
        ]
      },
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
        {
          h(VueApexCharts, {
            height: 387,
            options: data.chartOptions,
            series: data.series,
          })
        }
      </NCard>
    );
  }
});
