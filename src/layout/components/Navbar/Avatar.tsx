import { Icon } from '@iconify/vue'
import {
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElMessageBox
} from 'element-plus'
import { defineComponent, reactive } from 'vue'
import { useRouter } from 'vue-router'

import { useUserStore } from '@/store'

import styles from './Navbar.module.css'

export default defineComponent({
  name: 'Avatar',
  setup() {
    const state = reactive({
      commandMap: {
        logout: () => handleLogout()
      }
    })

    const router = useRouter()
    const userStore = useUserStore()

    function handleLogout() {
      ElMessageBox.confirm('确认退出登录？')
        .then(async () => {
          await userStore.logout()
          router.replace({ path: '/login' })
        })
        .catch(() => {})
    }

    function handleCommand(command: any) {
      state.commandMap[command]()
    }

    return {
      handleCommand
    }
  },
  render() {
    return (
      <ElDropdown
        onCommand={this.handleCommand}
        v-slots={{
          ['default']: () => (
            <div class={styles.avatarWrapper}>
              <Icon class={styles.avatar} icon={'custom:avatar'} inline />
            </div>
          ),
          ['dropdown']: () => (
            <ElDropdownMenu class={styles.avatarDropdownMenu}>
              <ElDropdownItem command="logout">
                <Icon icon={'ant-design:logout-outlined'} inline />
                <span>退出登录</span>
              </ElDropdownItem>
            </ElDropdownMenu>
          )
        }}
        placement={'bottom'}
      />
    )
  }
})
