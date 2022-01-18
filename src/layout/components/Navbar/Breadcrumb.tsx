import { Breadcrumb } from 'ant-design-vue'
import { defineComponent, ref, watchEffect } from 'vue'
import { RouteLocationMatched, RouterLink, useRouter } from 'vue-router'

import * as css from './index.css'

export default defineComponent({
  name: 'BreadcrumbComp',
  setup() {
    const routes = ref([] as any[])

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

      routes.value = createBreadcrumb(currentRoute.matched)
    })

    return {
      routes,
      getBreadcrumbName
    }
  },
  render() {
    return (
      <Breadcrumb
        class={css.breadcrumb}
        routes={this.routes}
        itemRender={({ route, routes }) =>
          routes.indexOf(route) === routes.length - 1 ? (
            <span>{route.breadcrumbName}</span>
          ) : (
            <RouterLink to={route.path}>{route.breadcrumbName}</RouterLink>
          )
        }
      />
    )
  }
})
