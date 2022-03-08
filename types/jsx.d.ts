declare namespace JSX {
  interface IntrinsicAttributes {
    ['id']?: unknown
    ['class']?: unknown
    ['style']?: import('vue').StyleValue
    ['v-show']?: unknown
    ['v-model']?: unknown
    ['v-slots']?: unknown

    [property: string]: unknown
  }
}
