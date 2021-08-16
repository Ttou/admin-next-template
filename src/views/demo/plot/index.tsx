import './index.less'

import { Area, Bar, Column, Line } from '@antv/g2plot'
import { Col, Row } from 'ant-design-vue'
import { defineComponent, onMounted, ref } from 'vue'

export default defineComponent({
  name: 'DemoPlot',
  setup() {
    const lineEl = ref<ElementRef>(null)
    const columnEl = ref<ElementRef>(null)
    const barEl = ref<ElementRef>(null)
    const areaEl = ref<ElementRef>(null)

    function initLine() {
      fetch(
        'https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json'
      )
        .then(res => res.json())
        .then(data => {
          const linePlot = new Line(lineEl.value!, {
            data,
            xField: 'Date',
            yField: 'scales'
          })

          linePlot.render()
        })
    }

    function initColumn() {
      fetch(
        'https://gw.alipayobjects.com/os/antfincdn/K0kfOzo4j%24/column.json'
      )
        .then(data => data.json())
        .then(data => {
          const columnPlot = new Column(columnEl.value!, {
            data,
            xField: 'type',
            yField: 'sales'
          })

          columnPlot.render()
        })
    }

    function initBar() {
      const data = [
        { year: '1951 年', value: 38 },
        { year: '1952 年', value: 52 },
        { year: '1956 年', value: 61 },
        { year: '1957 年', value: 145 },
        { year: '1958 年', value: 48 }
      ]

      const barPlot = new Bar(barEl.value!, {
        data,
        xField: 'value',
        yField: 'year',
        seriesField: 'year',
        legend: {
          position: 'top-left'
        }
      })

      barPlot.render()
    }

    function initArea() {
      fetch(
        'https://gw.alipayobjects.com/os/bmw-prod/360c3eae-0c73-46f0-a982-4746a6095010.json'
      )
        .then(res => res.json())
        .then(data => {
          const areaPlot = new Area(areaEl.value!, {
            data,
            xField: 'timePeriod',
            yField: 'value',
            xAxis: {
              range: [0, 1]
            }
          })

          areaPlot.render()
        })
    }

    onMounted(() => {
      initLine()
      initColumn()
      initBar()
      initArea()
    })

    return {
      lineEl,
      columnEl,
      barEl,
      areaEl
    }
  },
  render() {
    return (
      <div class="demo-plot-view">
        <Row gutter={20}>
          <Col span="1"></Col>
          <Col span="10">
            <h3>折线图</h3>
            <div ref="lineEl"></div>
          </Col>
          <Col span="2"></Col>
          <Col span="10">
            <h3>柱状图</h3>
            <div ref="columnEl"></div>
          </Col>
          <Col span="1"></Col>
        </Row>
        <Row gutter={20}>
          <Col span="1"></Col>
          <Col span="10">
            <h3>条形图</h3>
            <div ref="barEl"></div>
          </Col>
          <Col span="2"></Col>
          <Col span="10">
            <h3>面积图</h3>
            <div ref="areaEl"></div>
          </Col>
          <Col span="1"></Col>
        </Row>
      </div>
    )
  }
})
