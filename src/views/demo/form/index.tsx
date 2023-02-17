import {
  ElButton,
  ElCheckbox,
  ElCheckboxGroup,
  ElDatePicker,
  ElForm,
  ElFormItem,
  ElInput,
  ElOption,
  ElRadio,
  ElRadioGroup,
  ElSelect,
  ElSpace,
  ElSwitch,
  type FormInstance,
  type FormRules
} from 'element-plus'
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      formRef: {} as FormInstance,
      formModel: {
        name: '',
        zone: '',
        date: '',
        delivery: '',
        type: [],
        resource: '',
        desc: ''
      },
      formRules: {
        name: [
          { required: true, message: '请输入', trigger: 'blur' },
          { min: 3, max: 5, message: '长度 3 到 5', trigger: 'blur' }
        ],
        zone: [{ required: true, message: '请选择', trigger: 'change' }],
        date: [
          {
            required: true,
            message: '请选择',
            trigger: 'change',
            type: 'object'
          }
        ],
        type: [
          {
            type: 'array',
            required: true,
            message: '请选择',
            trigger: 'change'
          }
        ],
        resource: [{ required: true, message: '请选择', trigger: 'change' }],
        desc: [{ required: true, message: '请输入', trigger: 'blur' }]
      } as FormRules,
      zoneOptions: [
        { label: 'ShangHai', value: 'shanghai' },
        { label: 'BeiJing', value: 'beijing' }
      ],
      typeOptions: [
        { label: 'Online', value: '1' },
        { label: 'Promotion', value: '2' },
        { label: 'Offline', value: '3' }
      ],
      resourceOptions: [
        { label: 'Sponsor', value: '1' },
        { label: 'Venue', value: '2' }
      ]
    })

    function handleReset() {
      state.formRef.resetFields()
    }

    function handleCancel() {
      state.formRef.clearValidate()
    }

    function handleSubmit() {
      state.formRef.validate()
    }

    return {
      ...toRefs(state),
      handleReset,
      handleCancel,
      handleSubmit
    }
  },
  render() {
    return (
      <div>
        <ElForm
          ref="formRef"
          model={this.formModel}
          rules={this.formRules}
          labelWidth="120px"
          labelPosition={'right'}
        >
          <ElFormItem label="Activity name" prop="name">
            <ElInput v-model={this.formModel.name} />
          </ElFormItem>
          <ElFormItem label="Activity zone" prop="zone">
            <ElSelect v-model={this.formModel.zone}>
              {this.zoneOptions.map(v => (
                <ElOption label={v.label} value={v.value} />
              ))}
            </ElSelect>
          </ElFormItem>
          <ElFormItem label="Activity time" prop="date">
            <ElDatePicker
              v-model={this.formModel.date}
              style={{ width: '100%' }}
            />
          </ElFormItem>
          <ElFormItem prop="delivery" label="Instant delivery">
            <ElSwitch v-model={this.formModel.delivery} />
          </ElFormItem>
          <ElFormItem label="Activity type" prop="type">
            <ElCheckboxGroup v-model={this.formModel.type}>
              {this.typeOptions.map(v => (
                <ElCheckbox label={v.value}>{v.label}</ElCheckbox>
              ))}
            </ElCheckboxGroup>
          </ElFormItem>
          <ElFormItem label="Resource">
            <ElRadioGroup v-model={this.formModel.resource}>
              {this.resourceOptions.map(v => (
                <ElRadio label={v.value}>{v.label}</ElRadio>
              ))}
            </ElRadioGroup>
          </ElFormItem>
          <ElFormItem label="Activity form">
            <ElInput v-model={this.formModel.desc} type="textarea" />
          </ElFormItem>
          <ElFormItem>
            <ElSpace>
              <ElButton type={'danger'} onClick={this.handleReset}>
                重置
              </ElButton>
              <ElButton onClick={this.handleCancel}>取消</ElButton>
              <ElButton type={'primary'} onClick={this.handleSubmit}>
                确定
              </ElButton>
            </ElSpace>
          </ElFormItem>
        </ElForm>
      </div>
    )
  }
})
