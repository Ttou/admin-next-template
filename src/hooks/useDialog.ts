import { Icon } from '@iconify/vue'
import { type ModalFuncProps, Modal } from 'ant-design-vue'
import { createVNode } from 'vue'

export function useDialog() {
  function showConfirm(options?: ModalFuncProps) {
    Modal.confirm({
      title: '提示',
      icon: createVNode(Icon, {
        icon: 'ant-design:exclamation-circle-outlined',
        class: 'anticon'
      }),
      ...options
    })
  }

  return {
    showConfirm
  }
}
