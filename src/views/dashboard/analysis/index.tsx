import { Card, Col, Row, Skeleton, Tag } from 'ant-design-vue'
import { defineComponent, onMounted, ref } from 'vue'

import { CountTo, SvgIcon } from '@/components'

import * as css from './index.css'

export default defineComponent({
  name: 'AnalysisView',
  setup() {
    const loading = ref(false)

    function init() {
      loading.value = true

      setTimeout(() => {
        loading.value = false
      }, 1500)
    }

    onMounted(() => {
      init()
    })

    return {
      loading
    }
  },
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
                  <Skeleton loading={this.loading} active>
                    <div class={css.cardContent}>
                      <CountTo class={css.text} prefix="¥" endVal={2000} />
                      <SvgIcon class={css.icon} name="view-visit-count" />
                    </div>
                  </Skeleton>
                )
              }}
            />
          </Col>
          <Col span={6}>
            <Card
              title="成交额"
              size="small"
              v-slots={{
                extra: () => <Tag color="green">月</Tag>,
                default: () => (
                  <Skeleton loading={this.loading} active>
                    <div class={css.cardContent}>
                      <CountTo class={css.text} prefix="¥" endVal={2000} />
                      <SvgIcon class={css.icon} name="view-total-sales" />
                    </div>
                  </Skeleton>
                )
              }}
            />
          </Col>
          <Col span={6}>
            <Card
              title="下载数"
              size="small"
              v-slots={{
                extra: () => <Tag color="blue">周</Tag>,
                default: () => (
                  <Skeleton loading={this.loading} active>
                    <div class={css.cardContent}>
                      <CountTo class={css.text} endVal={2000} />
                      <SvgIcon class={css.icon} name="view-download-count" />
                    </div>
                  </Skeleton>
                )
              }}
            />
          </Col>
          <Col span={6}>
            <Card
              title="成交数"
              size="small"
              v-slots={{
                extra: () => <Tag color="green">年</Tag>,
                default: () => (
                  <Skeleton loading={this.loading} active>
                    <div class={css.cardContent}>
                      <CountTo class={css.text} endVal={2000} />
                      <SvgIcon class={css.icon} name="view-transaction" />
                    </div>
                  </Skeleton>
                )
              }}
            />
          </Col>
        </Row>
      </div>
    )
  }
})
