import { Icon } from '@iconify/vue'
import { computed, defineComponent, withModifiers } from 'vue'

import { useSettingStore } from '@/store'

import styles from './Trigger.module.css'

export default defineComponent({
  name: 'Trigger',
  setup() {
    const settingStore = useSettingStore()

    const collapsed = computed(() => !settingStore.sideOpened)

    const icon = computed(() =>
      collapsed.value
        ? '@local:icon-park-outline:menu-unfold'
        : '@local:icon-park-outline:menu-fold'
    )

    function handleClick() {
      settingStore.change({
        key: 'sideOpened',
        value: collapsed.value
      })
    }

    return {
      collapsed,
      icon,
      handleClick
    }
  },
  render() {
    return (
      <Icon
        class={styles.trigger}
        icon={this.icon}
        onClick={withModifiers(this.handleClick, ['native'])}
      />
    )
  }
})
