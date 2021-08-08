import { Breadcrumb } from 'ant-design-vue'
import { defineComponent, reactive, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

export default defineComponent({
  name: 'Breadcrumb',
  setup() {
    const state = reactive({
      routes: [] as any
    })

    const route = useRoute()

    watch(
      () => route.path,
      () => {
        if (route.name === 'Dashboard') {
          state.routes = [
            {
              meta: { title: 'Dashboard' }
            }
          ]
        } else {
          state.routes = route.matched
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
            <span>{(route as any).meta.title}</span>
          ) : (
            <RouterLink to={route.path}>{(route as any).meta.title}</RouterLink>
          )
        }
      ></Breadcrumb>
    )
  }
})
