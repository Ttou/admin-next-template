import { style } from '@vanilla-extract/css'

export const view = style({
  padding: '110px 0 144px',
  height: '100%',
  boxSizing: 'border-box'
})

export const top = style({
  textAlign: 'center'
})

export const header = style({
  height: '55px'
})

export const logoIcon = style({
  width: '55px',
  height: '55px',
  verticalAlign: 'top',
  marginRight: '16px',
  borderStyle: 'none'
})

export const title = style({
  position: 'relative',
  top: '2px',
  fontSize: '33px',
  fontWeight: 'bold',
  fontFamily: 'Avenir, Helvetica Neue, Arial, Helvetica, sans-serif',
  color: 'rgba(0, 0, 0, 0.85)'
})

export const desc = style({
  marginTop: '12px',
  marginBottom: '40px',
  color: 'rgba(0, 0, 0, 0.45)',
  fontSize: '14px'
})

export const loginForm = style({
  width: '368px',
  minWidth: '260px',
  margin: '0 auto'
})

export const backgroundIcon = style({
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'f0f2f5',
  zIndex: -1
})
