import { ElButton, ElDatePicker, ElSpace } from 'element-plus'
import type VXETable from 'vxe-table'

import { TABLE_RENDERER } from '@/constants'

/** 渲染器注册 */
export function useTableRenderer(vxe: typeof VXETable) {
  vxe.renderer.add(TABLE_RENDERER.FormItemBtns, {
    renderItemContent(renderOpts, params) {
      return [
        <ElSpace>
          <ElButton type={'primary'} nativeType={'submit'}>
            查询
          </ElButton>
          <ElButton nativeType={'reset'}>重置</ElButton>
        </ElSpace>
      ]
    }
  })

  vxe.renderer.add(TABLE_RENDERER.FormItemDate, {
    renderItemContent(renderOpts, params) {
      const { props } = renderOpts
      const { data, field } = params

      return [<ElDatePicker v-model={data[field]} {...props} />]
    }
  })
}
