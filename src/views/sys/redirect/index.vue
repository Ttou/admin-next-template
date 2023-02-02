<template>
  <section></section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default defineComponent({
  name: 'RedirectView',
  setup() {
    const route = useRoute()
    const router = useRouter()

    const { params, query } = route
    const path = params.path as string

    router.replace({
      path: path.startsWith('/') ? path : `/${path}`,
      query
    })
  }
})
</script>
