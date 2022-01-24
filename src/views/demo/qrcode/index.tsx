import { Card, Col, Row } from 'ant-design-vue'
import { defineComponent, ref } from 'vue'

import { ProQr } from '@/components'
import type { ProQrProps } from '@/components/ProQr/types'

import logo from './images/logo.svg'

export default defineComponent({
  name: 'DemoQRCode',
  setup() {
    const qr1Config = ref({
      text: 'http://www.baidu.com'
    } as ProQrProps)

    const qr2Config = ref({
      text: 'http://www.baidu.com',
      options: {
        color: { dark: '#43d08c' }
      }
    } as ProQrProps)

    const qr3Config = ref({
      text: 'http://www.baidu.com',
      logo
    } as ProQrProps)

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
              <ProQr {...this.qr1Config} />
            </Card>
          </Col>
          <Col span={8}>
            <Card title="配置样式">
              <ProQr {...this.qr2Config} />
            </Card>
          </Col>
          <Col span={8}>
            <Card title="集成图标">
              <ProQr {...this.qr3Config} />
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
})
