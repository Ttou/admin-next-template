import { defineComponent } from 'vue'

import * as styles from './index.css'

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
