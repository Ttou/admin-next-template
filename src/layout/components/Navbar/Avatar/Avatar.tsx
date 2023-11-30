import { Icon } from '@iconify/vue'
import { ElDropdown, ElDropdownItem, ElDropdownMenu } from 'element-plus'
import { defineComponent, reactive } from 'vue'
import { useRouter } from 'vue-router'

import { CONST_ROUTES } from '@/constants'
import { useUserStore } from '@/store'
import { getElementFnFromInstance } from '@/utils'

import styles from './Avatar.module.css'

export default defineComponent({
  name: 'Avatar',
  setup() {
    const state = reactive({
      commandMap: {
        profile: () => handleProfile(),
        logout: () => handleLogout()
      }
    })

    const router = useRouter()
    const userStore = useUserStore()
    const { $msgbox } = getElementFnFromInstance()

    function handleProfile() {
      router.push({ path: CONST_ROUTES.USER_CENTER })
    }

    function handleLogout() {
      $msgbox
        .confirm('确认退出登录？', '提示', { type: 'warning' })
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
      <ElDropdown onCommand={this.handleCommand}>
        {{
          default: () => (
            <div class={styles.avatarWrapper}>
              <Icon
                class={styles.avatar}
                icon="@local:custom:avatar"
                inline={true}
              />
            </div>
          ),
          dropdown: () => (
            <ElDropdownMenu class={styles.avatarDropdownMenu}>
              <ElDropdownItem command="profile">
                <Icon icon="@local:icon-park-outline:user" inline={true} />
                <span>个人中心</span>
              </ElDropdownItem>
              <ElDropdownItem command="logout">
                <Icon icon="@local:icon-park-outline:logout" inline={true} />
                <span>退出登录</span>
              </ElDropdownItem>
            </ElDropdownMenu>
          )
        }}
      </ElDropdown>
    )
  }
})
