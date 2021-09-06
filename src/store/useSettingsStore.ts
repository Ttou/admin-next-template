import { defineStore } from 'pinia'

import defaultSetting from '@/settings'

export default defineStore('SettingsStore', {
  state: () => {
    return {
      ...defaultSetting
    }
  },
  actions: {
    change({ key, value }) {
      this.$state[key] = value
    }
  }
})
