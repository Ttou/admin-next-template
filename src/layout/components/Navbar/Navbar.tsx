import { ElSpace } from 'element-plus'
import { defineComponent } from 'vue'

import { Avatar } from './Avatar'
import { Breadcrumb } from './Breadcrumb'
import styles from './Navbar.module.css'
import { ScreenFull } from './ScreenFull'
import { Trigger } from './Trigger'

export default defineComponent({
  name: 'Navbar',
  render() {
    return (
      <div class={styles.navbar}>
        <div class={styles.left}>
          <Trigger />
          <Breadcrumb />
        </div>
        <div class={styles.right}>
          <ElSpace size={15}>
            <ScreenFull />
            <Avatar />
          </ElSpace>
        </div>
      </div>
    )
  }
})
