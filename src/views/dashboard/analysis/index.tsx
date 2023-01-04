import { Icon } from '@iconify/vue'
import { ElCard, ElCol, ElRow, ElSkeleton, ElTag } from 'element-plus'
import { defineComponent, onMounted, reactive, toRefs } from 'vue'

import { CountTo } from '@/components'

import styles from './index.module.css'

export default defineComponent({
  name: 'AnalysisView',
  setup() {
    const state = reactive({
      loading: false,
      list: [
        {
          title: '访问数',
          subText: '月',
          subColor: '#e6f7ff',
          valPrefix: '￥',
          valNum: 2000,
          icon: 'view-visit-count'
        },
        {
          title: '成交额',
          subText: '月',
          subColor: '#f6ffed',
          valPrefix: '￥',
          valNum: 2000,
          icon: 'view-total-sales'
        },
        {
          title: '下载数',
          subText: '周',
          subColor: '#e6f7ff',
          valPrefix: '',
          valNum: 2000,
          icon: 'view-download-count'
        },
        {
          title: '成交数',
          subText: '年',
          subColor: '#f6ffed',
          valPrefix: '',
          valNum: 2000,
          icon: 'view-transaction'
        }
      ]
    })

    function init() {
      state.loading = true

      setTimeout(() => {
        state.loading = false
      }, 1500)
    }

    onMounted(() => {
      init()
    })

    return {
      ...toRefs(state)
    }
  },
  render() {
    const renderItem = (item: typeof this.list[0]) => (
      <ElCol span={6}>
        <ElCard
          v-slots={{
            ['header']: () => (
              <div class={styles.cardHeader}>
                <span>{item.title}</span>
                <ElTag color={item.subColor} effect={'light'}>
                  {item.subText}
                </ElTag>
              </div>
            ),
            ['default']: () => (
              <ElSkeleton loading={this.loading} rows={2} animated>
                <div class={styles.cardContent}>
                  <CountTo
                    class={styles.text}
                    prefix={item.valPrefix}
                    endVal={item.valNum}
                  />
                  <Icon class={styles.icon} icon={`custom:${item.icon}`} />
                </div>
              </ElSkeleton>
            )
          }}
        />
      </ElCol>
    )

    return (
      <div class={styles.view}>
        <ElRow gutter={10}>{this.list.map(renderItem)}</ElRow>
      </div>
    )
  }
})
