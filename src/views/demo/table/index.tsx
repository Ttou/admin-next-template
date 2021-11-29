import { Tag } from 'ant-design-vue'
import { defineComponent, ref } from 'vue'

import { demoApi } from '@/api'
import { ProTable } from '@/components'
import type { ProTableProps } from '@/components/ProTable/types'

import * as css from './index.css'

export default defineComponent({
  name: 'DemoTable',
  setup() {
    const tableConfig = ref({
      formItems: [
        {
          name: 'account',
          label: '账号',
          type: 'input'
        },
        {
          name: 'nickname',
          label: '昵称',
          type: 'input'
        },
        {
          name: 'role',
          label: '角色',
          type: 'select',
          options: [
            {
              label: 'admin',
              value: 'admin'
            },
            {
              label: 'normal',
              value: 'normal'
            }
          ],
          defaultHidden: true
        },
        {
          name: 'status',
          label: '状态',
          type: 'select',
          options: [
            {
              label: '禁用',
              value: '0'
            },
            {
              label: '启用',
              value: '1'
            }
          ],
          defaultHidden: true
        }
      ],
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
      ],
      request: async params => {
        return await demoApi.getList({
          ...params
        })
      }
    } as ProTableProps)

    return {
      tableConfig
    }
  },
  render() {
    return (
      <div class={css.view}>
        {/* @ts-ignore */}
        <ProTable {...this.tableConfig} />
      </div>
    )
  }
})
