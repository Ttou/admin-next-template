import { computed, defineComponent, KeepAlive, Transition } from 'vue'
import { RouterView } from 'vue-router'

import { useTabsStore } from '@/store'

export default defineComponent({
  name: 'ContentComp',
  setup() {
    const tabsStore = useTabsStore()

    const cachedTabs = computed(() => tabsStore.cachedTabs)

    return {
      cachedTabs
    }
  },
  render() {
    return (
      <RouterView
        v-slots={{
          default: ({ Component, route }) => (
            <Transition name="fade-slide" mode="out-in" appear>
              <KeepAlive max={20} include={this.cachedTabs}>
                <Component key={route.fullPath} />
              </KeepAlive>
            </Transition>
          )
        }}
      />
    )
  }
})
