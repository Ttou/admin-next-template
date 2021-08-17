import { onMounted, ref } from 'vue'

import type { FormRef, ProTableProps } from './types'

export default function ({
  props,
  load
}: {
  props: ProTableProps
  load: Func
}) {
  const formRef = ref<Nullable<FormRef>>(null)
  const formModel = ref({})
  const formExpand = ref(false)

  function init() {
    props.formItems?.forEach(item => {
      if (item.name) {
        switch (item.type) {
          case 'select':
            Reflect.set(formModel.value, item.name, item.defaultValue || null)
            break
          default:
            Reflect.set(formModel.value, item.name, item.defaultValue || '')
            break
        }
      }
    })
  }

  function handleSearch() {
    load()
  }

  function handleReset() {
    formRef.value?.resetFields()
  }

  function handleToggleExpand() {
    formExpand.value = !formExpand.value
  }

  onMounted(() => {
    init()
  })

  return {
    formRef,
    formModel,
    formExpand,
    handleSearch,
    handleReset,
    handleToggleExpand
  }
}
