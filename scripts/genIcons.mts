import { basename } from 'node:path'

import { cleanupSVG, SVG } from '@iconify/tools'
import fse from 'fs-extra'
import { globbySync } from 'globby'

const files = globbySync(['src/assets/icons/svg/*.svg'])

files.forEach(file => {
  const content = fse.readFileSync(file, { encoding: 'utf-8' })

  const svg = new SVG(content)
  const fileName = basename(file, '.svg')

  cleanupSVG(svg)

  const icon = {
    key: fileName,
    value: {
      body: svg.getBody(),
      width: svg.viewBox.width || 48,
      height: svg.viewBox.height || 48
    }
  }

  fse.outputJson(`src/assets/icons/json/${fileName}.json`, icon)
})
