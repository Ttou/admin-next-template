import { globalStyle, style } from '@vanilla-extract/css'

export const navbar = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '100%'
})

export const left = style({
  display: 'flex',
  alignItems: 'center',
  height: '100%'
})

globalStyle(`${left} .trigger`, {
  fontSize: '18px',
  cursor: 'pointer',
  transition: 'color 0.3s'
})

globalStyle(`${left} .breadcrumb`, {
  marginLeft: '20px'
})

export const right = style({
  display: 'flex',
  alignItems: 'center',
  height: '100%'
})

globalStyle(`${right} .ant-space-item`, {
  minWidth: '24px',
  cursor: 'pointer',
  textAlign: 'center',
  lineHeight: '48px'
})

globalStyle(`${right} .ant-space-item:hover`, {
  backgroundColor: 'rgba(0, 0, 0, 0.025)'
})

globalStyle(`${right} .avatar-wrapper`, {
  display: 'flex',
  alignItems: 'center'
})

globalStyle(`${right} .avatar`, {
  width: '24px',
  height: '24px'
})
