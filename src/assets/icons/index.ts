import type { IconifyIcons } from '@iconify/types'
import { addCollection, loadIcons } from '@iconify/vue'

const svgs = import.meta.glob('./*.svg', { as: 'raw', eager: true })
const getValueFromQuota = (str: string) =>
  str.substring(str.indexOf('"') + 1, str.lastIndexOf('"'))

function getIcon(key: string, value: string) {
  const pos = key.lastIndexOf('/')
  const filename = key.substring(pos + 1)
  const iconName = filename.split('.')[0]

  const body = value.replace(/^<svg[^>]+[\s\S]>/, '').replace(/<\/svg>/, '')
  const matchViewBox = value.match(/viewBox="[\s\S][^"]+"/)
  const matchWidthHeight = value.match(/(width|height)="([^>+].*?)"/g)

  // 默认宽高
  let width = 48
  let height = 48

  // 获取 viewBox 中的宽高
  if (matchViewBox?.length > 0) {
    const a = getValueFromQuota(matchViewBox[0])
    const b = a.split(' ').filter(v => v !== ' ')

    width = Number(b[2])
    height = Number(b[3])
  } else if (matchWidthHeight?.length > 0) {
    matchWidthHeight.forEach(v => {
      if (v.includes('width')) {
        width = Number(getValueFromQuota(v))
      } else if (v.includes('height')) {
        height = Number(getValueFromQuota(v))
      }
    })
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
  loadIcons(iconNames)
}
setupIcon()
