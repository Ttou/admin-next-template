import { Card, Col, Row, Tag } from 'ant-design-vue'
import { defineComponent } from 'vue'

import * as css from './index.css'

export default defineComponent({
  name: 'Analysis',
  render() {
    return (
      <div class={css.view}>
        <Row gutter={10}>
          <Col span={6}>
            <Card
              title="访问数"
              size="small"
              v-slots={{
                extra: () => <Tag color="blue">月</Tag>,
                default: () => (
                  <div>
                    <div>2000</div>
                  </div>
                )
              }}
            />
          </Col>
          <Col span={6}>
            <Card
              title="成交额"
              size="small"
              v-slots={{
                extra: () => <Tag color="green">月</Tag>
              }}
            />
          </Col>
          <Col span={6}>
            <Card
              title="下载数"
              size="small"
              v-slots={{
                extra: () => <Tag color="blue">周</Tag>
              }}
            />
          </Col>
          <Col span={6}>
            <Card
              title="成交数"
              size="small"
              v-slots={{
                extra: () => <Tag color="green">年</Tag>
              }}
            />
          </Col>
        </Row>
      </div>
    )
  }
})
