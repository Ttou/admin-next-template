import { useStorage } from '@vueuse/core'
import { defineStore } from 'pinia'

import { getUserInfo, login, logout } from '@/api'

import { useTabsStore } from '.'

export default defineStore('UserStore', {
  state: () => {
    return {
      token: useStorage('token', '') as unknown as string,
      name: '',
      roles: [] as string[]
    }
  },
  actions: {
    async login(payload: Record<string, any>) {
      const data = await login(payload)

      this.token = data.token
    },
    async logout() {
      await logout()

      this.clear()
    },
    async getInfo() {
      const { name, roles } = await getUserInfo()

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
