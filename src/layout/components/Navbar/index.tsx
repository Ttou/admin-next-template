import { Space } from 'ant-design-vue'
import { defineComponent } from 'vue'

import Avatar from './Avatar'
import Breadcrumb from './Breadcrumb'
import * as css from './index.css'
import ScreenFull from './ScreenFull'
import SiderTheme from './SiderTheme'
import Trigger from './Trigger'

export default defineComponent({
  name: 'HeaderComp',
  render() {
    return (
      <div class={css.navbar}>
        <div class={css.left}>
          <Trigger />
          <Breadcrumb />
        </div>
        <div class={css.right}>
          <Space>
            <ScreenFull />
            <SiderTheme />
            <Avatar />
          </Space>
        </div>
      </div>
    )
  }
})
