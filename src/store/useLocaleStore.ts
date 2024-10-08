import { useStorage, useTitle } from '@vueuse/core'
import { defineStore } from 'pinia'
import { reactive, toRefs } from 'vue'

import i18n, { type ILocale } from '@/i18n'

export const useLocaleStore = defineStore('locale', () => {
  const state = reactive({
    locale: useStorage<ILocale>('locale', 'zh_CN'),
    title: useTitle('')
  })

  function setLocale(locale: ILocale) {
    state.locale = locale
    i18n.global.locale.value = locale
    state.title = i18n.global.t('app.title')
  }

  if (state.locale) {
    i18n.global.locale.value = state.locale
    state.title = i18n.global.t('app.title')
  }

  return {
    ...toRefs(state),
    setLocale
  }
})
