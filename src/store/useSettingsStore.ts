import { defineStore } from 'pinia'

import defaultSetting from '@/settings'

export default defineStore('SettingsStore', {
  state: () => ({
    ...defaultSetting
  }),
  actions: {
    changeSetting() {}
  }
})
