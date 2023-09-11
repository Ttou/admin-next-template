<template>
  <div v-bind="containerProps" style="height: 300px">
    <div v-bind="wrapperProps">
      <div v-for="row in list" :key="row.index">
        <div
          v-for="icon in row.data"
          :key="icon"
          class="iconItem"
          :class="['iconItem', { selected: icon === activeIconName }]"
          @click="handleSelect(icon, row.index)"
        >
          <Icon :icon="icon" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Icon } from '@iconify/vue'
import { useVirtualList } from '@vueuse/core'
import { computed, defineComponent } from 'vue'

import { iconVirtualListProps } from './IconVirtualList.constant'

export default defineComponent({
  name: 'IconVirtualList',
  components: { Icon },
  props: iconVirtualListProps(),
  emits: ['change'],
  setup(props, { emit }) {
    const filteredData = computed(() => props.data)

    const { list, containerProps, wrapperProps, scrollTo } = useVirtualList(
      filteredData,
      { itemHeight: 50 }
    )

    function handleSelect(value: string, index: number) {
      emit('change', { value, index })
    }

    return {
      list,
      containerProps,
      wrapperProps,
      scrollTo,
      handleSelect
    }
  }
})
</script>

<style scoped>
.iconItem {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  margin-top: 10px;
  margin-left: 10px;
  border: 1px solid #333;
  font-size: 24px;
  cursor: pointer;
  box-sizing: border-box;

  &.selected {
    border-color: #409eff;
    color: #409eff;
    border-width: 2px;
  }
}
</style>
