import { Button, DatePicker, Space } from 'ant-design-vue'
import type VXETable from 'vxe-table'

import { TBALE_RENDERER } from '@/constants'

/** 渲染器注册 */
export function useTableRenderer(vxe: typeof VXETable) {
  vxe.renderer.add(TBALE_RENDERER.FormItemBtns, {
    renderItemContent(renderOpts, params) {
      return [
        <Space>
          <Button type="primary" htmlType="submit">
            查询
          </Button>
          <Button htmlType="reset">重置</Button>
        </Space>
      ]
    }
  })

  vxe.renderer.add(TBALE_RENDERER.FormItemDate, {
    renderItemContent(renderOpts, params) {
      const { props } = renderOpts
      const { data, property } = params
      let Component

      switch (props!.type) {
        case 'range':
          Component = DatePicker.RangePicker
          break
        case 'month':
          Component = DatePicker.MonthPicker
          break
        case 'date':
        default:
          Component = DatePicker
          break
      }

      return [<Component v-model={[data[property], 'value']} {...props} />]
    }
  })
}
