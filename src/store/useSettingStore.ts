import { defineStore } from 'pinia'

import { SETTING } from '@/constants'

export const useSettingStore = defineStore('setting', {
  state: () => {
    return {
      ...SETTING
    }
  },
  actions: {
    change({ key, value }) {
      this.$state[key] = value
    }
  }
})
