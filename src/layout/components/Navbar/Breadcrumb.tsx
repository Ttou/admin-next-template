import { Breadcrumb } from 'ant-design-vue'
import { cloneDeep } from 'lodash-es'
import { resolve } from 'path'
import { defineComponent, reactive, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

export default defineComponent({
  name: 'Breadcrumb',
  setup() {
    const state = reactive({
      routes: [] as any
    })

    const route = useRoute()

    function createBreadcrumb(routes: any[], basePath = '/') {
      for (const route of routes) {
        route.path = resolve(basePath, route.path)
        route.breadcrumbName = route.meta.title

        if (route.children) {
          createBreadcrumb(route.children, route.path)
        }
      }

      return routes
    }

    watch(
      () => route.path,
      () => {
        if (route.name === 'Dashboard') {
          state.routes = []
        } else {
          const routes = createBreadcrumb(cloneDeep(route.matched))
          state.routes = routes
        }
      },
      {
        immediate: true,
        deep: false
      }
    )

    return {
      state
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
