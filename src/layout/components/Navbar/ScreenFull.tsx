import {
  FullscreenExitOutlined,
  FullscreenOutlined
} from '@ant-design/icons-vue'
import { useFullscreen } from '@vueuse/core'
import { message } from 'ant-design-vue'
import { defineComponent } from 'vue'

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
          <FullscreenExitOutlined />
        ) : (
          <FullscreenOutlined />
        )}
      </div>
    )
  }
})
