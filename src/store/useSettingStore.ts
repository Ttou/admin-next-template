import { defineStore } from 'pinia'
import { reactive, toRefs } from 'vue'

import { SETTING } from '@/constants'

import store from '.'

export const useSettingStore = defineStore('setting', () => {
  const state = reactive({
    ...SETTING
  })

  function change({ key, value }: any) {
    Object.assign(state, { [key]: value })
  }

  return {
    ...toRefs(state),
    change
  }
})

export function useSettingStoreHook() {
  return useSettingStore(store)
}
