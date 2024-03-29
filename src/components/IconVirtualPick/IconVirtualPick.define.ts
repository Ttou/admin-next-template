import { listIcons } from '@iconify/vue'
import { chunk } from 'lodash-unified'
import { string } from 'vue-types'

type IIconItem = {
  label: string
  value: string
  icons: string[][]
}

export const iconList: IIconItem[] = [
  {
    label: 'IconPark线性',
    value: 'icon-park-outline',
    icons: chunk(listIcons('local', 'icon-park-outline'), 7)
  },
  {
    label: 'ElementPlus',
    value: 'ep',
    icons: chunk(listIcons('local', 'ep'), 7)
  }
]

export const iconVirtualPickProps = () => ({
  modelValue: string().def('')
})
