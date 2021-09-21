import { globalStyle } from '@vanilla-extract/css'

globalStyle('::-webkit-scrollbar', {
  width: '6px',
  height: '6px'
})

globalStyle('::-webkit-scrollbar-track', {
  backgroundColor: 'rgba(16, 31, 28, 0.1)'
})

globalStyle('::-webkit-scrollbar-thumb', {
  backgroundColor: 'rgba(16, 31, 28, 0.3)',
  backgroundClip: 'padding-box',
  minHeight: '28px'
})

globalStyle('::-webkit-scrollbar-thumb:hover', {
  backgroundColor: 'rgba(16, 31, 28, 0.6)'
})
