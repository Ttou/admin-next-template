import './index.less'

import {
  ColumnHeightOutlined,
  DownOutlined,
  RedoOutlined,
  UpOutlined
} from '@ant-design/icons-vue'
import {
  Button,
  Checkbox,
  Col,
  DatePicker,
  Dropdown,
  Form,
  Input,
  Menu,
  Radio,
  Row,
  Select,
  Space,
  Spin,
  Switch,
  Table
} from 'ant-design-vue'
import { computed, defineComponent, onMounted, ref } from 'vue'

import { propTypes } from '@/utils'

import type {
  FormItem,
  FormRef,
  Slots,
  TableColumn,
  TablePagination,
  TableRequest,
  TableRowKeyFunc,
  TableSize
} from './types'

export default defineComponent({
  name: 'ProTable',
  props: {
    autoLoad: propTypes.bool().def(true),
    request: propTypes.func<TableRequest>().isRequired,
    formItems: propTypes.array<FormItem>().def([]),
    tableRowKey: propTypes
      .oneOfType([propTypes.string(), propTypes.func<TableRowKeyFunc>()])
      .def('id'),
    tableColumns: propTypes.array<TableColumn>().isRequired,
    slots: propTypes.object<Slots>().def({})
  },
  setup(props) {
    const loading = ref(false)
    const formRef = ref<Nullable<FormRef>>(null)
    const formModel = ref({})
    const formExpand = ref(false)
    const tableData = ref([] as any[])
    const tableSize = ref<TableSize>('small')
    const tablePagination = ref({
      showQuickJumper: true,
      showSizeChanger: true,
      size: 'small',
      pageSizeOptions: ['10', '15', '30', '50'],
      onChange: (page, pageSize) => {
        tableCurrent.value = page
        load()
      },
      onShowSizeChange(current, size) {
        tableCurrent.value = 1
        tablePageSize.value = size
        load()
      }
    } as TablePagination)
    const tableCurrent = ref(1)
    const tablePageSize = ref(15)

    const selectedSizes = computed(() => [tableSize.value])

    function handleSearch() {
      load()
    }

    function handleReset() {
      formRef.value?.resetFields()
    }

    function handleToggleExpand() {
      formExpand.value = !formExpand.value
    }

    function handleReload() {
      load()
    }

    function init() {
      props.formItems.forEach(item => {
        if (item.name) {
          switch (item.type) {
            case 'select':
              Reflect.set(formModel.value, item.name, item.defaultValue || null)
              break
            default:
              Reflect.set(formModel.value, item.name, item.defaultValue || '')
              break
          }
        }
      })
    }

    async function load() {
      try {
        loading.value = true

        const res = await props.request({
          ...formModel.value,
          current: tableCurrent.value,
          pageSize: tablePageSize.value
        })

        tableData.value = res.content

        if (typeof tablePagination.value !== 'boolean') {
          tablePagination.value!.current = Number(res.current)
          tablePagination.value!.pageSize = Number(res.size)
          tablePagination.value!.total = Number(res.total)
        }
      } finally {
        loading.value = false
      }
    }

    onMounted(() => {
      init()

      props.autoLoad && load()
    })

    return {
      loading,
      formRef,
      formModel,
      formExpand,
      tableData,
      tableSize,
      tablePagination,
      selectedSizes,
      handleSearch,
      handleReset,
      handleToggleExpand,
      handleReload
    }
  },
  render() {
    const renderComponent = (item: FormItem) => {
      if (item.render) return item.render(this.formModel)

      switch (item.type) {
        case 'input':
          return (
            <Input
              v-model={[this.formModel[item.name!], 'value']}
              allowClear
              {...item.componentProps}
            />
          )
        case 'select':
          return (
            <Select
              v-model={[this.formModel[item.name!], 'value']}
              placeholder="请选择"
              allowClear
              {...item.componentProps}
            >
              {item.options?.map(option => (
                <Select.Option value={option.value}>
                  {option.label}
                </Select.Option>
              ))}
            </Select>
          )
        case 'date-picker':
          return (
            <DatePicker
              v-model={[this.formModel[item.name!], 'value']}
              allowClear
              {...item.componentProps}
            />
          )
        case 'switch':
          return (
            <Switch
              v-model={[this.formModel[item.name!], 'checked']}
              {...item.componentProps}
            />
          )
        case 'checkbox':
          return (
            <Checkbox.Group
              v-model={[this.formModel[item.name!], 'value']}
              {...item.componentProps}
            >
              {item.options?.map(option => (
                <Checkbox value={option.value}>{option.label}</Checkbox>
              ))}
            </Checkbox.Group>
          )
        case 'radio':
          return (
            <Radio.Group
              v-model={[this.formModel[item.name!], 'value']}
              {...item.componentProps}
            >
              {item.options?.map(option => (
                <Radio value={option.value}>{option.label}</Radio>
              ))}
            </Radio.Group>
          )
        default:
          return null
      }
    }

    const renderItem = (item: FormItem) => (
      <Col md={8} sm={24}>
        <Form.Item label={item.label} name={item.name}>
          {renderComponent(item)}
        </Form.Item>
      </Col>
    )

    const renderHiddenItem = (item: FormItem) => (
      <Col v-show={this.formExpand} md={8} sm={24}>
        <Form.Item label={item.label} name={item.name}>
          {renderComponent(item)}
        </Form.Item>
      </Col>
    )

    return (
      <div class="pro-table">
        <div class="form-wrapper">
          <Form ref="formRef" layout="inline" model={this.formModel}>
            <Row class="form-row" gutter={[16, 16]}>
              {this.formItems
                .filter(item => !item.defaultHidden)
                .map(renderItem)}
              {this.formItems
                .filter(item => item.defaultHidden)
                .map(renderHiddenItem)}
              <Col md={this.formExpand ? 24 : 8} sm={24}>
                <Space
                  style={
                    this.formExpand
                      ? { float: 'right', overflow: 'hidden' }
                      : {}
                  }
                >
                  <Button type="primary" onClick={this.handleSearch}>
                    查询
                  </Button>
                  <Button onClick={this.handleReset}>重置</Button>
                  <a
                    onClick={this.handleToggleExpand}
                    style={{
                      marginLeft: '8px'
                    }}
                  >
                    {this.formExpand
                      ? ['收起', <UpOutlined />]
                      : ['展开', <DownOutlined />]}
                  </a>
                </Space>
              </Col>
            </Row>
          </Form>
        </div>
        <Spin spinning={this.loading}>
          <div class="table-wrapper">
            <div class="table-header">
              <div class="btns-wrapper">
                {this.slots.btns?.(this.tableData)}
              </div>
              <Space>
                {this.slots.tools?.(this.tableData)}
                <RedoOutlined
                  title="刷新"
                  spin={this.loading}
                  onClick={this.handleReload}
                  style={{
                    fontSize: '18px'
                  }}
                />
                <Dropdown
                  trigger="click"
                  v-slots={{
                    default: () => (
                      <ColumnHeightOutlined
                        title="密度"
                        style={{
                          fontSize: '18px'
                        }}
                      />
                    ),
                    overlay: () => (
                      <Menu v-models={[[this.selectedSizes, 'selectedKeys']]}>
                        <Menu.Item
                          key="default"
                          onClick={() => (this.tableSize = 'default')}
                        >
                          默认
                        </Menu.Item>
                        <Menu.Item
                          key="middle"
                          onClick={() => (this.tableSize = 'middle')}
                        >
                          中等
                        </Menu.Item>
                        <Menu.Item
                          key="small"
                          onClick={() => (this.tableSize = 'small')}
                        >
                          紧凑
                        </Menu.Item>
                      </Menu>
                    )
                  }}
                />
              </Space>
            </div>
            <Table
              rowKey={this.tableRowKey}
              columns={this.tableColumns}
              dataSource={this.tableData}
              size={this.tableSize}
              pagination={this.tablePagination}
              bordered
            />
          </div>
        </Spin>
      </div>
    )
  }
})
