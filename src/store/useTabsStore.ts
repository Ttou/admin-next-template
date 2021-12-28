import { defineStore } from 'pinia'
import type { RouteLocationNormalizedLoaded } from 'vue-router'

import type { Tabs } from './types'

export function useTabsStore() {
  return defineStore('tabs', {
    state: () => {
      return {
        cachedTabs: [] as string[],
        visitedTabs: [] as RouteLocationNormalizedLoaded[]
      }
    },
    actions: {
      addTab(tab: RouteLocationNormalizedLoaded) {
        if (this.visitedTabs.some(v => v.path === tab.path)) {
          return
        }

        const v = { ...tab }

        if (!v.meta!.title) {
          v.meta!.title = 'undefined'
        }

        this.visitedTabs.push(v)

        this.updateCachedTab()
      },
      delTab(tab: RouteLocationNormalizedLoaded): Promise<Tabs> {
        return new Promise(resolve => {
          for (const [i, v] of this.visitedTabs.entries()) {
            if (v.path === tab.path) {
              this.visitedTabs.splice(i, 1)
              break
            }
          }

          this.updateCachedTab()

          resolve({
            cachedTabs: [...this.cachedTabs],
            visitedTabs: [...this.visitedTabs]
          })
        })
      },
      delLeftTabs(tab: RouteLocationNormalizedLoaded) {
        return new Promise(resolve => {
          const index = this.visitedTabs.findIndex(v => v.path === tab.path)

          if (index > 0) {
            this.visitedTabs = this.visitedTabs.slice(index)
          }

          this.updateCachedTab()

          resolve({
            cachedTabs: [...this.cachedTabs],
            visitedTabs: [...this.visitedTabs]
          })
        })
      },
      delRightTabs(tab: RouteLocationNormalizedLoaded) {
        return new Promise(resolve => {
          const index = this.visitedTabs.findIndex(v => v.path === tab.path)

          if (index >= 0 && index < this.visitedTabs.length - 1) {
            this.visitedTabs = this.visitedTabs.slice(0, index + 1)
          }

          this.updateCachedTab()

          resolve({
            cachedTabs: [...this.cachedTabs],
            visitedTabs: [...this.visitedTabs]
          })
        })
      },
      delOthersTabs(tab: RouteLocationNormalizedLoaded) {
        return new Promise(resolve => {
          this.visitedTabs = this.visitedTabs.filter(v => v.path === tab.path)
          this.updateCachedTab()

          resolve({
            cachedTabs: [...this.cachedTabs],
            visitedTabs: [...this.visitedTabs]
          })
        })
      },
      delAllTabs(): Promise<Tabs> {
        return new Promise(resolve => {
          this.visitedTabs = []
          this.updateCachedTab()

          resolve({
            cachedTabs: [...this.cachedTabs],
            visitedTabs: [...this.visitedTabs]
          })
        })
      },
      delCachedTab(tab: RouteLocationNormalizedLoaded) {
        return new Promise(resolve => {
          const index = this.cachedTabs.indexOf(tab.name as string)

          if (index > -1) {
            this.cachedTabs.splice(index, 1)
          }

          resolve(true)
        })
      },
      updateCachedTab() {
        const cachedTabs = new Set<string>()

        for (const tab of this.visitedTabs) {
          const name = tab.name as string

          if (!tab.meta!.noCache) {
            cachedTabs.add(name)
          }
        }

        this.cachedTabs = Array.from(cachedTabs)
      }
    }
  })()
}
