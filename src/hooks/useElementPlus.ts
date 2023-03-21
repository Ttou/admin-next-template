import {
  ElAlert,
  ElAside,
  ElAutocomplete,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElButton,
  ElCard,
  ElCascader,
  ElCheckbox,
  ElCheckboxGroup,
  ElCol,
  ElContainer,
  ElDatePicker,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElForm,
  ElFormItem,
  ElHeader,
  ElInput,
  ElInputNumber,
  ElLoading,
  ElMain,
  ElMenu,
  ElMenuItem,
  ElMessage,
  ElMessageBox,
  ElNotification,
  ElOption,
  ElRadio,
  ElRadioGroup,
  ElRate,
  ElRow,
  ElScrollbar,
  ElSelect,
  ElSkeleton,
  ElSlider,
  ElSpace,
  ElSubMenu,
  ElSwitch,
  ElTabPane,
  ElTabs,
  ElTag,
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
    .use(ElTabs)
    .use(ElTabPane)
    .use(ElDropdown)
    .use(ElDropdownMenu)
    .use(ElDropdownItem)
    .use(ElBreadcrumb)
    .use(ElBreadcrumbItem)
    .use(ElSpace)
    .use(ElMenu)
    .use(ElMenuItem)
    .use(ElSubMenu)
    .use(ElAside)
    .use(ElHeader)
    .use(ElMain)
    .use(ElContainer)
    .use(ElScrollbar)

  // 全局指令
  app.use(ElMessage).use(ElMessageBox).use(ElNotification).use(ElLoading)
}
