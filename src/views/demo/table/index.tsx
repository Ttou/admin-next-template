import { defineComponent, ref } from 'vue'

import { demoApi } from '@/api'
import { ProTable } from '@/components'
import type { PropTableProps } from '@/components/ProTable/types'

export default defineComponent({
  name: 'DemoTable',
  setup() {
    const tableConfig = ref({
      options: {
        showOverflow: true,
        formConfig: {
          items: [
            {
              title: '账号',
              field: 'account',
              itemRender: {
                name: 'AInput'
              }
            },
            {
              title: '昵称',
              field: 'nickname',
              itemRender: {
                name: 'AInput'
              }
            },
            {
              title: '角色',
              field: 'role',
              itemRender: {
                name: 'ASelect',
                options: [
                  {
                    label: 'admin',
                    value: 'admin'
                  },
                  {
                    label: 'normal',
                    value: 'normal'
                  }
                ]
              }
            },
            {
              title: '状态',
              field: 'status',
              itemRender: {
                name: 'ASelect',
                options: [
                  {
                    label: '禁用',
                    value: '0'
                  },
                  {
                    label: '启用',
                    value: '1'
                  }
                ]
              }
            },
            {
              itemRender: {
                name: 'FormItemBtns'
              }
            }
          ]
        },
        columns: [
          {
            title: 'ID',
            field: 'id'
          },
          {
            title: '账号',
            field: 'account'
          },
          {
            title: '邮箱',
            field: 'email'
          },
          {
            title: '昵称',
            field: 'nickname'
          },
          {
            title: '角色',
            field: 'role'
          },
          {
            title: '状态',
            field: 'status'
          },
          {
            title: '备注',
            field: 'remark'
          },
          {
            title: '创建时间',
            field: 'createTs'
          }
        ],
        pagerConfig: {
          pageSize: 15
        },
        proxyConfig: {
          seq: true,
          props: {
            result: 'content',
            total: 'total'
          },
          ajax: {
            query: async ({ page }) => {
              const data = await demoApi.getList({
                pageSize: page.pageSize,
                current: page.currentPage
              })
              return data
            }
          }
        }
      }
    } as PropTableProps)

    return {
      tableConfig
    }
  },
  render() {
    return (
      <div>
        <ProTable {...this.tableConfig} />
      </div>
    )
  }
})
