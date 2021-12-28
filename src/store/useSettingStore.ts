import { defineStore } from 'pinia'

import { SETTING } from '@/constants'

export function useSettingStore() {
  return defineStore('setting', {
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
  })()
}
