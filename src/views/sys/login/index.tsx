import './index.less'

import { LockOutlined, UserOutlined } from '@ant-design/icons-vue'
import { Button } from 'ant-design-vue'
import { omit } from 'lodash-es'
import { computed, defineComponent, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'

import { ProForm, SvgIcon } from '@/components'
import type { FormProps, FormRef } from '@/components/ProForm/types'
import { Actions, Key } from '@/store'

export default defineComponent({
  name: 'Login',
  setup() {
    const route = useRoute()
    const router = useRouter()
    const store = useStore(Key)

    const loading = ref(false)
    const redirect = ref<Nullable<string>>(null)
    const otherQuery = ref({})
    const formRef = ref<FormRef>(null)
    const formConfig = ref<FormProps>({
      options: {
        props: {
          class: 'login-form'
        },
        items: [
          {
            name: 'username',
            type: 'input',
            rules: [{ required: true, message: '请输入账号', trigger: 'blur' }],
            props: { wrapperCol: { span: 24 } },
            componentProps: {
              placeholder: '账号：admin',
              prefix: <UserOutlined />,
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
              prefix: <LockOutlined />,
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
      }
    })

    const title = computed(() => store.state.settings.title)

    function handleSubmit() {
      formRef.value?.form
        .validate()
        .then(() => {
          loading.value = true

          store
            .dispatch(Actions.user.login, formRef.value?.formModel)
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
      <div class="login-view">
        <div class="top">
          <div class="header">
            <SvgIcon class="logo" name="ant-design" />
            <span class="title">{this.title}</span>
          </div>
          <div class="desc">基于 Ant Design 的后台管理系统</div>
        </div>
        {/* @ts-ignore */}
        <ProForm ref="formRef" {...this.formConfig} />
        <SvgIcon name="background" class="background" />
      </div>
    )
  }
})
