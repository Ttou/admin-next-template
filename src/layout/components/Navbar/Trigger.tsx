import { Icon } from '@iconify/vue'
import { computed, defineComponent } from 'vue'

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
      <Icon
        class={styles.trigger}
        icon={
          this.collapsed
            ? 'ant-design:menu-unfold-outlined'
            : 'ant-design:menu-fold-outlined'
        }
        onClick={this.handleClick}
      />
    )
  }
})
