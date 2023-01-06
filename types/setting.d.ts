declare interface Setting {
  /**
   * 标题
   */
  title: string
  /**
   * 固定头部
   */
  fixedHeader: boolean
  /**
   * 侧边栏打开状态
   */
  sideOpened: boolean
  /**
   * 侧边栏打开宽度
   */
  sideOpenedWidth: string
  /**
   * 侧边栏关闭宽度
   */
  sideClosedWidth: string
  /**
   * 首页路由
   */
  homeRoute: {
    /**
     * 名称
     */
    name: string
    /**
     * 路径
     */
    path: string
  }
}
