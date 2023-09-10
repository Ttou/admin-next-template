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

export function useElementPlus(app: App) {
  // 第三方库中用到的组件
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

  // 全局指令
  app.use(ElMessage).use(ElMessageBox).use(ElNotification).use(ElLoading)
}
