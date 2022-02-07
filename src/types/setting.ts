export type Setting = {
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
  /**
   * 侧边栏图标高度
   * @description 设为`0`时不显示
   */
  siderLogoHeight: string
}
