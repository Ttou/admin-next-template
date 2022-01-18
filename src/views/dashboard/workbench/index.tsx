import { defineComponent } from 'vue'

import * as css from './index.css'

export default defineComponent({
  name: 'WorkbenchView',
  render() {
    return (
      <div class={css.view}>
        <h2>工作台</h2>
      </div>
    )
  }
})
