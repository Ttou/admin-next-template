import { Icon } from '@iconify/vue'
import {
  type FormInstance,
  type FormRules,
  ElButton,
  ElForm,
  ElFormItem,
  ElInput
} from 'element-plus'
import { parseUrl } from 'query-string'
import { computed, defineComponent, onMounted, reactive, toRefs } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import { useSettingStore, useUserStore } from '@/store'
import { withEnterKey } from '@/utils'

import styles from './index.module.css'

export default defineComponent({
  name: 'LoginView',
  setup() {
    const state = reactive({
      loading: false,
      redirect: null as Nullable<string>,
      otherQuery: {},
      formRef: {} as FormInstance,
      formModel: {
        username: '',
        password: ''
      },
      formRules: {
        username: [{ required: true, message: '请输入账号', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      } as FormRules
    })

    const route = useRoute()
    const router = useRouter()
    const settingStore = useSettingStore()
    const userStore = useUserStore()

    const title = computed(() => settingStore.title)

    function handleSubmit() {
      state.formRef.validate(valid => {
        if (valid) {
          state.loading = true

          userStore
            .login(state.formModel)
            .then(() => {
              router.replace({
                path: state.redirect || '/',
                query: state.otherQuery
              })
            })
            .finally(() => {
              state.loading = false
            })
        }
      })
    }

    onMounted(() => {
      const { query } = route

      if (query) {
        const str = query.redirect as string

        if (str) {
          const { url, query } = parseUrl(str)

          state.redirect = url
          state.otherQuery = query
        }
      }
    })

    return {
      ...toRefs(state),
      title,
      handleSubmit
    }
  },
  render() {
    return (
      <div class={styles.view}>
        <div class={styles.top}>
          <div class={styles.header}>
            <Icon class={styles.logoIcon} icon={'logos:element'} />
            <span class={styles.title}>{this.title}</span>
          </div>
          <div class={styles.desc}>基于 Element Plus 的后台管理系统</div>
        </div>
        <ElForm
          ref="formRef"
          class={styles.loginForm}
          model={this.formModel}
          rules={this.formRules}
          size={'large'}
        >
          <ElFormItem prop="username">
            <ElInput
              v-model={this.formModel.username}
              placeholder="账号：admin"
              v-slots={{
                ['prefix']: () => <Icon icon={'ep:user'} />
              }}
            />
          </ElFormItem>
          <ElFormItem props="password">
            <ElInput
              v-model={this.formModel.password}
              type={'password'}
              placeholder="密码：任意"
              onKeydown={withEnterKey(this.handleSubmit)}
              v-slots={{
                ['prefix']: () => <Icon icon={'ep:lock'} />
              }}
            />
          </ElFormItem>
          <ElFormItem>
            <ElButton
              type={'primary'}
              loading={this.loading}
              onClick={this.handleSubmit}
              style={{ width: '100%' }}
            >
              登录
            </ElButton>
          </ElFormItem>
        </ElForm>
        <Icon class={styles.backgroundIcon} icon={'custom:background'} />
      </div>
    )
  }
})
