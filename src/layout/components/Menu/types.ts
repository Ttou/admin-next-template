import type { RouteRecordRaw } from 'vue-router'

export type Item = {
  path: string
  meta: {
    title: string
    icon: string
    alwaysShow: boolean
    hidden: boolean
  }
  children?: Item[]
}

export type Route = Omit<RouteRecordRaw, 'path' | 'children' | 'meta'> & Item
