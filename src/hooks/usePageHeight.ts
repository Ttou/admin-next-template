import { computed, onMounted, ref } from 'vue'

interface Params {
  extraHeight: number
}

export function usePageHeight(params?: Params) {
  const pageHeight = ref(0)

  const pageHeightPx = computed(() => pageHeight.value + 'px')

  function calcPageHeight() {
    const el = document.querySelector('#page')

    pageHeight.value = el!.scrollHeight - 20 - (params?.extraHeight || 0)
  }

  onMounted(() => {
    calcPageHeight()
  })

  return {
    pageHeight,
    pageHeightPx
  }
}
