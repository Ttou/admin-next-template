import './index.less'

import { defineComponent } from 'vue'

import { SvgIcon } from '@/components'

export default defineComponent({
  name: 'Logo',
  render() {
    return (
      <div class="logo">
        <SvgIcon class="logo-icon" name="ant-design" />
      </div>
    )
  }
})
