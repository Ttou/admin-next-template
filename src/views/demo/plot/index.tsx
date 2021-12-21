import {
  AreaChart,
  AreaChartProps,
  BarChart,
  BarChartProps,
  ColumnChart,
  ColumnChartProps,
  LineChart,
  LineChartProps
} from '@opd/g2plot-vue'
import { Col, Row } from 'ant-design-vue'
import { defineComponent, onMounted, ref } from 'vue'

import * as css from './index.css'

export default defineComponent({
  name: 'DemoPlot',
  setup() {
    const lineConfig = ref({
      xField: 'Date',
      yField: 'scales'
    } as LineChartProps)
    const columnConfig = ref({
      xField: 'type',
      yField: 'sales'
    } as ColumnChartProps)
    const barConfig = ref({
      xField: 'value',
      yField: 'year',
      seriesField: 'year',
      legend: {
        position: 'top-left'
      }
    } as BarChartProps)
    const areaConfig = ref({
      xField: 'timePeriod',
      yField: 'value',
      xAxis: {
        range: [0, 1]
      }
    } as AreaChartProps)

    function initLine() {
      fetch(
        'https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json'
      )
        .then(res => res.json())
        .then(data => {
          lineConfig.value.data = data
        })
    }

    function initColumn() {
      fetch(
        'https://gw.alipayobjects.com/os/antfincdn/K0kfOzo4j%24/column.json'
      )
        .then(data => data.json())
        .then(data => {
          columnConfig.value.data = data
        })
    }

    function initBar() {
      barConfig.value.data = [
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
          areaConfig.value.data = data
        })
    }

    onMounted(() => {
      initLine()
      initColumn()
      initBar()
      initArea()
    })

    return {
      lineConfig,
      columnConfig,
      barConfig,
      areaConfig
    }
  },
  render() {
    return (
      <div class={css.view}>
        <Row gutter={20}>
          <Col span="1"></Col>
          <Col span="10">
            <h3>折线图</h3>
            {/* @ts-ignore */}
            <LineChart {...this.lineConfig} />
          </Col>
          <Col span="2"></Col>
          <Col span="10">
            <h3>柱状图</h3>
            <ColumnChart {...this.columnConfig} />
          </Col>
          <Col span="1"></Col>
        </Row>
        <Row gutter={20}>
          <Col span="1"></Col>
          <Col span="10">
            <h3>条形图</h3>
            <BarChart {...this.barConfig} />
          </Col>
          <Col span="2"></Col>
          <Col span="10">
            <h3>面积图</h3>
            <AreaChart {...this.areaConfig} />
          </Col>
          <Col span="1"></Col>
        </Row>
      </div>
    )
  }
})
