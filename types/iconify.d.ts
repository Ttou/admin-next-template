declare module '@iconify/vue' {
  export const Icon: {
    new (): {
      $props: import('@iconify/vue/dist/iconify.d.ts').IconProps & {
        class?: any
      }
    }
  }

  export {
    addCollection,
    listIcons,
    loadIcons
  } from '@iconify/vue/dist/iconify'
}
