interface _Icon {
  new (): {
    $props: import('@iconify/vue/dist/iconify').IconProps & { class?: any }
  }
}

declare module '@iconify/vue' {
  export const Icon: _Icon

  export { addCollection, loadIcons } from '@iconify/vue/dist/iconify'
}
