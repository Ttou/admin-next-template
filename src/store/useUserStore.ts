import { useStorage } from '@vueuse/core'
import { defineStore } from 'pinia'

import { userApi } from '@/api'

import { useTabsStore } from '.'

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      token: useStorage('token', '') as unknown as string,
      name: '',
      roles: [] as string[]
    }
  },
  actions: {
    async login(payload: Record<string, any>) {
      const data = await userApi.login(payload)

      this.token = data.token
    },
    async logout() {
      await userApi.logout()

      this.clear()
    },
    async getInfo() {
      const { name, roles } = await userApi.getInfo()

      this.name = name
      this.roles = roles

      return roles
    },
    clear() {
      const tabsStore = useTabsStore()

      this.token = ''
      this.name = ''
      this.roles = []
      tabsStore.delAllTabs()
    }
  }
})
