import { defineStore } from 'pinia'
import { ref } from 'vue'

import store from '.'
import type { Tab, Tabs } from './types'

export const useTabsStore = defineStore('tabs', () => {
  const cachedTabs = ref<string[]>([])
  const visitedTabs = ref<Tab[]>([])

  function addTab(tab: Tab) {
    const visitedTab = visitedTabs.value.find(v => v.path === tab.path)

    if (visitedTab) {
      if (visitedTab.fullPath === tab.fullPath) {
        return
      }

      const index = visitedTabs.value.findIndex(v => v.path === tab.path)
      visitedTabs.value[index] = { ...tab }
    } else {
      const v = { ...tab }

      if (!v.meta!.title) {
        v.meta!.title = 'undefined'
      }

      visitedTabs.value.push(v)

      updateCachedTab()
    }
  }

  function delTab(tab: Tab): Promise<Tabs> {
    return new Promise(resolve => {
      for (const [i, v] of visitedTabs.value.entries()) {
        if (v.path === tab.path) {
          visitedTabs.value.splice(i, 1)
          break
        }
      }

      updateCachedTab()

      resolve({
        cachedTabs: [...cachedTabs.value],
        visitedTabs: [...visitedTabs.value]
      })
    })
  }

  function delLeftTabs(tab: Tab): Promise<Tabs> {
    return new Promise(resolve => {
      const index = visitedTabs.value.findIndex(v => v.path === tab.path)

      if (index > 0) {
        visitedTabs.value = visitedTabs.value.slice(index)
      }

      updateCachedTab()

      resolve({
        cachedTabs: [...cachedTabs.value],
        visitedTabs: [...visitedTabs.value]
      })
    })
  }

  function delRightTabs(tab: Tab): Promise<Tabs> {
    return new Promise(resolve => {
      const index = visitedTabs.value.findIndex(v => v.path === tab.path)

      if (index >= 0 && index < visitedTabs.value.length - 1) {
        visitedTabs.value = visitedTabs.value.slice(0, index + 1)
      }

      updateCachedTab()

      resolve({
        cachedTabs: [...cachedTabs.value],
        visitedTabs: [...visitedTabs.value]
      })
    })
  }

  function delOthersTabs(tab: Tab): Promise<Tabs> {
    return new Promise(resolve => {
      visitedTabs.value = visitedTabs.value.filter(v => v.path === tab.path)
      updateCachedTab()

      resolve({
        cachedTabs: [...cachedTabs.value],
        visitedTabs: [...visitedTabs.value]
      })
    })
  }

  function delCachedTab(tab: Tab) {
    return new Promise(resolve => {
      const index = cachedTabs.value.indexOf(tab.name as string)

      if (index > -1) {
        cachedTabs.value.splice(index, 1)
      }

      resolve(true)
    })
  }

  function delAllTabs() {
    return new Promise(resolve => {
      visitedTabs.value = []
      updateCachedTab()

      resolve({
        cachedTabs: [...cachedTabs.value],
        visitedTabs: [...visitedTabs.value]
      })
    })
  }

  function updateCachedTab() {
    const _cachedTabs = new Set<string>()

    for (const tab of visitedTabs.value) {
      if (tab.meta!.noCache !== true) {
        const name = tab.name as string
        name && _cachedTabs.add(name)
      }
    }

    cachedTabs.value = Array.from(_cachedTabs)
  }

  return {
    cachedTabs,
    visitedTabs,
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
