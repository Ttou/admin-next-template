import type { StyleValue } from 'vue'

declare global {
  namespace JSX {
    interface IntrinsicAttributes {
      ['v-show']?: unknown
      ['v-model']?: unknown
      ['v-slots']?: unknown
      ['style']?: StyleValue
    }
  }
}

export {}
