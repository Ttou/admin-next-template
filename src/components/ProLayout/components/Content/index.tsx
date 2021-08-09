import { computed, defineComponent, KeepAlive, Transition } from 'vue'
import { RouterView } from 'vue-router'
import { useStore } from 'vuex'

import { Key } from '@/store'

export default defineComponent({
  name: 'Content',
  setup() {
    const store = useStore(Key)

    const cachedTabs = computed(() => store.state.tabs.cachedTabs)

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
