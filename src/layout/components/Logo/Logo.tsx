import { Icon } from '@iconify/vue'
import type { CSSProperties } from 'vue'
import { computed, defineComponent, ref, watch } from 'vue'

import { useSettingStore } from '@/store'

import styles from './Logo.module.css'

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
        <Icon class={styles.logoIcon} icon={'logos:ant-design'} />
      </div>
    )
  }
})
