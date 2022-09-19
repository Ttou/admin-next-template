import { Icon } from '@iconify/vue'
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
      <div title="全屏" onClick={this.handleClick}>
        {this.isFullscreen ? (
          <Icon icon={'ant-design:fullscreen-exit-outlined'} />
        ) : (
          <Icon icon={'ant-design:fullscreen-outlined'} />
        )}
      </div>
    )
  }
})
