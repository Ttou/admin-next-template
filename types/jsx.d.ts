declare namespace JSX {
  interface IntrinsicAttributes {
    ['id']?: unknown
    ['class']?: unknown
    ['style']?: unknown
    ['v-show']?: unknown
    ['v-model']?: unknown
    ['v-models']?: unknown
    ['v-slots']?: unknown

    [property: string]: unknown
  }
}
