import { isString } from '@vue/shared'
import type { CSSProperties } from 'vue'

export const BAR_MAP = {
  vertical: {
    offset: 'offsetHeight',
    scroll: 'scrollTop',
    scrollSize: 'scrollHeight',
    size: 'height',
    key: 'vertical',
    axis: 'Y',
    client: 'clientY',
    direction: 'top'
  },
  horizontal: {
    offset: 'offsetWidth',
    scroll: 'scrollLeft',
    scrollSize: 'scrollWidth',
    size: 'width',
    key: 'horizontal',
    axis: 'X',
    client: 'clientX',
    direction: 'left'
  }
}

export const renderThumbStyle = ({ move, size, bar }): CSSProperties => ({
  [bar.size]: size,
  transform: `translate${bar.axis}(${move}%)`
})

export const isNumber = (val: unknown): val is number => typeof val === 'number'

export function addUnit(value: string | number) {
  if (isString(value)) {
    return value
  } else if (isNumber(value)) {
    return `${value}px`
  }

  console.warn('binding value must be a string or number')
  return ''
}
