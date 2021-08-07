import { Button, Space } from 'ant-design-vue'
import { defineComponent, reactive, ref } from 'vue'

import { FormPlus } from '@/components'
import type { FormProps, FormRef } from '@/components/FormPlus/types'

export default defineComponent({
  name: 'DemoForm',
  setup() {
    const formRef = ref<FormRef>(null)
    const formConfig = reactive<FormProps>({
      options: {
        props: {
          labelCol: { span: 4 },
          wrapperCol: { span: 20 }
        },
        items: [
          {
            name: 'name',
            label: 'Activity name',
            type: 'input',
            rules: [
              { required: true, message: '请输入', trigger: 'blur' },
              { min: 3, max: 5, message: '长度 3 到 5', trigger: 'blur' }
            ]
          },
          {
            name: 'zone',
            label: 'Activity zone',
            type: 'select',
            options: [
              { label: 'ShangHai', value: 'shanghai' },
              { label: 'BeiJing', value: 'beijing' }
            ],
            rules: [
              {
                required: true,
                message: '请选择',
                trigger: 'change'
              }
            ]
          },
          {
            name: 'date',
            label: 'Activity time',
            type: 'date-picker',
            rules: [
              {
                required: true,
                message: '请选择',
                trigger: 'change',
                type: 'object'
              }
            ],
            componentProps: {
              style: { width: '100%' }
            }
          },
          {
            name: 'delivery',
            label: 'Instant delivery',
            type: 'switch'
          },
          {
            name: 'type',
            label: 'Activity type',
            type: 'checkbox',
            options: [
              { label: 'Online', value: '1' },
              { label: 'Promotion', value: '2' },
              { label: 'Offline', value: '3' }
            ],
            rules: [
              {
                type: 'array',
                required: true,
                message: '请选择',
                trigger: 'change'
              }
            ]
          },
          {
            name: 'resource',
            label: 'Resources',
            type: 'radio',
            options: [
              { label: 'Sponsor', value: '1' },
              { label: 'Venue', value: '2' }
            ],
            rules: [
              {
                required: true,
                message: '请选择',
                trigger: 'change'
              }
            ]
          },
          {
            name: 'desc',
            label: 'Activity form',
            type: 'textarea',
            rules: [{ required: true, message: '请输入', trigger: 'blur' }]
          },
          {
            render: () => (
              <Space>
                <Button onClick={handleReset} danger>
                  重置
                </Button>
                <Button onClick={handleCancel}>取消</Button>
                <Button type="primary" onClick={handleSubmit}>
                  确定
                </Button>
              </Space>
            ),
            props: {
              wrapperCol: {
                span: 14,
                offset: 4
              }
            }
          }
        ]
      }
    }) as unknown

    function handleReset() {
      formRef.value?.form.resetFields()
    }

    function handleCancel() {
      formRef.value?.form.clearValidate()
    }

    function handleSubmit() {
      formRef.value?.form.validate()
    }

    return {
      formRef,
      formConfig
    }
  },
  render() {
    return (
      <div>
        <FormPlus ref="formRef" {...this.formConfig} />
      </div>
    )
  }
})
