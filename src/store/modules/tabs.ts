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
    [TabsModule.actions.addTab]({ dispatch }, tab) {
      dispatch(TabsModule.actions.addVisitedTab, tab)
      dispatch(TabsModule.actions.addCachedTab, tab)
    },
    [TabsModule.actions.addVisitedTab]({ commit }, tab) {
      commit(TabsModule.mutations.ADD_VISITED_TAB, tab)
    },
    [TabsModule.actions.addCachedTab]({ commit }, tab) {
      commit(TabsModule.mutations.ADD_CACHED_TAB, tab)
    },
    [TabsModule.actions.delTab]({ dispatch, state }, tab) {
      return new Promise(resolve => {
        dispatch(TabsModule.actions.delVisitedTab, tab)
        dispatch(TabsModule.actions.delCachedTab, tab)
        resolve({
          cachedTabs: [...state.cachedTabs],
          visitedTabs: [...state.visitedTabs]
        })
      })
    },
    [TabsModule.actions.delVisitedTab]({ commit, state }, tab) {
      return new Promise(resolve => {
        commit(TabsModule.mutations.DEL_VISITED_TAB, tab)
        resolve([...state.visitedTabs])
      })
    },
    [TabsModule.actions.delCachedTab]({ commit, state }, tab) {
      return new Promise(resolve => {
        commit(TabsModule.mutations.DEL_CACHED_TAB, tab)
        resolve([...state.cachedTabs])
      })
    },
    [TabsModule.actions.delLeftTabs]({ dispatch, state }, tab) {
      return new Promise(resolve => {
        dispatch(TabsModule.actions.delLeftVisitedTabs, tab)
        dispatch(TabsModule.actions.delLeftCachedTabs, tab)
        resolve({
          cachedTabs: [...state.cachedTabs],
          visitedTabs: [...state.visitedTabs]
        })
      })
    },
    [TabsModule.actions.delLeftVisitedTabs]({ commit, state }, tab) {
      return new Promise(resolve => {
        commit(TabsModule.mutations.DEL_LEFT_VISITED_TABS, tab)
        resolve([...state.visitedTabs])
      })
    },
    [TabsModule.actions.delLeftCachedTabs]({ commit, state }, tab) {
      return new Promise(resolve => {
        commit(TabsModule.mutations.DEL_LEFT_CACHED_TABS, tab)
        resolve([...state.cachedTabs])
      })
    },
    [TabsModule.actions.delRightTabs]({ dispatch, state }, tab) {
      return new Promise(resolve => {
        dispatch(TabsModule.actions.delRightVisitedTabs, tab)
        dispatch(TabsModule.actions.delRightCachedTabs, tab)
        resolve({
          cachedTabs: [...state.cachedTabs],
          visitedTabs: [...state.visitedTabs]
        })
      })
    },
    [TabsModule.actions.delRightVisitedTabs]({ commit, state }, tab) {
      return new Promise(resolve => {
        commit(TabsModule.mutations.DEL_RIGHT_VISITED_TABS, tab)
        resolve([...state.visitedTabs])
      })
    },
    [TabsModule.actions.delRightCachedTabs]({ commit, state }, tab) {
      return new Promise(resolve => {
        commit(TabsModule.mutations.DEL_RIGHT_CACHED_TABS, tab)
        resolve([...state.cachedTabs])
      })
    },
    [TabsModule.actions.delOthersTabs]({ dispatch, state }, tab) {
      return new Promise(resolve => {
        dispatch(TabsModule.actions.delOthersVisitedTabs, tab)
        dispatch(TabsModule.actions.delOthersCachedTabs, tab)
        resolve({
          cachedTabs: [...state.cachedTabs],
          visitedTabs: [...state.visitedTabs]
        })
      })
    },
    [TabsModule.actions.delOthersVisitedTabs]({ commit, state }, tab) {
      return new Promise(resolve => {
        commit(TabsModule.mutations.DEL_OTHERS_VISITED_TABS, tab)
        resolve([...state.visitedTabs])
      })
    },
    [TabsModule.actions.delOthersCachedTabs]({ commit, state }, tab) {
      return new Promise(resolve => {
        commit(TabsModule.mutations.DEL_OTHERS_CACHED_TABS, tab)
        resolve([...state.cachedTabs])
      })
    },
    [TabsModule.actions.delAllTabs]({ dispatch, state }) {
      return new Promise(resolve => {
        dispatch(TabsModule.actions.delAllVisitedTabs)
        dispatch(TabsModule.actions.delAllCachedTabs)
        resolve({
          cachedTabs: [...state.cachedTabs],
          visitedTabs: [...state.visitedTabs]
        })
      })
    },
    [TabsModule.actions.delAllVisitedTabs]({ commit, state }) {
      return new Promise(resolve => {
        commit(TabsModule.mutations.DEL_ALL_VISITED_TABS)
        resolve([...state.visitedTabs])
      })
    },
    [TabsModule.actions.delAllCachedTabs]({ commit, state }) {
      return new Promise(resolve => {
        commit(TabsModule.mutations.DEL_ALL_CACHED_TABS)
        resolve([...state.cachedTabs])
      })
    }
  },
  mutations: {
    [TabsModule.mutations.ADD_VISITED_TAB](state, tab) {
      if (state.visitedTabs.some(v => v.path === tab.path)) {
        return
      }

      const v = { ...tab }

      if (!v.meta!.title) {
        v.meta!.title = '未命名'
      }

      state.visitedTabs.push(v)
    },
    [TabsModule.mutations.ADD_CACHED_TAB](state, tab) {
      const name = tab.name as string

      if (state.cachedTabs.includes(name)) {
        return
      }

      if (!tab.meta!.noCache) {
        state.cachedTabs.push(name)
      }
    },
    [TabsModule.mutations.DEL_VISITED_TAB](state, tab) {
      for (const [i, v] of state.visitedTabs.entries()) {
        if (v.path === tab.path) {
          state.visitedTabs.splice(i, 1)
          break
        }
      }
    },
    [TabsModule.mutations.DEL_CACHED_TAB](state, tab) {
      const index = state.cachedTabs.indexOf(tab.name)

      if (index > -1) {
        state.cachedTabs.splice(index, 1)
      }
    },
    [TabsModule.mutations.DEL_LEFT_VISITED_TABS](state, tab) {
      const index = state.visitedTabs.findIndex(v => v.path === tab.path)

      if (index > 0) {
        state.visitedTabs = state.visitedTabs.slice(index)
      }
    },
    [TabsModule.mutations.DEL_LEFT_CACHED_TABS](state, tab) {
      const index = state.cachedTabs.indexOf(tab.name)

      if (index > 0) {
        state.cachedTabs = state.cachedTabs.slice(index)
      }
    },
    [TabsModule.mutations.DEL_RIGHT_VISITED_TABS](state, tab) {
      const index = state.visitedTabs.findIndex(v => v.path === tab.path)

      if (index >= 0 && index < state.visitedTabs.length - 1) {
        state.visitedTabs = state.visitedTabs.slice(0, index + 1)
      }
    },
    [TabsModule.mutations.DEL_RIGHT_CACHED_TABS](state, tab) {
      const index = state.cachedTabs.indexOf(tab.name)

      if (index >= 0 && index < state.cachedTabs.length - 1) {
        state.cachedTabs = state.cachedTabs.slice(0, index + 1)
      }
    },
    [TabsModule.mutations.DEL_OTHERS_VISITED_TABS](state, tab) {
      state.visitedTabs = state.visitedTabs.filter(v => v.path === tab.path)
    },
    [TabsModule.mutations.DEL_OTHERS_CACHED_TABS](state, tab) {
      const index = state.cachedTabs.indexOf(tab.name)

      if (index > -1) {
        state.cachedTabs = state.cachedTabs.slice(index, index + 1)
      } else {
        state.cachedTabs = []
      }
    },
    [TabsModule.mutations.DEL_ALL_VISITED_TABS](state) {
      state.visitedTabs = []
    },
    [TabsModule.mutations.DEL_ALL_CACHED_TABS](state) {
      state.cachedTabs = []
    }
  }
} as Module<State['tabs'], any>
