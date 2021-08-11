import { Breadcrumb } from 'ant-design-vue'
import { defineComponent, reactive, watchEffect } from 'vue'
import { RouteLocationMatched, RouterLink, useRouter } from 'vue-router'

export default defineComponent({
  name: 'Breadcrumb',
  setup() {
    const state = reactive({
      routes: [] as any
    })

    const router = useRouter()

    function getBreadcrumbName(route) {
      return route.meta?.title || 'undefined'
    }

    function createBreadcrumb(routes: RouteLocationMatched[]) {
      const matched = [] as any

      for (const route of routes) {
        if (route.path === '/') {
          continue
        }

        const newRoute = {
          path: route.path.startsWith('/') ? route.path : `/${route.path}`,
          breadcrumbName: route.meta?.title || 'undefined',
          children: [] as any
        }

        if (route.children) {
          newRoute.children = route.children.map(child => ({
            path: route.path + `/${child.path}`,
            breadcrumbName: child.meta?.title || 'undefined'
          }))
        }

        matched.push(newRoute)
      }

      return matched
    }

    watchEffect(() => {
      const currentRoute = router.currentRoute.value

      state.routes = createBreadcrumb(currentRoute.matched)
    })

    return {
      state,
      getBreadcrumbName
    }
  },
  render() {
    return (
      <Breadcrumb
        class="breadcrumb"
        routes={this.state.routes}
        itemRender={({ route, routes }) =>
          routes.indexOf(route) === routes.length - 1 ? (
            <span>{route.breadcrumbName}</span>
          ) : (
            <RouterLink to={route.path}>{route.breadcrumbName}</RouterLink>
          )
        }
      ></Breadcrumb>
    )
  }
})
