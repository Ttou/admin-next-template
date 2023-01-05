import { ElBreadcrumb, ElBreadcrumbItem } from 'element-plus'
import { defineComponent, onBeforeMount, reactive, toRefs, watch } from 'vue'
import { useRoute } from 'vue-router'

import styles from './Navbar.module.css'

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
    const renderItem = (item: any, index: number) =>
      index === this.breadcrumbs.length - 1 ? (
        <ElBreadcrumbItem>{item.title}</ElBreadcrumbItem>
      ) : (
        <ElBreadcrumbItem to={{ path: item.path }}>
          {item.title}
        </ElBreadcrumbItem>
      )

    return (
      <ElBreadcrumb class={styles.breadcrumb}>
        {this.breadcrumbs.map(renderItem)}
      </ElBreadcrumb>
    )
  }
})
