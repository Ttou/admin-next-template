import { style } from '@vanilla-extract/css'

export const scrollbar = style({
  position: 'relative',
  height: '100%',
  overflow: 'hidden'
})

export const content = style({})

export const verticalScrollbar = style({
  position: 'absolute',
  top: '50%',
  right: '10px',
  height: '300px',
  width: '7px',
  borderRadius: '6px',
  transform: 'translateY(-50%) translateZ(0)',
  backgroundColor: 'rgb(200, 200, 200, 0.3)'
})

export const verticalIndicator = style({
  width: '100%',
  height: '60px',
  borderRadius: '6px',
  backgroundColor: 'rgba(144, 147, 153, 0.3)'
})
