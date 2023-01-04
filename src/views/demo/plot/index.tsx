import {
  type AreaChartProps,
  type BarChartProps,
  type ColumnChartProps,
  type LineChartProps,
  AreaChart,
  BarChart,
  ColumnChart,
  LineChart
} from '@opd/g2plot-vue'
import { ElCol, ElRow } from 'element-plus'
import { defineComponent, onMounted, reactive, toRefs } from 'vue'

import styles from './index.module.css'

export default defineComponent({
  name: 'DemoPlot',
  setup() {
    const state = reactive({
      lineConfig: {
        xField: 'Date',
        yField: 'scales',
        data: []
      } as LineChartProps,
      columnConfig: {
        xField: 'type',
        yField: 'sales',
        data: []
      } as ColumnChartProps,
      barConfig: {
        xField: 'value',
        yField: 'year',
        seriesField: 'year',
        legend: {
          position: 'top-left'
        },
        data: []
      } as BarChartProps,
      areaConfig: {
        xField: 'timePeriod',
        yField: 'value',
        xAxis: {
          range: [0, 1]
        },
        data: []
      } as AreaChartProps
    })

    function initLine() {
      fetch(
        'https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json'
      )
        .then(res => res.json())
        .then(data => {
          state.lineConfig.data = data
        })
    }

    function initColumn() {
      fetch(
        'https://gw.alipayobjects.com/os/antfincdn/K0kfOzo4j%24/column.json'
      )
        .then(data => data.json())
        .then(data => {
          state.columnConfig.data = data
        })
    }

    function initBar() {
      state.barConfig.data = [
        { year: '1951 年', value: 38 },
        { year: '1952 年', value: 52 },
        { year: '1956 年', value: 61 },
        { year: '1957 年', value: 145 },
        { year: '1958 年', value: 48 }
      ]
    }

    function initArea() {
      fetch(
        'https://gw.alipayobjects.com/os/bmw-prod/360c3eae-0c73-46f0-a982-4746a6095010.json'
      )
        .then(res => res.json())
        .then(data => {
          state.areaConfig.data = data
        })
    }

    onMounted(() => {
      initLine()
      initColumn()
      initBar()
      initArea()
    })

    return {
      ...toRefs(state)
    }
  },
  render() {
    return (
      <div class={styles.view}>
        <ElRow gutter={20}>
          <ElCol span={1}></ElCol>
          <ElCol span={10}>
            <h3>折线图</h3>
            {/* @ts-ignore */}
            <LineChart {...this.lineConfig} />
          </ElCol>
          <ElCol span={2}></ElCol>
          <ElCol span={10}>
            <h3>柱状图</h3>
            {/* @ts-ignore */}
            <ColumnChart {...this.columnConfig} />
          </ElCol>
          <ElCol span={1}></ElCol>
        </ElRow>
        <ElRow gutter={20}>
          <ElCol span={1}></ElCol>
          <ElCol span={10}>
            <h3>条形图</h3>
            {/* @ts-ignore */}
            <BarChart {...this.barConfig} />
          </ElCol>
          <ElCol span={2}></ElCol>
          <ElCol span={10}>
            <h3>面积图</h3>
            {/* @ts-ignore */}
            <AreaChart {...this.areaConfig} />
          </ElCol>
          <ElCol span={1}></ElCol>
        </ElRow>
      </div>
    )
  }
})
