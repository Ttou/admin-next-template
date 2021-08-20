import './index.less'

import {
  Area,
  AreaOptions,
  Bar,
  BarOptions,
  Column,
  ColumnOptions,
  Line,
  LineOptions
} from '@antv/g2plot'
import { Col, Row } from 'ant-design-vue'
import { defineComponent, onMounted, ref } from 'vue'

import { ProPlot } from '@/components'

export default defineComponent({
  name: 'DemoPlot',
  setup() {
    const lineData = ref([])
    const lineConfig = ref({
      xField: 'Date',
      yField: 'scales'
    } as LineOptions)
    const columnData = ref([])
    const columnConfig = ref({
      xField: 'type',
      yField: 'sales'
    } as ColumnOptions)
    const barData = ref([] as any[])
    const barConfig = ref({
      xField: 'value',
      yField: 'year',
      seriesField: 'year',
      legend: {
        position: 'top-left'
      }
    } as BarOptions)
    const areaData = ref([])
    const areaConfig = ref({
      xField: 'timePeriod',
      yField: 'value',
      xAxis: {
        range: [0, 1]
      }
    } as AreaOptions)

    function initLine() {
      fetch(
        'https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json'
      )
        .then(res => res.json())
        .then(data => {
          lineData.value = data
        })
    }

    function initColumn() {
      fetch(
        'https://gw.alipayobjects.com/os/antfincdn/K0kfOzo4j%24/column.json'
      )
        .then(data => data.json())
        .then(data => {
          columnData.value = data
        })
    }

    function initBar() {
      barData.value = [
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
          areaData.value = data
        })
    }

    onMounted(() => {
      initLine()
      initColumn()
      initBar()
      initArea()
    })

    return {
      lineData,
      lineConfig,
      columnData,
      columnConfig,
      barData,
      barConfig,
      areaData,
      areaConfig
    }
  },
  render() {
    return (
      <div class="demo-plot-view">
        <Row gutter={20}>
          <Col span="1"></Col>
          <Col span="10">
            <h3>折线图</h3>
            <ProPlot
              plot={Line}
              config={this.lineConfig}
              data={this.lineData}
            />
          </Col>
          <Col span="2"></Col>
          <Col span="10">
            <h3>柱状图</h3>
            <ProPlot
              plot={Column}
              config={this.columnConfig}
              data={this.columnData}
            />
          </Col>
          <Col span="1"></Col>
        </Row>
        <Row gutter={20}>
          <Col span="1"></Col>
          <Col span="10">
            <h3>条形图</h3>
            <ProPlot plot={Bar} config={this.barConfig} data={this.barData} />
          </Col>
          <Col span="2"></Col>
          <Col span="10">
            <h3>面积图</h3>
            <ProPlot
              plot={Area}
              config={this.areaConfig}
              data={this.areaData}
            />
          </Col>
          <Col span="1"></Col>
        </Row>
      </div>
    )
  }
})
