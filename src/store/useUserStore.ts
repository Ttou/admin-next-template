import { useStorage } from '@vueuse/core'
import { defineStore } from 'pinia'
import { reactive, toRefs } from 'vue'

import { userApi } from '@/apis'
import { resetRouter } from '@/router'

import { useTabsStore } from '.'
import store from '.'

export const useUserStore = defineStore('user', () => {
  const state = reactive({
    token: useStorage('token', ''),
    name: '',
    menus: [] as Menu[],
    infoRequested: false
  })

  async function login(payload: Record<string, any>) {
    const data = await userApi.login(payload)

    state.token = data.token
  }

  async function logout() {
    await userApi.logout()

    await clear()
  }

  async function getInfo() {
    const data = await userApi.getInfo()

    state.name = data.name
    state.menus = data.menus
    state.infoRequested = true

    return data.menus
  }

  async function clear() {
    if (!state.token) return

    const tabsStore = useTabsStore()

    state.token = ''
    state.name = ''
    state.menus = []
    state.infoRequested = false
    await tabsStore.delAllTabs()
    resetRouter()
  }

  return {
    ...toRefs(state),
    login,
    logout,
    getInfo,
    clear
  }
})

export function useUserStoreHook() {
  return useUserStore(store)
}
