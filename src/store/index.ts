import { createPinia } from 'pinia'

const store = createPinia()

export default store
export * from './types'
export { default as usePermissionStore } from './usePermissionStore'
export { default as useSettingsStore } from './useSettingsStore'
export { default as useTabsStore } from './useTabsStore'
export { default as useUserStore } from './useUserStore'
