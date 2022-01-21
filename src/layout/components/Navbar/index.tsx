import { Space } from 'ant-design-vue'
import { defineComponent } from 'vue'

import Avatar from './Avatar'
import Breadcrumb from './Breadcrumb'
import styles from './index.module.css'
import ScreenFull from './ScreenFull'
import SiderTheme from './SiderTheme'
import Trigger from './Trigger'

export default defineComponent({
  name: 'Header',
  render() {
    return (
      <div class={styles.navbar}>
        <div class={styles.left}>
          <Trigger />
          <Breadcrumb />
        </div>
        <div class={styles.right}>
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
