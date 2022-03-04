import {
  Button,
  DatePicker,
  MonthPicker,
  RangePicker,
  Space
} from 'ant-design-vue'
import type VXETable from 'vxe-table'

import { TABLE_RENDERER } from '@/constants'

/** 渲染器注册 */
export function useTableRenderer(vxe: typeof VXETable) {
  vxe.renderer.add(TABLE_RENDERER.FormItemBtns, {
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

  vxe.renderer.add(TABLE_RENDERER.FormItemDate, {
    renderItemContent(renderOpts, params) {
      const { props } = renderOpts
      const { data, property } = params
      let Component: any

      switch (props!.type) {
        case 'range':
          Component = RangePicker
          break
        case 'month':
          Component = MonthPicker
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
