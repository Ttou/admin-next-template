import type { VNodeChild } from 'vue'
import type { RouteRecordRaw } from 'vue-router'

export type MenuInfo = {
  path: string
  meta: {
    title: string
    icon: VNodeChild | JSX.Element
    alwaysShow: boolean
    hidden: boolean
  }
  children?: MenuInfo[]
}

export type Route = Omit<RouteRecordRaw, 'path' | 'children' | 'meta'> &
  MenuInfo
