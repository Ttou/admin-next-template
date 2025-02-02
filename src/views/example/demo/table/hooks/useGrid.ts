import type { DatePickerProps, InputProps } from 'element-plus'
import { reactive, toRef, toRefs } from 'vue'

import { demoApi } from '@/apis'
import {
  type GridExtOptions,
  TABLE_EDIT_RENDER,
  TABLE_FORMAT,
  TABLE_ITEM_RENDER,
  TABLE_RENDERER,
  useGridExt
} from '@/hooks'
import { beforeDays, genRandomID, optionsToObj } from '@/utils'

const roleOptions = [
  { label: '管理员', value: 'admin' },
  { label: '普通用户', value: 'normal' }
]

const statusOptions = [
  { label: '禁用', value: '0' },
  { label: '启用', value: '1' }
]

const roleObj = optionsToObj(roleOptions)

export function useGrid() {
  const state = reactive({
    gridConfig: {
      id: genRandomID(),
      showOverflow: true,
      border: true,
      loading: false,
      keepSource: true,
      height: 'auto',
      resizeConfig: {
        refreshDelay: 10
      },
      toolbarConfig: {
        perfect: true,
        custom: true,
        refresh: true,
        zoom: true,
        slots: {
          buttons: 'toolbar_buttons'
        }
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
              name: TABLE_ITEM_RENDER.Input,
              props: {
                placeholder: '请输入'
              } as InputProps
            }
          },
          {
            title: '昵称',
            field: 'nickname',
            itemRender: {
              name: TABLE_ITEM_RENDER.Input,
              props: {
                placeholder: '请输入'
              } as InputProps
            }
          },
          {
            title: '角色',
            field: 'role',
            itemRender: {
              name: TABLE_ITEM_RENDER.Select,
              options: roleOptions,
              props: {
                placeholder: '请选择'
              } as SelectProps
            }
          },
          {
            title: '状态',
            field: 'status',
            itemRender: {
              name: TABLE_ITEM_RENDER.Select,
              options: statusOptions,
              props: {
                placeholder: '请选择'
              } as SelectProps
            }
          },
          {
            title: '时间',
            field: 'date',
            itemRender: {
              name: TABLE_ITEM_RENDER.DatePicker,
              props: {
                type: 'datetimerange',
                startPlaceholder: '开始时间',
                endPlaceholder: '结束时间',
                format: 'YYYY-MM-DD HH:mm:ss'
              } as DatePickerProps,
              defaultValue: [beforeDays(6), new Date()]
            }
          },
          {
            itemRender: {
              name: TABLE_RENDERER.FormItemBtns
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
            name: TABLE_EDIT_RENDER.Input
          }
        },
        {
          title: '角色',
          field: 'role',
          formatter({ cellValue }) {
            return roleObj[cellValue]
          }
        },
        {
          title: '状态',
          field: 'status',
          editRender: {
            name: TABLE_EDIT_RENDER.Select,
            options: statusOptions
          }
        },
        {
          title: '备注',
          field: 'remark',
          editRender: {
            name: TABLE_EDIT_RENDER.Input
          }
        },
        {
          title: '创建时间',
          field: 'createTs',
          formatter: TABLE_FORMAT.Date
        }
      ],
      pagerConfig: {
        background: true,
        layouts: [
          'PrevJump',
          'PrevPage',
          'JumpNumber',
          'NextPage',
          'NextJump',
          'Sizes',
          'FullJump',
          'Total'
        ],
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
            form = processFormData(form)

            const data = await demoApi.getList({
              pageSize: page.pageSize,
              current: page.currentPage,
              ...form
            })
            return data
          }
        }
      }
    } as GridExtOptions
  })

  const gridExtHook = useGridExt(toRef(state, 'gridConfig'))

  function processFormData(form: Record<string, any>) {
    return gridExtHook.processFormDateRanges(form, {
      date: ['start', 'end']
    })
  }

  function handleCustomRefresh() {
    gridExtHook.refresh()
  }

  return {
    ...toRefs(state),
    gridExtHook,
    handleCustomRefresh
  }
}
