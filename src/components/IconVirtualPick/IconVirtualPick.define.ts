import { listIcons } from '@iconify/vue'
import { chunk } from 'lodash-unified'
import { string } from 'vue-types'

export const iconList = [
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
