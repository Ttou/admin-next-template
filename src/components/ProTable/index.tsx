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
import { defineComponent, onMounted, ref } from 'vue'

import * as css from './index.css'
import props from './props'
import type { FormItem } from './types'
import useForm from './useForm'
import useTable from './useTable'
import useTools from './useTools'

export default defineComponent({
  name: 'ProTable',
  props,
  setup(props) {
    const loading = ref(false)

    const {
      formRef,
      formModel,
      formExpand,
      handleSearch,
      handleReset,
      handleToggleExpand
    } = useForm({ props, load })

    const { tableData, tableCurrent, tablePageSize, tablePagination } =
      useTable({ load })

    const {
      tableSize,
      selectedSizes,
      tableSizeOptions,
      handleReload,
      handleSelectSize
    } = useTools({ load })

    async function load() {
      try {
        loading.value = true

        const res = await props.request!({
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
      tableSizeOptions,
      handleSelectSize,
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
      <div class={css.proTable}>
        <div class={css.formWrapper}>
          <Form ref="formRef" layout="inline" model={this.formModel}>
            <Row class={css.formRow} gutter={[16, 16]}>
              {this.formItems!.filter(item => !item.defaultHidden).map(
                renderItem
              )}
              {this.formItems!.filter(item => item.defaultHidden).map(
                renderHiddenItem
              )}
              <Col md={this.formExpand ? 24 : 8} sm={24}>
                <Space
                  style={
                    this.formExpand
                      ? { float: 'right', overflow: 'hidden' }
                      : {}
                  }
                >
                  <Button
                    type="primary"
                    loading={this.loading}
                    onClick={this.handleSearch}
                  >
                    查询
                  </Button>
                  <Button
                    type="default"
                    disabled={this.loading}
                    onClick={this.handleReset}
                  >
                    重置
                  </Button>
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
          <div class={css.tableWrapper}>
            <div class={css.tableHeader}>
              <div class={css.btnsWrapper}>
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
                        {this.tableSizeOptions.map(v => (
                          <Menu.Item
                            key={v.value}
                            onClick={() => this.handleSelectSize(v.value)}
                          >
                            {v.label}
                          </Menu.Item>
                        ))}
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
