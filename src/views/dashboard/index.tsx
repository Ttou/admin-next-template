import { defineComponent } from 'vue'

import { SvgIcon } from '@/components'

import * as css from './index.css'

export default defineComponent({
  name: 'Dashboard',
  render() {
    return (
      <div class={css.view}>
        <SvgIcon class={css.dashboardIcon} name="view-dashboard" />
      </div>
    )
  }
})
