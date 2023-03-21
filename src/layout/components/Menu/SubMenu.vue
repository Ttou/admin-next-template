<template>
  <MainMenu v-if="onlyOneChild" :item="item.children[0]" />
  <el-sub-menu v-else :index="item.path">
    <template #title>
      <Icon v-if="item.meta.icon" class="el-icon" :icon="item.meta.icon" />
      <span>{{ item.meta.title }}</span>
    </template>
    <template #default>
      <template v-for="v in item.children">
        <sub-menu v-if="v.children" :key="v.path" :item="v" />
        <MainMenu v-else :key="v.path" :item="v" />
      </template>
    </template>
  </el-sub-menu>
</template>

<script lang="ts">
import { Icon } from '@iconify/vue'
import { computed, defineComponent, type PropType } from 'vue'

import MainMenu from './MainMenu.vue'

export default defineComponent({
  name: 'SubMenu',
  components: {
    Icon,
    MainMenu
  },
  props: {
    item: {
      type: Object as PropType<Menu>,
      required: true
    }
  },
  setup(props) {
    const onlyOneChild = computed(() => {
      if (props.item.children!.length === 1) {
        if (props.item.meta) {
          if (props.item.meta.alwaysShow) {
            return false
          } else {
            return true
          }
        } else {
          return true
        }
      } else {
        return false
      }
    })

    return {
      onlyOneChild
    }
  }
})
</script>
