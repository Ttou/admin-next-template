import { Card, Col, Row } from 'ant-design-vue'
import { defineComponent, ref } from 'vue'

import { QRCode } from '@/components'
import type { QRCodeProps } from '@/components/QRCode/types'

import logo from './images/logo.svg'

export default defineComponent({
  name: 'DemoQRCode',
  setup() {
    const qr1Config = ref<QRCodeProps>({
      text: 'http://www.baidu.com'
    })

    const qr2Config = ref<QRCodeProps>({
      text: 'http://www.baidu.com',
      options: {
        color: { dark: '#43d08c' }
      }
    })

    const qr3Config = ref<QRCodeProps>({
      text: 'http://www.baidu.com',
      logo
    })

    return {
      qr1Config,
      qr2Config,
      qr3Config
    }
  },
  render() {
    return (
      <div>
        <Row gutter={15}>
          <Col span={8}>
            <Card title="基础示例">
              <QRCode {...this.qr1Config} />
            </Card>
          </Col>
          <Col span={8}>
            <Card title="配置样式">
              <QRCode {...this.qr2Config} />
            </Card>
          </Col>
          <Col span={8}>
            <Card title="集成图标">
              <QRCode {...this.qr3Config} />
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
})
