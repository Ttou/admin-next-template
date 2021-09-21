import { globalStyle } from '@vanilla-extract/css'

globalStyle('.fade-slide-leave-active,.fade-slide-enter-active ', {
  transition: 'all 0.3s'
})

globalStyle('.fade-slide-enter-from', {
  opacity: 0,
  transform: 'translateX(-30px)'
})

globalStyle('.fade-slide-leave-to', {
  opacity: 0,
  transform: 'translateX(30px)'
})
