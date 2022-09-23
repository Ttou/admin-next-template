import { Icon } from '@iconify/vue'
import { Dropdown, Menu, MenuItem } from 'ant-design-vue'
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

import { useDialog } from '@/hooks'
import { useUserStore } from '@/store'

import styles from './index.module.css'

export default defineComponent({
  name: 'Avatar',
  setup() {
    const router = useRouter()
    const userStore = useUserStore()
    const { showConfirm } = useDialog()

    function handleLogout() {
      showConfirm({
        content: '确认退出登录？',
        async onOk() {
          await userStore.logout()
          router.replace({ path: '/login' })
        }
      })
    }

    return {
      handleLogout
    }
  },
  render() {
    return (
      <Dropdown
        v-slots={{
          default: () => (
            <div class={styles.avatarWrapper}>
              <Icon class={styles.avatar} icon={'custom:avatar'} inline />
            </div>
          ),
          overlay: () => (
            <Menu>
              <MenuItem
                class={styles.avatarDropdownMenu}
                onClick={this.handleLogout}
              >
                <Icon icon={'ant-design:logout-outlined'} inline />
                <span>退出登录</span>
              </MenuItem>
            </Menu>
          )
        }}
        placement={'bottom'}
      />
    )
  }
})
