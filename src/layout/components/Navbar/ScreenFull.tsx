import { Icon } from '@iconify/vue'
import { useFullscreen } from '@vueuse/core'
import { ElMessage } from 'element-plus'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ScreenFull',
  setup() {
    const { isFullscreen, isSupported, toggle } = useFullscreen()

    function handleClick() {
      if (isSupported) {
        toggle()
      } else {
        ElMessage.warning('浏览器不支持全屏')
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
          <Icon icon={'ant-design:fullscreen-exit-outlined'} inline />
        ) : (
          <Icon icon={'ant-design:fullscreen-outlined'} inline />
        )}
      </div>
    )
  }
})
