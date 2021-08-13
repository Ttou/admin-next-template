import type { Module } from 'vuex'

import { TabsModule } from '../constants'
import type { State } from '../types'

export const Name = TabsModule.name

export default {
  namespaced: true,
  state: {
    cachedTabs: [],
    visitedTabs: []
  },
  actions: {
    [TabsModule.actions.addTab]({ commit }, tab) {
      commit(TabsModule.mutations.ADD_TAB, tab)
      commit(TabsModule.mutations.UPDATE_CACHED_TAB)
    },
    [TabsModule.actions.delTab]({ commit, state }, tab) {
      return new Promise(resolve => {
        commit(TabsModule.mutations.DEL_TAB, tab)
        commit(TabsModule.mutations.UPDATE_CACHED_TAB)

        resolve({
          cachedTabs: [...state.cachedTabs],
          visitedTabs: [...state.visitedTabs]
        })
      })
    },
    [TabsModule.actions.delLeftTabs]({ commit, state }, tab) {
      return new Promise(resolve => {
        commit(TabsModule.mutations.DEL_LEFT_TABS, tab)
        commit(TabsModule.mutations.UPDATE_CACHED_TAB)

        resolve({
          cachedTabs: [...state.cachedTabs],
          visitedTabs: [...state.visitedTabs]
        })
      })
    },
    [TabsModule.actions.delRightTabs]({ commit, state }, tab) {
      return new Promise(resolve => {
        commit(TabsModule.mutations.DEL_RIGHT_TABS, tab)
        commit(TabsModule.mutations.UPDATE_CACHED_TAB)

        resolve({
          cachedTabs: [...state.cachedTabs],
          visitedTabs: [...state.visitedTabs]
        })
      })
    },
    [TabsModule.actions.delOthersTabs]({ commit, state }, tab) {
      return new Promise(resolve => {
        commit(TabsModule.mutations.DEL_OTHERS_TABS, tab)
        commit(TabsModule.mutations.UPDATE_CACHED_TAB)

        resolve({
          cachedTabs: [...state.cachedTabs],
          visitedTabs: [...state.visitedTabs]
        })
      })
    },
    [TabsModule.actions.delAllTabs]({ commit, state }) {
      return new Promise(resolve => {
        commit(TabsModule.mutations.DEL_ALL_TABS)
        commit(TabsModule.mutations.UPDATE_CACHED_TAB)

        resolve({
          cachedTabs: [...state.cachedTabs],
          visitedTabs: [...state.visitedTabs]
        })
      })
    },
    [TabsModule.actions.delCachedTab]({ commit }, tab) {
      return new Promise(resolve => {
        commit(TabsModule.mutations.DEL_CACHED_TAB, tab)

        resolve(true)
      })
    }
  },
  mutations: {
    [TabsModule.mutations.ADD_TAB](state, tab) {
      if (state.visitedTabs.some(v => v.path === tab.path)) {
        return
      }

      const v = { ...tab }

      if (!v.meta!.title) {
        v.meta!.title = 'undefined'
      }

      state.visitedTabs.push(v)
    },
    [TabsModule.mutations.DEL_TAB](state, tab) {
      for (const [i, v] of state.visitedTabs.entries()) {
        if (v.path === tab.path) {
          state.visitedTabs.splice(i, 1)
          break
        }
      }
    },
    [TabsModule.mutations.DEL_LEFT_TABS](state, tab) {
      const index = state.visitedTabs.findIndex(v => v.path === tab.path)

      if (index > 0) {
        state.visitedTabs = state.visitedTabs.slice(index)
      }
    },
    [TabsModule.mutations.DEL_RIGHT_TABS](state, tab) {
      const index = state.visitedTabs.findIndex(v => v.path === tab.path)

      if (index >= 0 && index < state.visitedTabs.length - 1) {
        state.visitedTabs = state.visitedTabs.slice(0, index + 1)
      }
    },
    [TabsModule.mutations.DEL_OTHERS_TABS](state, tab) {
      state.visitedTabs = state.visitedTabs.filter(v => v.path === tab.path)
    },
    [TabsModule.mutations.DEL_ALL_TABS](state) {
      state.visitedTabs = []
    },
    [TabsModule.mutations.DEL_CACHED_TAB](state, tab) {
      const index = state.cachedTabs.indexOf(tab.name)

      if (index > -1) {
        state.cachedTabs.splice(index, 1)
      }
    },
    [TabsModule.mutations.UPDATE_CACHED_TAB](state) {
      const cachedTabs = new Set<string>()

      for (const tab of state.visitedTabs) {
        const name = tab.name as string

        if (!tab.meta!.noCache) {
          cachedTabs.add(name)
        }
      }

      state.cachedTabs = Array.from(cachedTabs)
    }
  }
} as Module<State['tabs'], any>
