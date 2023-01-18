import { ElButton, ElDatePicker, ElSpace } from 'element-plus'
import { h } from 'vue'
import type VXETable from 'vxe-table'

import { TABLE_RENDERER } from '@/constants'

/** 渲染器注册 */
export function useTableRenderer(vxe: typeof VXETable) {
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

  vxe.renderer.add(TABLE_RENDERER.FormItemDate, {
    renderItemContent(renderOpts, params) {
      const { props } = renderOpts
      const { data, field } = params

      return [
        h(ElDatePicker, {
          modelValue: data[field],
          'onUpdate:modelValue': value => {
            data[field] = value
          },
          ...props
        })
      ]
    }
  })
}
