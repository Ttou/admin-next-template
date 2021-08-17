import { computed, ref } from 'vue'

import type { TableSize, TableSizeOption } from './types'

export default function ({ load }: { load: Func }) {
  const tableSize = ref<TableSize>('small')
  const tableSizeOptions = ref([
    {
      label: '默认',
      value: 'default'
    },
    {
      label: '中等',
      value: 'middle'
    },
    {
      label: '紧凑',
      value: 'small'
    }
  ] as TableSizeOption[])

  const selectedSizes = computed(() => [tableSize.value])

  function handleReload() {
    load()
  }

  function handleSelectSize(size: TableSize) {
    tableSize.value = size
  }

  return {
    tableSize,
    tableSizeOptions,
    selectedSizes,
    handleReload,
    handleSelectSize
  }
}
