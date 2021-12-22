import { defineComponent, ref } from 'vue'

import { demoApi } from '@/apis'
import { ProTable } from '@/components'
import type { PropTableProps } from '@/components/ProTable/types'
import {
  TABLE_EDIT_RENDER,
  TABLE_FORMAT,
  TABLE_ITEM_RENDER,
  TBALE_RENDERER
} from '@/constants'

export default defineComponent({
  name: 'DemoTable',
  setup() {
    const tableConfig = ref({
      options: {
        showOverflow: true,
        border: true,
        keepSource: true,
        toolbarConfig: {
          perfect: true,
          custom: true,
          refresh: true,
          zoom: true
        },
        editConfig: {
          trigger: 'click',
          showStatus: true
        },
        customConfig: {
          storage: true
        },
        formConfig: {
          items: [
            {
              title: '账号',
              field: 'account',
              itemRender: {
                name: TABLE_ITEM_RENDER.AInput,
                props: {
                  placeholder: '请输入'
                }
              }
            },
            {
              title: '昵称',
              field: 'nickname',
              itemRender: {
                name: TABLE_ITEM_RENDER.AInput,
                props: {
                  placeholder: '请输入'
                }
              }
            },
            {
              title: '角色',
              field: 'role',
              itemRender: {
                name: TABLE_ITEM_RENDER.ASelect,
                props: {
                  placeholder: '请选择'
                },
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
                name: TABLE_ITEM_RENDER.ASelect,
                props: {
                  placeholder: '请选择'
                },
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
                name: TBALE_RENDERER.FormItemBtns
              }
            }
          ]
        },
        columns: [
          { type: 'checkbox', width: 50 },
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
            field: 'nickname',
            editRender: {
              name: TABLE_EDIT_RENDER.AInput
            }
          },
          {
            title: '角色',
            field: 'role'
          },
          {
            title: '状态',
            field: 'status',
            editRender: {
              name: TABLE_EDIT_RENDER.ASelect,
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
            title: '备注',
            field: 'remark',
            editRender: {
              name: TABLE_EDIT_RENDER.AInput
            }
          },
          {
            title: '创建时间',
            field: 'createTs',
            formatter: TABLE_FORMAT.Date
          }
        ],
        pagerConfig: {
          pageSize: 15
        },
        proxyConfig: {
          seq: true,
          form: true,
          props: {
            result: 'content',
            total: 'total'
          },
          ajax: {
            query: async ({ page, form }) => {
              const data = await demoApi.getList({
                pageSize: page.pageSize,
                current: page.currentPage,
                ...form
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
