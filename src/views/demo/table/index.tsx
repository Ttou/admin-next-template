import './index.less'

import {
  ColumnHeightOutlined,
  RedoOutlined,
  SettingOutlined
} from '@ant-design/icons-vue'
import { Button, Menu, Space, Spin, Table, Tag } from 'ant-design-vue'
import Dropdown from 'ant-design-vue/lib/dropdown/dropdown'
import type { TableProps } from 'ant-design-vue/lib/table/interface'
import { defineComponent, onMounted, ref, unref } from 'vue'

import { getList } from '@/api'

export default defineComponent({
  name: 'DemoTable',
  setup() {
    const state = ref({
      loading: false,
      list: [] as any,
      tableSize: 'middle' as TableProps['size'],
      tableColumns: [
        {
          title: '账号',
          dataIndex: 'account',
          sorter: (a, b) => {
            return a.account.length - b.account.length
          }
        },
        {
          title: '邮箱',
          dataIndex: 'email'
        },
        {
          title: '昵称',
          dataIndex: 'nickname'
        },
        {
          title: '角色',
          dataIndex: 'role',
          filters: [
            {
              text: 'admin',
              value: 'admin'
            },
            {
              text: 'normal',
              value: 'normal'
            }
          ],
          onFilter: (value: string, record: any) => {
            return record.role.indexOf(value) === 0
          }
        },
        {
          title: '状态',
          dataIndex: 'status',
          customRender: ({ text }) => {
            return (
              <Tag color={text === '0' ? 'default' : 'success'}>
                {text === '0' ? '禁用' : '启用'}
              </Tag>
            )
          },
          filters: [
            {
              text: '禁用',
              value: '0'
            },
            {
              text: '启用',
              value: '1'
            }
          ],
          onFilter: (value: string, record: any) => {
            return record.status.indexOf(value) === 0
          }
        },
        {
          title: '备注',
          dataIndex: 'remark'
        },
        {
          title: '创建时间',
          dataIndex: 'createTs'
        }
      ] as TableProps['columns'][]
    })

    async function loadData() {
      unref(state).loading = true

      try {
        const data = await getList({
          current: 1,
          pageSize: 20
        })
        unref(state).list = data.content
      } finally {
        unref(state).loading = false
      }
    }

    function handleReload() {
      loadData()
    }

    onMounted(() => {
      loadData()
    })

    return {
      state,
      handleReload
    }
  },
  render() {
    return (
      <div class="demo-table-view">
        <Spin spinning={this.state.loading}>
          <div class="table-header">
            <div class="btns-wrapper">
              <Button type="primary">新增记录</Button>
            </div>
            <Space>
              <RedoOutlined
                title="刷新"
                spin={this.state.loading}
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
                    <Menu>
                      <Menu.Item
                        onClick={() => (this.state.tableSize = 'default')}
                      >
                        默认
                      </Menu.Item>
                      <Menu.Item
                        onClick={() => (this.state.tableSize = 'middle')}
                      >
                        中等
                      </Menu.Item>
                      <Menu.Item
                        onClick={() => (this.state.tableSize = 'small')}
                      >
                        紧凑
                      </Menu.Item>
                    </Menu>
                  )
                }}
              />
              <SettingOutlined
                title="设置"
                style={{
                  fontSize: '18px'
                }}
              />
            </Space>
          </div>
          <Table
            columns={this.state.tableColumns}
            dataSource={this.state.list}
            size={this.state.tableSize}
            bordered
            pagination={{
              pageSize: 20
            }}
          />
        </Spin>
      </div>
    )
  }
})
