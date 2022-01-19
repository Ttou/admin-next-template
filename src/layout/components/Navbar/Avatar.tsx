import { Dropdown, Menu, Modal } from 'ant-design-vue'
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

import { SvgIcon } from '@/components'
import { useUserStore } from '@/store'

import * as styles from './index.css'

export default defineComponent({
  name: 'Avatar',
  setup() {
    const router = useRouter()
    const userStore = useUserStore()

    function handleLogout() {
      Modal.confirm({
        title: '提示',
        icon: <SvgIcon class="anticon" name="navbar-exclamation" />,
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
              <SvgIcon class={styles.avatar} name="avatar" />
            </div>
          ),
          overlay: () => (
            <Menu>
              <Menu.Item onClick={this.handleLogout}>
                <SvgIcon
                  name="navbar-logout"
                  style={{
                    marginRight: '5px'
                  }}
                />
                <span>退出登录</span>
              </Menu.Item>
            </Menu>
          )
        }}
      />
    )
  }
})
