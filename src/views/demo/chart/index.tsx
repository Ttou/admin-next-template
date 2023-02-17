import { BarChart, LineChart, PieChart, ScatterChart } from 'echarts/charts'
import {
  GridComponent,
  LegendComponent,
  TitleComponent,
  TooltipComponent
} from 'echarts/components'
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { ElCol, ElRow } from 'element-plus'
import { defineComponent, reactive, toRefs } from 'vue'
import VChart from 'vue-echarts'

import styles from './index.module.css'

use([
  CanvasRenderer,
  LineChart,
  BarChart,
  PieChart,
  ScatterChart,
  LegendComponent,
  TitleComponent,
  TooltipComponent,
  GridComponent
])

export default defineComponent({
  setup() {
    const state = reactive({
      lineConfig: {
        option: {
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              data: [150, 230, 224, 218, 135, 147, 260],
              type: 'line'
            }
          ]
        }
      } as ChartProps,
      barConfig: {
        option: {
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              data: [120, 200, 150, 80, 70, 110, 130],
              type: 'bar',
              showBackground: true,
              backgroundStyle: {
                color: 'rgba(180, 180, 180, 0.2)'
              }
            }
          ]
        }
      } as ChartProps,
      scatterConfig: {
        option: {
          xAxis: {},
          yAxis: {},
          series: [
            {
              symbolSize: 20,
              data: [
                [10.0, 8.04],
                [8.07, 6.95],
                [13.0, 7.58],
                [9.05, 8.81],
                [11.0, 8.33],
                [14.0, 7.66],
                [13.4, 6.81],
                [10.0, 6.33],
                [14.0, 8.96],
                [12.5, 6.82],
                [9.15, 7.2],
                [11.5, 7.2],
                [3.03, 4.23],
                [12.2, 7.83],
                [2.02, 4.47],
                [1.05, 3.33],
                [4.05, 4.96],
                [6.03, 7.24],
                [12.0, 6.26],
                [12.0, 8.84],
                [7.08, 5.82],
                [5.02, 5.68]
              ],
              type: 'scatter'
            }
          ]
        }
      } as ChartProps,
      pieConfig: {
        option: {
          title: {
            text: 'Referer of a Website',
            subtext: 'Fake Data',
            left: 'center'
          },
          tooltip: {
            trigger: 'item'
          },
          legend: {
            orient: 'vertical',
            left: 'left'
          },
          series: [
            {
              name: 'Access From',
              type: 'pie',
              radius: '50%',
              data: [
                { value: 1048, name: 'Search Engine' },
                { value: 735, name: 'Direct' },
                { value: 580, name: 'Email' },
                { value: 484, name: 'Union Ads' },
                { value: 300, name: 'Video Ads' }
              ],
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        }
      } as ChartProps
    })

    return {
      ...toRefs(state)
    }
  },
  render() {
    return (
      <div>
        <ElRow gutter={20}>
          <ElCol span={1}></ElCol>
          <ElCol span={10}>
            <h3>折线图</h3>
            <VChart class={styles.chart} {...this.lineConfig} />
          </ElCol>
          <ElCol span={2}></ElCol>
          <ElCol span={10}>
            <h3>柱状图</h3>
            <VChart class={styles.chart} {...this.barConfig} />
          </ElCol>
          <ElCol span={1}></ElCol>
        </ElRow>
        <ElRow gutter={20}>
          <ElCol span={1}></ElCol>
          <ElCol span={10}>
            <h3>散点图</h3>
            <VChart class={styles.chart} {...this.scatterConfig} />
          </ElCol>
          <ElCol span={2}></ElCol>
          <ElCol span={10}>
            <h3>面积图</h3>
            <VChart class={styles.chart} {...this.pieConfig} />
          </ElCol>
          <ElCol span={1}></ElCol>
        </ElRow>
      </div>
    )
  }
})
