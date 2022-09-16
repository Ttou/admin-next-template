import { defineStore } from 'pinia'
import { reactive, toRefs } from 'vue'

import { SETTING } from '@/constants'

import store from '.'

export const useSettingStore = defineStore('setting', () => {
  const setting = reactive({
    ...SETTING
  })

  function change({ key, value }) {
    setting[key] = value
  }

  return {
    ...toRefs(setting),
    change
  }
})

export function useSettingStoreHook() {
  return useSettingStore(store)
}
