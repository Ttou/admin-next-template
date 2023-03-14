<template>
  <div>
    <el-row :gutter="15">
      <el-col :span="8">
        <el-card>
          <template #header>
            <span>基础示例</span>
          </template>
          <ProQr v-bind="qr1Config" />
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card>
          <template #header>
            <span>配置样式</span>
          </template>
          <ProQr v-bind="qr2Config" />
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card>
          <template #header>
            <span>集成图标</span>
          </template>
          <ProQr v-bind="qr3Config" />
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

import imgLogo from '@/assets/images/logo.svg'
import { ProQr, type ProQrProps } from '@/components'

export default defineComponent({
  components: {
    ProQr
  },
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
        logo: imgLogo
      } as ProQrProps
    })

    return {
      ...toRefs(state)
    }
  }
})
</script>
