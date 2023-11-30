import { ElBreadcrumb, ElBreadcrumbItem } from 'element-plus'
import { defineComponent, onBeforeMount, reactive, toRefs, watch } from 'vue'
import { useRoute } from 'vue-router'

import styles from './Breadcrumb.module.css'

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
  },
  render() {
    return (
      <ElBreadcrumb class={styles.breadcrumb}>
        {this.breadcrumbs.map((v, i) =>
          i === this.breadcrumbs.length - 1 ? (
            <ElBreadcrumbItem>{v.title}</ElBreadcrumbItem>
          ) : (
            <ElBreadcrumbItem to={{ path: v.path }}>{v.title}</ElBreadcrumbItem>
          )
        )}
      </ElBreadcrumb>
    )
  }
})
