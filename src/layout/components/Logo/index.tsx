import './index.less'

import type { CSSProperties } from 'vue'
import { computed, defineComponent, ref, watch } from 'vue'

import { SvgIcon } from '@/components'
import { useSettingsStore } from '@/store'

export default defineComponent({
  name: 'Logo',
  setup() {
    const style = ref({} as CSSProperties)

    const settingsStore = useSettingsStore()

    const settings = computed(() => settingsStore.$state)

    watch(
      settings,
      val => {
        style.value.height = val.siderLogoHeight
        style.value.borderRight =
          val.siderTheme === 'light' ? '1px solid #f0f0f0' : 'unset'
      },
      {
        deep: true,
        immediate: true
      }
    )

    return {
      style
    }
  },
  render() {
    return (
      <div class="logo" style={this.style}>
        <SvgIcon class="logo-icon" name="ant-design" />
      </div>
    )
  }
})
