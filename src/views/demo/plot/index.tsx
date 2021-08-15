import { Col, Row } from 'ant-design-vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DemoPlot',
  setup() {},
  render() {
    return (
      <div class="demo-plot-view">
        <Row>
          <Col span="12"></Col>
          <Col span="12"></Col>
        </Row>
        <Row>
          <Col span="12"></Col>
          <Col span="12"></Col>
        </Row>
      </div>
    )
  }
})
