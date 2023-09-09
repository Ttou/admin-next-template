<template>
  <div class="view">
    <el-row :gutter="10">
      <el-col v-for="(item, index) in list" :key="index" :span="6">
        <el-card shadow="never" class="card">
          <template #header>
            <div class="cardHeader">
              <span>{{ item.title }}</span>
              <el-tag :color="item.subColor" effect="light">
                {{ item.subText }}
              </el-tag>
            </div>
          </template>
          <el-skeleton :loading="loading" :rows="2" animated>
            <div class="cardContent">
              <CountTo
                class="text"
                :prefix="item.valPrefix"
                :endVal="item.valNum"
              />
              <Icon class="icon" :icon="`@local:custom:${item.icon}`" />
            </div>
          </el-skeleton>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Icon } from '@iconify/vue'
import { defineComponent, onMounted, reactive, toRefs } from 'vue'

import { CountTo } from '@/components'

export default defineComponent({
  name: 'AnalysisView',
  components: {
    CountTo,
    Icon
  },
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
  }
})
</script>

<style lang="scss" scoped>
.view {
  .card {
    .cardHeader {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .cardContent {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100px;
    }
  }

  .text {
    font-size: 24px;
  }

  .icon {
    width: 40px;
    height: 40px;
  }
}
</style>
