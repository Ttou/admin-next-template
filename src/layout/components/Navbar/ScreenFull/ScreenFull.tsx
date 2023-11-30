import { Icon } from '@iconify/vue'
import { useFullscreen } from '@vueuse/core'
import { computed, defineComponent } from 'vue'

import { getElementFnFromInstance } from '@/utils'

export default defineComponent({
  name: 'ScreenFull',
  setup() {
    const { isFullscreen, isSupported, toggle } = useFullscreen()
    const { $message } = getElementFnFromInstance()

    const icon = computed(() =>
      isFullscreen.value
        ? '@local:icon-park-outline:off-screen'
        : '@local:icon-park-outline:full-screen'
    )

    function handleClick() {
      if (isSupported) {
        toggle()
      } else {
        $message.warning('浏览器不支持全屏')
      }
    }

    return {
      icon,
      handleClick
    }
  },
  render() {
    return (
      <div title="全屏" onClick={this.handleClick}>
        <Icon icon={this.icon} inline={true} />
      </div>
    )
  }
})
