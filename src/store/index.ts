import type { InjectionKey } from 'vue'
import type { Store } from 'vuex'
import { createStore } from 'vuex'

import type { State } from './types'

export { Actions } from './constants'

export const Key: InjectionKey<Store<State>> = Symbol('store')

const files = import.meta.globEager('./modules/*')

const modules = Object.values(files).reduce((total, current) => {
  total[current.Name] = current.default
  return total
}, {})

export default createStore<State>({
  modules
})
