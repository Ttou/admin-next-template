import type { IconifyIcons } from '@iconify/types'
import { addCollection, loadIcons } from '@iconify/vue'
import * as ep from '@iconify-json/ep'
import * as iconParkOutline from '@iconify-json/icon-park-outline'

const files = import.meta.glob('./json/*.json', {
  query: '?raw',
  import: 'default',
  eager: true
})

async function setupIcon() {
  const icons = {} as IconifyIcons
  const iconNames = [] as string[]

  Object.keys(files).forEach(key => {
    const icon = JSON.parse(files[key] as string)

    icons[icon.key] = icon.value
    iconNames.push(`@local:custom:${icon.key}`)
  })

  loadIcons(iconNames)
  addCollection({ prefix: 'custom', icons }, 'local')
  addCollection(ep.icons, 'local')
  addCollection(iconParkOutline.icons, 'local')
}
setupIcon()
