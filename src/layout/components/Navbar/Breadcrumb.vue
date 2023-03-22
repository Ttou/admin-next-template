<template>
  <el-breadcrumb :class="$style.breadcrumb">
    <template v-for="(v, i) in breadcrumbs" :key="v.path">
      <el-breadcrumb-item v-if="i === breadcrumbs.length - 1">
        {{ v.title }}
      </el-breadcrumb-item>
      <el-breadcrumb-item v-else :to="{ path: v.path }">
        {{ v.title }}
      </el-breadcrumb-item>
    </template>
  </el-breadcrumb>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, reactive, toRefs, watch } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'Breadcrumb',
  setup() {
    const state = reactive({
      breadcrumbs: [] as any[]
    })

    const route = useRoute()

    function createBreadcrumb() {
      const routes = route.matched
      const matched = [] as any

      for (const route of routes) {
        if (route.path === '/') {
          continue
        }

        matched.push({
          path: route.path.startsWith('/') ? route.path : `/${route.path}`,
          title: route.meta?.title || '-'
        })
      }

      state.breadcrumbs = matched
    }

    watch(
      () => route.path,
      path => {
        if (path.startsWith('/redirect/')) {
          return
        }
        createBreadcrumb()
      }
    )

    onBeforeMount(() => {
      createBreadcrumb()
    })

    return {
      ...toRefs(state)
    }
  }
})
</script>

<style module>
.breadcrumb {
  margin-left: 20px;
}
</style>
