import FormCreate from '@form-create/ant-design-vue'
import type { App } from 'vue'

export function useFormCreate(app: App) {
  app.use(FormCreate)
}
