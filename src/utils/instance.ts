import type {
  ElLoadingService,
  ElMessageBoxShortcutMethod,
  IElMessageBox,
  Message,
  Notify
} from 'element-plus'
import { getCurrentInstance } from 'vue'

/**
 * 从实例获取上下文对象
 */
export function getCtxFromInstance(fnName = 'getCtxFromInstance') {
  const vm = getCurrentInstance()

  if (!vm) {
    throw new Error(`${fnName}: 不要在组件外调用`)
  }

  return 'proxy' in vm ? vm.proxy : vm
}

/**
 * 从实例获取Element全局方法
 */
export function getElementFnFromInstance() {
  // @ts-ignore
  const { $notify, $message, $msgbox, $loading, $alert, $confirm, $prompt } =
    getCtxFromInstance('getElementFnFromInstance')!

  return <
    {
      $notify: Notify
      $message: Message
      $msgbox: IElMessageBox
      $loading: typeof ElLoadingService
      $alert: ElMessageBoxShortcutMethod
      $confirm: ElMessageBoxShortcutMethod
      $prompt: ElMessageBoxShortcutMethod
    }
  >{
    $notify,
    $message,
    $msgbox,
    $loading,
    $alert,
    $confirm,
    $prompt
  }
}
