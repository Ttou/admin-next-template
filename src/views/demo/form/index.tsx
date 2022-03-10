import {
  Button,
  Checkbox,
  CheckboxGroup,
  DatePicker,
  Form,
  FormItem,
  Input,
  Radio,
  RadioGroup,
  Select,
  SelectOption,
  Space,
  Switch,
  Textarea
} from 'ant-design-vue'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'DemoForm',
  setup() {
    const formModel = ref({
      name: '',
      zone: '',
      date: '',
      delivery: '',
      type: '',
      resource: '',
      desc: ''
    })
    const formRules = ref({
      name: [
        { required: true, message: '请输入', trigger: 'blur' },
        { min: 3, max: 5, message: '长度 3 到 5', trigger: 'blur' }
      ],
      zone: [{ required: true, message: '请选择', trigger: 'change' }],
      date: [
        { required: true, message: '请选择', trigger: 'change', type: 'object' }
      ],
      type: [
        { type: 'array', required: true, message: '请选择', trigger: 'change' }
      ],
      resource: [{ required: true, message: '请选择', trigger: 'change' }],
      desc: [{ required: true, message: '请输入', trigger: 'blur' }]
    } as FormRules)
    const zoneOptions = ref([
      { label: 'ShangHai', value: 'shanghai' },
      { label: 'BeiJing', value: 'beijing' }
    ])
    const typeOptions = ref([
      { label: 'Online', value: '1' },
      { label: 'Promotion', value: '2' },
      { label: 'Offline', value: '3' }
    ])
    const resourceOptions = ref([
      { label: 'Sponsor', value: '1' },
      { label: 'Venue', value: '2' }
    ])

    const { useForm } = Form

    const formRef = useForm(formModel.value, formRules.value)

    function handleReset() {
      formRef.resetFields()
    }

    function handleCancel() {
      formRef.clearValidate()
    }

    function handleSubmit() {
      formRef.validate()
    }

    return {
      formRef,
      formModel,
      zoneOptions,
      typeOptions,
      resourceOptions,
      handleReset,
      handleCancel,
      handleSubmit
    }
  },
  render() {
    return (
      <div>
        <Form labelCol={{ span: 4 }} wrapperCol={{ span: 20 }}>
          <FormItem
            name="name"
            label="Activity name"
            {...this.formRef.validateInfos.name}
          >
            <Input v-model:value={this.formModel.name} />
          </FormItem>
          <FormItem
            name="zone"
            label="Activity zone"
            {...this.formRef.validateInfos.zone}
          >
            <Select v-model:value={this.formModel.zone}>
              {this.zoneOptions.map(v => (
                <SelectOption value={v.value}>{v.label}</SelectOption>
              ))}
            </Select>
          </FormItem>
          <FormItem
            name="date"
            label="Activity time"
            {...this.formRef.validateInfos.date}
          >
            <DatePicker
              v-model:value={this.formModel.date}
              style={{ width: '100%' }}
            />
          </FormItem>
          <FormItem name="delivery" label="Instant delivery">
            <Switch v-model:checked={this.formModel.delivery} />
          </FormItem>
          <FormItem
            name="type"
            label="Activity type"
            {...this.formRef.validateInfos.type}
          >
            <CheckboxGroup v-model:value={this.formModel.type}>
              {this.typeOptions.map(v => (
                <Checkbox value={v.value}>{v.label}</Checkbox>
              ))}
            </CheckboxGroup>
          </FormItem>
          <FormItem
            name="resource"
            label="Resource"
            {...this.formRef.validateInfos.resource}
          >
            <RadioGroup v-model:value={this.formModel.resource}>
              {this.resourceOptions.map(v => (
                <Radio value={v.value}>{v.label}</Radio>
              ))}
            </RadioGroup>
          </FormItem>
          <FormItem
            name="desc"
            label="Activity form"
            {...this.formRef.validateInfos.desc}
          >
            <Textarea v-model:value={this.formModel.desc} />
          </FormItem>
          <FormItem wrapperCol={{ span: 14, offset: 4 }}>
            <Space>
              <Button onClick={this.handleReset} danger>
                重置
              </Button>
              <Button onClick={this.handleCancel}>取消</Button>
              <Button type="primary" onClick={this.handleSubmit}>
                确定
              </Button>
            </Space>
          </FormItem>
        </Form>
      </div>
    )
  }
})
