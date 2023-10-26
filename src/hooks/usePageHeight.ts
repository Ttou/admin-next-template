import { computed, onMounted, ref } from 'vue'

import { useSettingStore } from '@/store'

interface Params {
  extraHeight: number
}

export function usePageHeight(params?: Params) {
  const pageHeight = ref(0)

  const pageHeightPx = computed(() => pageHeight.value + 'px')

  const settingStore = useSettingStore()

  function calcPageHeight() {
    const el = document.querySelector('.el-scrollbar__wrap.page')

    pageHeight.value =
      el!.scrollHeight -
      (settingStore.fixedHeader ? 24 : 114) -
      (params?.extraHeight || 0)
  }

  onMounted(() => {
    calcPageHeight()
  })

  return {
    pageHeight,
    pageHeightPx
  }
}
