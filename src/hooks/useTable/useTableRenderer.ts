import { ElButton, ElSpace } from 'element-plus'
import { h } from 'vue'
import type { VXETableCore } from 'vxe-table'

import { TABLE_RENDERER } from './constants'

/**
 * 渲染器注册
 */
export function useTableRenderer(vxe: VXETableCore) {
  vxe.renderer.add(TABLE_RENDERER.FormItemBtns, {
    renderItemContent(renderOpts, params) {
      return [
        h(ElSpace, null, () => [
          h(
            ElButton,
            {
              type: 'primary',
              nativeType: 'submit'
            },
            () => '查询'
          ),
          h(
            ElButton,
            {
              nativeType: 'reset'
            },
            () => '重置'
          )
        ])
      ]
    }
  })
}
