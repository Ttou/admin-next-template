import { FormCreateProps } from '@form-create/ant-design-vue'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'DemoFormCreate',
  setup() {
    const formApi = ref({})
    const formModel = ref({})
    const formOption = ref({
      resetBtn: true
    } as FormCreateProps['option'])
    const formRule = ref([
      {
        type: 'input',
        field: 'name',
        title: 'Activity name',
        validate: [
          { required: true, message: 'Activity name 不能为空' },
          { min: 3, max: 5, message: '长度 3 到 5' }
        ]
      },
      {
        type: 'select',
        field: 'zone',
        title: 'Activity zone',
        options: [
          { label: 'ShangHai', value: 'shanghai' },
          { label: 'BeiJing', value: 'beijing' }
        ],
        effect: {
          required: true
        }
      },
      {
        type: 'DatePicker',
        field: 'date',
        title: 'Activity time',
        style: {
          width: '100%'
        },
        effect: {
          required: true
        }
      },
      {
        type: 'switch',
        field: 'delivery',
        title: 'Instant delivery'
      },
      {
        type: 'checkbox',
        field: 'type',
        title: 'Activity type',
        options: [
          { label: 'Online', value: '1' },
          { label: 'Promotion', value: '2' },
          { label: 'Offline', value: '3' }
        ],
        effect: {
          required: true
        }
      },
      {
        type: 'radio',
        field: 'resource',
        title: 'Resource',
        options: [
          { label: 'Sponsor', value: '1' },
          { label: 'Venue', value: '2' }
        ],
        effect: {
          required: true
        }
      },
      {
        type: 'input',
        field: 'desc',
        title: 'Activity form',
        props: {
          type: 'textarea'
        },
        effect: {
          required: true
        }
      }
    ] as FormCreateProps['rule'][])

    return {
      formApi,
      formModel,
      formOption,
      formRule
    }
  },
  render() {
    return (
      <div>
        <form-create
          v-model={this.formModel}
          v-model:api={this.formApi}
          option={this.formOption}
          rule={this.formRule}
        ></form-create>
      </div>
    )
  }
})
