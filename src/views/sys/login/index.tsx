import { Button } from 'ant-design-vue'
import { omit } from 'lodash-es'
import { computed, defineComponent, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import { ProForm, SvgIcon } from '@/components'
import type { FormRef, ProFormProps } from '@/components/ProForm/types'
import { useSettingStore, useUserStore } from '@/store'

import * as css from './index.css'

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
    const formRef = ref<FormRef>(null)
    const formConfig = ref<ProFormProps>({
      items: [
        {
          name: 'username',
          type: 'input',
          rules: [{ required: true, message: '请输入账号', trigger: 'blur' }],
          props: { wrapperCol: { span: 24 } },
          componentProps: {
            placeholder: '账号：admin',
            prefix: <SvgIcon name="view-user" />,
            size: 'large'
          }
        },
        {
          name: 'password',
          type: 'input-password',
          rules: [{ required: true, message: '请输入密码', trigger: 'blur' }],
          props: { wrapperCol: { span: 24 } },
          componentProps: {
            placeholder: '密码：任意',
            prefix: <SvgIcon name="view-lock" />,
            size: 'large',
            onPressEnter: () => handleSubmit()
          }
        },
        {
          render: () => (
            <Button
              size="large"
              type="primary"
              loading={loading.value}
              onClick={handleSubmit}
              style={{ width: '100%' }}
            >
              登录
            </Button>
          ),
          props: {
            wrapperCol: { span: 24 }
          }
        }
      ]
    })

    const title = computed(() => settingStore.title)

    function handleSubmit() {
      formRef.value?.form
        .validate()
        .then(() => {
          loading.value = true

          userStore
            .login(formRef.value!.model)
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
        otherQuery.value = omit(query, ['redirect'])
      }
    })

    return {
      title,
      formRef,
      formConfig
    }
  },
  render() {
    return (
      <div class={css.view}>
        <div class={css.top}>
          <div class={css.header}>
            <SvgIcon class={css.logoIcon} name="logo" />
            <span class={css.title}>{this.title}</span>
          </div>
          <div class={css.desc}>基于 Ant Design 的后台管理系统</div>
        </div>
        {/* @ts-ignore */}
        <ProForm ref="formRef" class={css.loginForm} {...this.formConfig} />
        <SvgIcon class={css.backgroundIcon} name="background" />
      </div>
    )
  }
})
