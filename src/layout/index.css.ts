import { style } from '@vanilla-extract/css'

export const layout = style({
  width: '100%',
  height: '100%'
})

export const layoutSider = style({
  position: 'fixed',
  overflow: 'hidden',
  height: '100vh',
  left: 0,
  zIndex: 100
})

export const layoutMain = style({
  backgroundColor: '#fff',
  transition: 'all 0.2s'
})

export const layoutHeader = style({
  padding: '0 12px',
  backgroundColor: '#fff',
  zIndex: 100
})

export const layoutContent = style({
  padding: '12px 12px 0'
})
