import { Card, Col, Row, Skeleton, Tag } from 'ant-design-vue'
import { defineComponent, onMounted, ref } from 'vue'

import { CountTo, SvgIcon } from '@/components'

import styles from './index.module.css'

export default defineComponent({
  name: 'AnalysisView',
  setup() {
    const loading = ref(false)
    const list = ref([
      {
        title: '访问数',
        subText: '月',
        subColor: 'blue',
        valPrefix: '￥',
        valNum: 2000,
        icon: 'view-visit-count'
      },
      {
        title: '成交额',
        subText: '月',
        subColor: 'green',
        valPrefix: '￥',
        valNum: 2000,
        icon: 'view-total-sales'
      },
      {
        title: '下载数',
        subText: '周',
        subColor: 'blue',
        valPrefix: '',
        valNum: 2000,
        icon: 'view-download-count'
      },
      {
        title: '成交数',
        subText: '年',
        subColor: 'green',
        valPrefix: '',
        valNum: 2000,
        icon: 'view-transaction'
      }
    ])

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
      loading,
      list
    }
  },
  render() {
    const renderItem = (item: typeof this.list[0]) => (
      <Col span={6}>
        <Card
          v-slots={{
            extra: () => <Tag color={item.subColor}>{item.subText}</Tag>,
            default: () => (
              <Skeleton loading={this.loading} active>
                <div class={styles.cardContent}>
                  <CountTo
                    class={styles.text}
                    prefix={item.valPrefix}
                    endVal={item.valNum}
                  />
                  <SvgIcon class={styles.icon} name={item.icon} />
                </div>
              </Skeleton>
            )
          }}
          title={item.title}
          size="small"
        />
      </Col>
    )

    return (
      <div class={styles.view}>
        <Row gutter={10}>{this.list.map(renderItem)}</Row>
      </div>
    )
  }
})
