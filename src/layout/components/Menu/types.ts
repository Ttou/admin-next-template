import type { VNodeChild } from 'vue'
import type { RouteRecordRaw } from 'vue-router'

export type Item = {
  path: string
  meta: {
    title: string
    icon: VNodeChild | JSX.Element
    alwaysShow: boolean
    hidden: boolean
  }
  children?: Item[]
}

export type Route = Omit<RouteRecordRaw, 'path' | 'children' | 'meta'> & Item
