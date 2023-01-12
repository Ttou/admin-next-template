import { defineStore } from 'pinia'
import { reactive, toRefs } from 'vue'
import { type RouteLocationNormalizedLoaded as Tab } from 'vue-router'

import store from '.'

interface HandlerReturn {
  /**
   * 缓存
   */
  cachedTabs: string[]
  /**
   * 访问
   */
  visitedTabs: Tab[]
}

export const useTabsStore = defineStore('tabs', () => {
  const state = reactive({
    cachedTabs: [] as string[],
    visitedTabs: [] as Tab[]
  })

  function addTab(tab: Tab) {
    const visitedTab = state.visitedTabs.find(v => v.path === tab.path)

    if (visitedTab) {
      if (visitedTab.fullPath === tab.fullPath) {
        return
      }

      const index = state.visitedTabs.findIndex(v => v.path === tab.path)
      state.visitedTabs[index] = { ...tab }
    } else {
      const v = { ...tab }

      if (!v.meta!.title) {
        v.meta!.title = 'undefined'
      }

      state.visitedTabs.push(v)

      updateCachedTab()
    }
  }

  function delTab(tab: Tab): Promise<HandlerReturn> {
    return new Promise(resolve => {
      for (const [i, v] of state.visitedTabs.entries()) {
        if (v.path === tab.path) {
          state.visitedTabs.splice(i, 1)
          break
        }
      }

      updateCachedTab()

      resolve({
        cachedTabs: [...state.cachedTabs],
        visitedTabs: [...state.visitedTabs]
      })
    })
  }

  function delLeftTabs(tab: Tab): Promise<HandlerReturn> {
    return new Promise(resolve => {
      const index = state.visitedTabs.findIndex(v => v.path === tab.path)

      if (index > 0) {
        state.visitedTabs = state.visitedTabs.slice(index)
      }

      updateCachedTab()

      resolve({
        cachedTabs: [...state.cachedTabs],
        visitedTabs: [...state.visitedTabs]
      })
    })
  }

  function delRightTabs(tab: Tab): Promise<HandlerReturn> {
    return new Promise(resolve => {
      const index = state.visitedTabs.findIndex(v => v.path === tab.path)

      if (index >= 0 && index < state.visitedTabs.length - 1) {
        state.visitedTabs = state.visitedTabs.slice(0, index + 1)
      }

      updateCachedTab()

      resolve({
        cachedTabs: [...state.cachedTabs],
        visitedTabs: [...state.visitedTabs]
      })
    })
  }

  function delOthersTabs(tab: Tab): Promise<HandlerReturn> {
    return new Promise(resolve => {
      state.visitedTabs = state.visitedTabs.filter(v => v.path === tab.path)

      updateCachedTab()

      resolve({
        cachedTabs: [...state.cachedTabs],
        visitedTabs: [...state.visitedTabs]
      })
    })
  }

  function delCachedTab(tab: Tab): Promise<boolean> {
    return new Promise(resolve => {
      const index = state.cachedTabs.indexOf(tab.name as string)

      if (index > -1) {
        state.cachedTabs.splice(index, 1)
      }

      resolve(true)
    })
  }

  function delAllTabs(): Promise<HandlerReturn> {
    return new Promise(resolve => {
      state.visitedTabs = []

      updateCachedTab()

      resolve({
        cachedTabs: [...state.cachedTabs],
        visitedTabs: [...state.visitedTabs]
      })
    })
  }

  function updateCachedTab() {
    const cachedTabs = new Set<string>()

    for (const tab of state.visitedTabs) {
      if (tab.meta.noCache !== true) {
        const name = tab.name as string

        if (name) {
          cachedTabs.add(name)
        }
      }
    }

    state.cachedTabs = Array.from(cachedTabs)
  }

  return {
    ...toRefs(state),
    addTab,
    delTab,
    delLeftTabs,
    delRightTabs,
    delOthersTabs,
    delCachedTab,
    delAllTabs
  }
})

export function useTabsStoreHook() {
  return useTabsStore(store)
}
