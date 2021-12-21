import { Card, Col, Row } from 'ant-design-vue'
import { defineComponent, ref } from 'vue'

import { QrCode } from '@/components'
import type { QrCodeProps } from '@/components/QrCode/types'

import logo from './images/logo.svg'

export default defineComponent({
  name: 'DemoQRCode',
  setup() {
    const qr1Config = ref({
      text: 'http://www.baidu.com'
    } as QrCodeProps)

    const qr2Config = ref({
      text: 'http://www.baidu.com',
      options: {
        color: { dark: '#43d08c' }
      }
    } as QrCodeProps)

    const qr3Config = ref({
      text: 'http://www.baidu.com',
      logo
    } as QrCodeProps)

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
              <QrCode {...this.qr1Config} />
            </Card>
          </Col>
          <Col span={8}>
            <Card title="配置样式">
              <QrCode {...this.qr2Config} />
            </Card>
          </Col>
          <Col span={8}>
            <Card title="集成图标">
              <QrCode {...this.qr3Config} />
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
})
