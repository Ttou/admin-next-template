declare interface Menu {
  /**
   * 菜单链接
   */
  path: string
  /**
   * 菜单名
   */
  name?: string
  /**
   * 组件
   */
  component: any
  /**
   * 跳转
   */
  redirect?: string
  /**
   * 额外信息
   */
  meta: {
    /**
     * 菜单标题
     */
    title?: string
    /**
     * 菜单图标
     */
    icon?: string
    /**
     * 是否一直显示
     * - `true` 只有一个子级时也显示父级
     * - `false` 只有一个子级时只显示子级
     * @default false
     */
    alwaysShow?: boolean
    /**
     * 是否隐藏
     * - `true` 隐藏
     * - `false` 显示
     * @default false
     */
    hidden?: boolean
    /**
     * 是否不缓存
     * - `true` 不缓存
     * - `false` 缓存
     * @default false
     */
    noCache?: boolean
    /**
     * 排序
     * @description 从0开始计算，数值越小排越前面
     */
    sort?: number
  }
  /**
   * 子级菜单
   */
  children: Menu[]
}
