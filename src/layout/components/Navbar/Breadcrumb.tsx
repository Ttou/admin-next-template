import { Breadcrumb } from 'ant-design-vue'
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

    watch(
      () => route.path,
      () => {
        if (route.name === 'Dashboard') {
          state.routes = [route.matched[1]]
        } else {
          state.routes = route.matched
          console.log(route.matched)
        }
      },
      {
        immediate: true
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
        itemRender={({ route, routes, paths }) =>
          routes.indexOf(route) === routes.length - 1 ? (
            <span>{route.meta.title}</span>
          ) : (
            <RouterLink to={'/'}>{route.meta.title}</RouterLink>
          )
        }
      ></Breadcrumb>
    )
  }
})
