import { useStorage } from '@vueuse/core'
import type { Module } from 'vuex'

import { getUserInfo, login, logout } from '@/api'

import { Actions, UserModule } from '../constants'
import type { State } from '../types'

export const Name = UserModule.name

export default {
  namespaced: true,
  state: {
    token: useStorage('token', '') as unknown as string,
    name: '',
    roles: []
  },
  mutations: {
    [UserModule.mutations.SET_TOKEN]: (state, token) => {
      state.token = token
    },
    [UserModule.mutations.SET_NAME]: (state, name) => {
      state.name = name
    },
    [UserModule.mutations.SET_ROLES]: (state, roles) => {
      state.roles = roles
    }
  },
  actions: {
    [UserModule.actions.login]: async ({ commit }, payload) => {
      const data = await login(payload)

      commit(UserModule.mutations.SET_TOKEN, data.token)
    },
    [UserModule.actions.logout]: async ({ dispatch }) => {
      await logout()

      dispatch(UserModule.actions.clear)
    },
    [UserModule.actions.getInfo]: ({ commit }) => {
      return new Promise(resolve => {
        getUserInfo().then(({ name, roles }) => {
          commit(UserModule.mutations.SET_NAME, name)
          commit(UserModule.mutations.SET_ROLES, roles)

          resolve(roles)
        })
      })
    },
    [UserModule.actions.clear]: ({ commit, dispatch }) => {
      commit(UserModule.mutations.SET_NAME, '')
      commit(UserModule.mutations.SET_TOKEN, '')
      commit(UserModule.mutations.SET_ROLES, [])
      dispatch(Actions.tabs.delAllTabs, null, { root: true })
    }
  }
} as Module<State['user'], any>
