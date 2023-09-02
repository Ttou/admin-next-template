<template>
  <el-popover
    v-model:visible="show"
    placement="bottom"
    width="400"
    trigger="click"
  >
    <el-tabs v-model="activeIconSet">
      <el-tab-pane
        v-for="item in iconList"
        :key="item.value"
        :name="item.value"
        :label="item.label"
      >
        <IconVirtualList
          :ref="e => (listRefs[item.value] = e)"
          :data="item.icons"
          :activeIconName="modelValue"
          @change="handleChange"
        />
      </el-tab-pane>
    </el-tabs>
    <template #reference>
      <el-input
        :modelValue="modelValue"
        placeholder="请选择图标"
        readonly
      ></el-input>
    </template>
  </el-popover>
</template>

<script lang="ts">
import { defineComponent, nextTick, reactive, toRefs, watch } from 'vue'

import IconVirtualList from './IconVirtualList.vue'
import { iconList, iconVirtualPickProps } from './IconVirtualPick.constant'

export default defineComponent({
  name: 'IconVirtualPick',
  components: { IconVirtualList },
  props: iconVirtualPickProps(),
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const state = reactive({
      show: false,
      activeIconSet: iconList[0].value,
      activeIconIndex: 0,
      listRefs: {} as Record<string, ComponentRef>
    })

    function handleChange({ value, index }: any) {
      emit('update:modelValue', value)
      state.activeIconIndex = index
      state.show = false
    }

    watch(
      () => state.show,
      val => {
        if (val) {
          nextTick(() => {
            state.listRefs[state.activeIconSet]?.scrollTo(state.activeIconIndex)
          })
        }
      }
    )

    watch(
      () => state.activeIconSet,
      () => {
        nextTick(() => {
          state.listRefs[state.activeIconSet]?.scrollTo(0)
        })
      }
    )

    watch(
      () => props.modelValue,
      val => {
        if (val) {
          const [provider, iconSet, iconName] = val.split(':')
          state.activeIconSet = iconSet
          state.activeIconIndex = iconList
            .find(v => v.value === iconSet)!
            .icons.findIndex(v => v.includes(val))
        }
      },
      {
        immediate: true
      }
    )

    return {
      ...toRefs(state),
      iconList,
      handleChange
    }
  }
})
</script>
