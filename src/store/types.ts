import type { RouteLocationNormalizedLoaded } from 'vue-router'

export type Tabs = {
  /** 缓存 */
  cachedTabs: string[]
  /** 访问 */
  visitedTabs: RouteLocationNormalizedLoaded[]
}
