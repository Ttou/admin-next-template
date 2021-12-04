import { style } from '@vanilla-extract/css'

export const view = style({})

export const cardContent = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '100px'
})

export const text = style({
  fontSize: '24px'
})

export const icon = style({
  width: '40px',
  height: '40px'
})
