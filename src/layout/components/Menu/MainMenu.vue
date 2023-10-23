<template>
  <el-menu-item v-if="show" :index="item.path" @click="handleJump">
    <Icon v-if="item.meta.icon" :icon="item.meta.icon" />
    <template #title>
      <span>{{ item.meta.title }}</span>
    </template>
  </el-menu-item>
</template>

<script lang="ts">
import { Icon } from '@iconify/vue'
import { computed, defineComponent, type PropType } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default defineComponent({
  name: 'MainMenu',
  components: {
    Icon
  },
  props: {
    item: {
      type: Object as PropType<Menu>,
      required: true
    }
  },
  setup(props) {
    const route = useRoute()
    const router = useRouter()

    const show = computed(() => {
      if (props.item.meta) {
        if (props.item.meta.hidden) {
          return false
        } else {
          return true
        }
      } else {
        return false
      }
    })

    function handleJump() {
      if (route.path === props.item.path) {
        return
      }
      router.push(props.item.path).catch(err => {
        console.error(err)
      })
    }

    return {
      show,
      handleJump
    }
  }
})
</script>
