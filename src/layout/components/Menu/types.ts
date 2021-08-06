import type { VNodeChild } from 'vue'
import type { RouteRecordRaw } from 'vue-router'

export type MenuInfo = {
  key: string
  path: string
  meta: {
    title: string
    icon: VNodeChild | JSX.Element
    hidden: boolean
  }
  children: MenuInfo[]
}

export type Route = Omit<RouteRecordRaw, 'path' | 'children' | 'meta'> &
  MenuInfo
