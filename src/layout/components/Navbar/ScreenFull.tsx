import { useFullscreen } from '@vueuse/core'
import { message } from 'ant-design-vue'
import { defineComponent } from 'vue'

import { SvgIcon } from '@/components'

export default defineComponent({
  name: 'ScreenFull',
  setup() {
    const { isFullscreen, isSupported, toggle } = useFullscreen()

    function handleClick() {
      if (isSupported) {
        toggle()
      } else {
        message.warn('浏览器不支持全屏')
      }
    }

    return {
      isFullscreen,
      handleClick
    }
  },
  render() {
    return (
      <div
        title="全屏"
        style={{ cursor: 'pointer' }}
        onClick={this.handleClick}
      >
        {this.isFullscreen ? (
          <SvgIcon name="navbar-fullscreen-exit" />
        ) : (
          <SvgIcon name="navbar-fullscreen" />
        )}
      </div>
    )
  }
})
