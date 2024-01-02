import { computed, defineComponent, KeepAlive, toRaw, Transition } from 'vue'
import { RouterView } from 'vue-router'

import { useTabsStore } from '@/store'

export default defineComponent({
  name: 'Content',
  setup() {
    const tabsStore = useTabsStore()

    const cachedTabs = computed(() => toRaw(tabsStore.cachedTabs))

    return {
      cachedTabs
    }
  },
  render() {
    return (
      <RouterView>
        {{
          default: ({ Component, route }) => (
            <Transition name="fade-slide" mode="out-in" appear>
              <KeepAlive>
                <Component key={route.fullPath} />
              </KeepAlive>
            </Transition>
          )
        }}
      </RouterView>
    )
  }
})
