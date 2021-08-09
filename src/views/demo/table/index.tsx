import { Table, Tag } from 'ant-design-vue'
import { TableProps } from 'ant-design-vue/lib/table/interface'
import { defineComponent, onMounted, reactive } from 'vue'

import { getList } from '@/api'

export default defineComponent({
  name: 'DemoTable',
  setup() {
    const state = reactive({
      list: [],
      tableColumns: [
        {
          title: '账号',
          dataIndex: 'account'
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
          dataIndex: 'role'
        },
        {
          title: '状态',
          dataIndex: 'status',
          customRender: ({ text, record, index }) => {
            return (
              <Tag color={text === '0' ? 'default' : 'success'}>
                {text === '0' ? '禁用' : '启用'}
              </Tag>
            )
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

    onMounted(async () => {
      const data = await getList({
        current: 1,
        pageSize: 20
      })
      state.list = data.content
    })

    return {
      state
    }
  },
  render() {
    return (
      <div>
        <Table
          columns={this.state.tableColumns}
          dataSource={this.state.list}
          pagination={{
            pageSize: 20
          }}
        />
      </div>
    )
  }
})
