import type { CSSProperties } from 'vue'
import { computed, defineComponent, ref, watch } from 'vue'

import { SvgIcon } from '@/components'
import { useSettingStore } from '@/store'

import * as styles from './index.css'

export default defineComponent({
  name: 'Logo',
  setup() {
    const style = ref({} as CSSProperties)

    const settingStore = useSettingStore()

    const setting = computed(() => settingStore.$state)

    watch(
      setting,
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
      <div class={styles.logo} style={this.style}>
        <SvgIcon class={styles.logoIcon} name="logo" />
      </div>
    )
  }
})
