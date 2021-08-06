import type { VNodeChild } from 'vue'
import {
  any,
  array,
  arrayOf,
  bool,
  custom,
  func,
  instanceOf,
  integer,
  number,
  object,
  objectOf,
  oneOf,
  oneOfType,
  shape,
  string,
  symbol,
  toType
} from 'vue-types'

type VueNode = VNodeChild | JSX.Element

function date() {
  return toType<Date>('date', {
    type: Date,
    validator(value: any) {
      return (
        Object.prototype.toString.call(value) === '[object Date]' &&
        isFinite(value)
      )
    }
  })
}

function vnode() {
  return toType<VueNode>('vnode', {
    type: null
  })
}

export default {
  any,
  array,
  arrayOf,
  bool,
  custom,
  date,
  func,
  instanceOf,
  integer,
  number,
  object,
  objectOf,
  oneOf,
  oneOfType,
  shape,
  string,
  symbol,
  vnode
}
