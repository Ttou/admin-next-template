import { Icon } from '@iconify/vue'
import { ElDropdown, ElDropdownItem, ElDropdownMenu } from 'element-plus'
import { defineComponent, reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

import { useUserStore } from '@/store'
import { getElementFnFromInstance } from '@/utils'

import styles from './Avatar.module.css'

type ICommand = 'logout'
type ICommandMap = Record<ICommand, () => void>

export default defineComponent({
  name: 'Avatar',
  setup() {
    const { t } = useI18n()

    const state = reactive({
      commandMap: {
        logout: () => handleLogout()
      } as ICommandMap
    })

    const router = useRouter()
    const userStore = useUserStore()
    const { $msgbox } = getElementFnFromInstance()

    function handleLogout() {
      $msgbox
        .confirm(
          t('app.messages.confirmLogout'),
          t('app.messages.confirmTitle'),
          {
            type: 'warning'
          }
        )
        .then(async () => {
          await userStore.logout()
          router.replace({ path: '/login' })
        })
        .catch(() => {})
    }

    function handleCommand(command: ICommand) {
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
              <ElDropdownItem command="logout">
                <Icon icon="@local:icon-park-outline:logout" inline={true} />
                <span>{this.$t('app.messages.logout')}</span>
              </ElDropdownItem>
            </ElDropdownMenu>
          )
        }}
      </ElDropdown>
    )
  }
})
