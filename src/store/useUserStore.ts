import { useStorage } from '@vueuse/core'
import { defineStore } from 'pinia'
import { reactive, toRefs } from 'vue'

import { adminApi, userApi } from '@/apis'

import store from '.'
import { useTabsStore } from '.'

export const useUserStore = defineStore('user', () => {
  const state = reactive({
    token: useStorage('token', ''),
    name: '',
    menus: [] as Menu[]
  })

  async function login(payload: Record<string, any>) {
    const data = await userApi.login(payload)

    state.token = data.token
  }

  async function logout() {
    await userApi.logout()

    clear()
  }

  async function getInfo() {
    const data = await adminApi.getProfile()

    state.name = data.nickname
    state.menus = data.menus

    return data.menus
  }

  function clear() {
    const tabsStore = useTabsStore()

    state.token = ''
    state.name = ''
    state.menus = []
    tabsStore.delAllTabs()
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
