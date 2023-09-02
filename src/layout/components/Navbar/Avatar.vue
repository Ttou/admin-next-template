<template>
  <el-dropdown @command="handleCommand">
    <template #default>
      <div :class="$style.avatarWrapper">
        <Icon
          :class="$style.avatar"
          icon="@local:custom:avatar"
          :inline="true"
        />
      </div>
    </template>
    <template #dropdown>
      <el-dropdown-menu :class="$style.avatarDropdownMenu">
        <el-dropdown-item command="logout">
          <Icon icon="@local:icon-park-outline:logout" :inline="true" />
          <span>退出登录</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts">
import { Icon } from '@iconify/vue'
import { defineComponent, reactive } from 'vue'
import { useRouter } from 'vue-router'

import { useUserStore } from '@/store'
import { getElementFnFromInstance } from '@/utils'

export default defineComponent({
  name: 'Avatar',
  components: {
    Icon
  },
  setup() {
    const state = reactive({
      commandMap: {
        logout: () => handleLogout()
      }
    })

    const router = useRouter()
    const userStore = useUserStore()
    const { $msgbox } = getElementFnFromInstance()

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
  }
})
</script>

<style module>
.avatarWrapper {
  display: flex;
  align-items: center;
  outline: none;
}

.avatar {
  width: 24px;
  height: 24px;
}

.avatarDropdownMenu {
}

.avatarDropdownMenu :global(svg) {
  margin-right: 5px;
}
</style>
