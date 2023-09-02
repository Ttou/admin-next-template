import { array, string } from 'vue-types'

export const iconVirtualListProps = () => ({
  data: array<string[]>().isRequired,
  activeIconName: string().isRequired
})
