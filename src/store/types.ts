import type { RouteRecordRaw } from 'vue-router'

export type State = {
  permission: {
    /** 全部路由 */
    routes: RouteRecordRaw[]
  }
  settings: {
    /** 标题 */
    title: string
    /** 固定头部 */
    fixedHeader: boolean
    /** 头部高度 */
    headerHeight: string
    /**
     * 侧边栏主题
     * - `light` 亮色
     * - `dark` 暗色
     */
    siderTheme: 'light' | 'dark'
    /** 侧边栏打开状态 */
    siderOpened: boolean
    /** 侧边栏打开宽度 */
    siderOpenedWidth: string
    /** 侧边栏关闭宽度 */
    siderClosedWidth: string
    /** 侧边栏图标高度 */
    siderLogoHeight: string
  }
  tabs: {
    /** 浏览的页面 */
    visitedTabs: any[]
    /** 缓存的页面 */
    cachedTabs: string[]
  }
  user: {
    /** 登录凭证 */
    token: string
    /** 用户名 */
    name: string
    /** 权限列表 */
    roles: string[]
  }
}
