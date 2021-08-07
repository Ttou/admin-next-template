import type { Ref } from 'vue'

export type State = {
  permission: {
    /** 全部路由 */
    routes: any[]
  }
  settings: {
    /** 标题 */
    title: string
    /** 固定头部 */
    fixedHeader: boolean
    /** 侧边栏主题 */
    siderTheme: 'light' | 'dark'
    /** 侧边栏打开状态 */
    siderOpened: boolean
    /** 侧边栏打开宽度 */
    siderOpenedWidth: string
    /** 侧边栏关闭宽度 */
    siderClosedWidth: string
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
    permissions: string[]
  }
}
