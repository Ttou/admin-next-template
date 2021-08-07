import type { Module } from 'vuex'

import defaultSetting from '@/settings'

import { SettingsModule } from '../constants'
import type { State } from '../types'

export const Name = SettingsModule.name

export default {
  namespaced: true,
  state: {
    ...defaultSetting
  },
  mutations: {
    [SettingsModule.mutations.CHANGE_SETTING]: (state, { key, value }) => {
      if (state.hasOwnProperty(key)) {
        state[key] = value
      }
    }
  },
  actions: {
    [SettingsModule.actions.changeSetting]: ({ commit }, data) => {
      commit(SettingsModule.mutations.CHANGE_SETTING, data)
    }
  }
} as Module<State['settings'], any>
