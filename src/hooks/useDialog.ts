import { type ModalFuncProps, Modal } from 'ant-design-vue'
import { createVNode } from 'vue'

import { SvgIcon } from '@/components'

export function useDialog() {
  function showConfirm(options?: ModalFuncProps) {
    Modal.confirm({
      title: '提示',
      icon: createVNode(SvgIcon, {
        name: 'navbar-exclamation',
        class: 'anticon'
      }),
      ...options
    })
  }

  return {
    showConfirm
  }
}
