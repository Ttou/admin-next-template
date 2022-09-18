import type { IconifyIcons } from '@iconify/types'
import { addCollection, loadIcons } from '@iconify/vue'

const svgs = import.meta.glob('./*.svg', { as: 'raw', eager: true })

function getIcon(key: string, value: string) {
  const pos = key.lastIndexOf('/')
  const filename = key.substring(pos + 1)
  const iconName = filename.split('.')[0]

  const body = value.replace(/^<svg[^>]+[\s\S]>/, '').replace(/<\/svg>/, '')
  const match = value.match(/viewBox="[\s\S][^"]+"/)

  let width = 48
  let height = 48

  // 获取 viewBox 中的宽高
  if (match.length > 0) {
    const a = match[0].substring(
      match[0].indexOf('"') + 1,
      match[0].lastIndexOf('"')
    )
    const b = a.split(' ').filter(v => v !== ' ')

    width = Number(b[2])
    height = Number(b[3])
  }

  return {
    key: iconName,
    value: {
      body,
      width,
      height
    }
  }
}

async function setupIcon() {
  const icons = {} as IconifyIcons
  const iconNames = [] as string[]

  Object.keys(svgs).forEach(key => {
    const icon = getIcon(key, svgs[key])

    icons[icon.key] = icon.value
    iconNames.push(`custom:${icon.key}`)
  })

  addCollection({
    prefix: 'custom',
    icons
  })
  loadIcons(iconNames, res => {
    console.log(res)
  })
}
setupIcon()
