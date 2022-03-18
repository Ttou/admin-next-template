import { Button, Form, FormItem, Input, InputPassword } from 'ant-design-vue'
import { parseUrl } from 'query-string'
import { computed, defineComponent, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import { SvgIcon } from '@/components'
import { useSettingStore, useUserStore } from '@/store'

import styles from './index.module.css'

export default defineComponent({
  name: 'LoginView',
  setup() {
    const route = useRoute()
    const router = useRouter()
    const settingStore = useSettingStore()
    const userStore = useUserStore()

    const loading = ref(false)
    const redirect = ref<Nullable<string>>(null)
    const otherQuery = ref({})
    const formModel = ref({
      username: '',
      password: ''
    })
    const formRules = ref({
      username: [{ required: true, message: '请输入账号', trigger: 'blur' }],
      password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
    } as FormRules)

    const { useForm } = Form

    const formRef = useForm(formModel.value, formRules.value)

    const title = computed(() => settingStore.title)

    function handleSubmit() {
      formRef
        .validate()
        .then(() => {
          loading.value = true

          userStore
            .login(formModel.value)
            .then(() => {
              router.replace({
                path: redirect.value || '/',
                query: otherQuery.value
              })
            })
            .finally(() => {
              loading.value = false
            })
        })
        .catch(() => {})
    }

    onMounted(() => {
      const { query } = route

      if (query) {
        redirect.value = query.redirect as string
        otherQuery.value = parseUrl(redirect.value).searchQuery
      }
    })

    return {
      title,
      loading,
      formRef,
      formModel,
      handleSubmit
    }
  },
  render() {
    return (
      <div class={styles.view}>
        <div class={styles.top}>
          <div class={styles.header}>
            <SvgIcon class={styles.logoIcon} name="logo" />
            <span class={styles.title}>{this.title}</span>
          </div>
          <div class={styles.desc}>基于 Ant Design 的后台管理系统</div>
        </div>
        <Form class={styles.loginForm}>
          <FormItem
            name="username"
            wrapperCol={{ span: 24 }}
            {...this.formRef.validateInfos.username}
          >
            <Input
              v-model:value={this.formModel.username}
              placeholder="账号：admin"
              size="large"
              prefix={<SvgIcon name="view-user" />}
            />
          </FormItem>
          <FormItem
            name="password"
            wrapperCol={{ span: 24 }}
            {...this.formRef.validateInfos.password}
          >
            <InputPassword
              v-model:value={this.formModel.password}
              placeholder="密码：任意"
              size="large"
              prefix={<SvgIcon name="view-lock" />}
              onPressEnter={this.handleSubmit}
            />
          </FormItem>
          <FormItem wrapperCol={{ span: 24 }}>
            <Button
              size="large"
              type="primary"
              loading={this.loading}
              onClick={this.handleSubmit}
              style={{ width: '100%' }}
            >
              登录
            </Button>
          </FormItem>
        </Form>
        <SvgIcon class={styles.backgroundIcon} name="background" />
      </div>
    )
  }
})
