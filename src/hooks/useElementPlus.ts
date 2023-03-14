import {
  ElAlert,
  ElAutocomplete,
  ElButton,
  ElCard,
  ElCascader,
  ElCheckbox,
  ElCheckboxGroup,
  ElCol,
  ElDatePicker,
  ElForm,
  ElFormItem,
  ElInput,
  ElInputNumber,
  ElOption,
  ElRadio,
  ElRadioGroup,
  ElRate,
  ElRow,
  ElSelect,
  ElSkeleton,
  ElSlider,
  ElSwitch,
  ElTag,
  ElTimePicker,
  ElTimeSelect
} from 'element-plus'
import { type App } from 'vue'

/**
 * - vxe-table-plugin-element 中用到的组件
 * - 其他页面中用到的组件
 * - Tsx 中引用的组件可以不用在这里注册
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
  app
    .use(ElRow)
    .use(ElCol)
    .use(ElCard)
    .use(ElSkeleton)
    .use(ElTag)
    .use(ElAlert)
    .use(ElForm)
    .use(ElFormItem)
    .use(ElCheckboxGroup)
    .use(ElRadioGroup)
}
