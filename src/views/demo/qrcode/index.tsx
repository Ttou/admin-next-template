import { ElCard, ElCol, ElRow } from 'element-plus'
import { defineComponent, reactive, toRefs } from 'vue'

import { ProQr, type ProQrProps } from '@/components'
import { getImgFile } from '@/utils'

export default defineComponent({
  setup() {
    const state = reactive({
      qr1Config: {
        text: 'http://www.baidu.com'
      } as ProQrProps,
      qr2Config: {
        text: 'http://www.baidu.com',
        options: {
          color: { dark: '#43d08c' }
        }
      } as ProQrProps,
      qr3Config: {
        text: 'http://www.baidu.com',
        logo: getImgFile('logo.svg')
      } as ProQrProps
    })

    return {
      ...toRefs(state)
    }
  },
  render() {
    return (
      <div>
        <ElRow gutter={15}>
          <ElCol span={8}>
            <ElCard
              v-slots={{
                ['header']: () => <span>基础示例</span>,
                ['default']: () => <ProQr {...this.qr1Config} />
              }}
            />
          </ElCol>
          <ElCol span={8}>
            <ElCard
              v-slots={{
                ['header']: () => <span>配置样式</span>,
                ['default']: () => <ProQr {...this.qr2Config} />
              }}
            />
          </ElCol>
          <ElCol span={8}>
            <ElCard
              v-slots={{
                ['header']: () => <span>集成图标</span>,
                ['default']: () => <ProQr {...this.qr3Config} />
              }}
            />
          </ElCol>
        </ElRow>
      </div>
    )
  }
})
