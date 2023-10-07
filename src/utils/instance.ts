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
  const { $notify, $message, $msgbox, $loading, $alert, $confirm, $prompt } =
    getCtxFromInstance('getElementFnFromInstance')!

  return {
    $notify,
    $message,
    $msgbox,
    $loading,
    $alert,
    $confirm,
    $prompt
  }
}
