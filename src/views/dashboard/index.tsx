import './index.less'

import { defineComponent } from 'vue'

import { SvgIcon } from '@/components'

export default defineComponent({
  name: 'Dashboard',
  render() {
    return (
      <div class="dashboard-view">
        <SvgIcon name="dashboard" />
      </div>
    )
  }
})
