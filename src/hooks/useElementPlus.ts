import 'element-plus/theme-chalk/el-loading.css'
import 'element-plus/theme-chalk/el-message.css'
import 'element-plus/theme-chalk/el-message-box.css'
import 'element-plus/theme-chalk/el-notification.css'
import 'element-plus/theme-chalk/el-overlay.css'

import {
  ElAutocomplete,
  ElButton,
  ElCascader,
  ElCheckbox,
  ElDatePicker,
  ElInput,
  ElInputNumber,
  ElLoading,
  ElMessage,
  ElMessageBox,
  ElNotification,
  ElOption,
  ElRadio,
  ElRate,
  ElSelect,
  ElSlider,
  ElSwitch,
  ElTimePicker,
  ElTimeSelect
} from 'element-plus'
import { type App } from 'vue'

/**
 * - vxe-table-plugin-element 中用到的组件
 * - 其他页面中用到的组件
 */
export function useElementPlus(app: App) {
  // vxe-table-plugin-element 中用到的组件
  app
    .use(ElInput)
    .use(ElAutocomplete)
    .use(ElInputNumber)
    .use(ElSwitch)
    .use(ElRate)
    .use(ElSlider)
    .use(ElButton)
    .use(ElSelect)
    .use(ElCascader)
    .use(ElDatePicker)
    .use(ElTimePicker)
    .use(ElTimeSelect)
    .use(ElRadio)
    .use(ElCheckbox)
    .use(ElOption)

  // 其他页面中用到的组件

  // 全局指令
  app.use(ElMessage).use(ElMessageBox).use(ElNotification).use(ElLoading)
}
