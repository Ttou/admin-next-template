import type { RouteRecordRaw } from 'vue-router'

export type Item = {
  path: string
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
  }
  children?: Item[]
}

export type Route = Omit<RouteRecordRaw, 'path' | 'children' | 'meta'> & Item
