import type { HTMLAttributes } from 'vue'

declare module 'vue' {
  interface ComponentCustomProps
    extends HTMLAttributes,
      JSX.IntrinsicAttributes {}
}
