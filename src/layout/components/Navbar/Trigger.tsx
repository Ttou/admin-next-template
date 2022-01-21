import { computed, defineComponent } from 'vue'

import { SvgIcon } from '@/components'
import { useSettingStore } from '@/store'

import styles from './index.module.css'

export default defineComponent({
  name: 'Trigger',
  setup() {
    const settingStore = useSettingStore()

    const collapsed = computed(() => !settingStore.siderOpened)

    function handleClick() {
      settingStore.change({
        key: 'siderOpened',
        value: collapsed.value
      })
    }

    return {
      collapsed,
      handleClick
    }
  },
  render() {
    return (
      <SvgIcon
        class={styles.trigger}
        name={this.collapsed ? 'navbar-menu-unfold' : 'navbar-menu-fold'}
        onClick={this.handleClick}
      />
    )
  }
})
