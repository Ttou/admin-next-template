import { defineStore } from 'pinia'

import { DEFAULT_SETTING } from '@/constants'

export const useSettingStore = defineStore('setting', {
  state: () => {
    return {
      ...DEFAULT_SETTING
    }
  },
  actions: {
    change({ key, value }) {
      this.$state[key] = value
    }
  }
})
