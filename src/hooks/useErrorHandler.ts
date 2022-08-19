import type { App } from 'vue'

export function useErrorHandler(app: App) {
  app.config.errorHandler = (err, instance, info) => {}
}
