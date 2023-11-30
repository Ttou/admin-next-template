import { Icon } from '@iconify/vue'
import { defineComponent } from 'vue'

import styles from './Logo.module.css'

export default defineComponent({
  name: 'Logo',
  render() {
    return (
      <div class={styles.logo}>
        <Icon class={styles.logoIcon} icon="@local:custom:logo" />
      </div>
    )
  }
})
