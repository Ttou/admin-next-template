import { Button, Space } from 'ant-design-vue'
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
}
