import { defineComponent } from 'vue'

import styles from './index.module.css'

export default defineComponent({
  name: 'WorkbenchView',
  render() {
    return (
      <div class={styles.view}>
        <h2>工作台</h2>
      </div>
    )
  }
})
