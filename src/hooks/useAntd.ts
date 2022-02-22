import 'ant-design-vue/dist/antd.less'

import Antd from 'ant-design-vue'
import { type App } from 'vue'

export function useAntd(app: App) {
  app.use(Antd)
}
