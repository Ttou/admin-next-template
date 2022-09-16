import { useStorage } from '@vueuse/core'
import { defineStore } from 'pinia'
import { ref } from 'vue'

import { userApi } from '@/apis'

import { useTabsStore } from '.'
import store from '.'

export const useUserStore = defineStore('user', () => {
  const token = useStorage('token', '')
  const name = ref('')
  const roles = ref<string[]>([])

  async function login(payload: Record<string, any>) {
    const data = await userApi.login(payload)

    token.value = data.token
  }

  async function logout() {
    await userApi.logout()

    clear()
  }

  async function getInfo() {
    const data = await userApi.getInfo()

    name.value = data.name
    roles.value = data.roles

    return data.roles
  }

  function clear() {
    const tabsStore = useTabsStore()

    token.value = ''
    name.value = ''
    roles.value = []
    tabsStore.delAllTabs()
  }

  return {
    token,
    name,
    roles,
    login,
    logout,
    getInfo,
    clear
  }
})

export function useUserStoreHook() {
  return useUserStore(store)
}
