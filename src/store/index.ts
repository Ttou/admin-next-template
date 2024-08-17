import { createPinia } from 'pinia'

const store = createPinia()

export default store

export * from './useLocaleStore'
export * from './usePermissionStore'
export * from './useSettingStore'
export * from './useTabsStore'
export * from './useUserStore'
