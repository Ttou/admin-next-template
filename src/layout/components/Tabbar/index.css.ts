import { globalStyle, style } from '@vanilla-extract/css'

export const tabbar = style({
  display: 'flex',
  justifyContent: 'space-between',
  height: '42px',
  padding: '6px 12px',
  backgroundColor: '#f5f7f9',
  transition: 'all 0.2s ease',
  zIndex: 50
})

globalStyle(`${tabbar} .ant-tab`, {
  flexGrow: 1,
  flexShrink: 1
})

globalStyle(`${tabbar} .ant-tabs-bar`, {
  margin: 0,
  border: 'none'
})

globalStyle(`${tabbar} .ant-tabs-tab`, {
  height: '32px',
  margin: '0 6px 0 0',
  padding: '5px 16px 4px',
  backgroundColor: '#fff',
  borderRadius: '3px',
  border: 'none',
  color: '#808695',
  cursor: 'default',
  userSelect: 'none'
})

globalStyle(`${tabbar} .ant-tabs-tab::before`, {
  top: 0,
  borderTopColor: 'inherit'
})

globalStyle(`${tabbar} .ant-tabs-tab-active`, {
  color: '#2d8cf0',
  fontWeight: 'unset'
})

globalStyle(`${tabbar} .ant-tabs-ink-bar`, {
  display: 'none !important'
})

export const tabContent = style({})

globalStyle(`${tabContent} .anticon`, {
  margin: '0 0 0 6px',
  color: '#999'
})

globalStyle(`${tabContent} .anticon:hover`, {
  color: '#444'
})

export const tabsMenu = style({
  flexGrow: 0,
  flexShrink: 0,
  width: '30px',
  height: '30px',
  lineHeight: '30px',
  textAlign: 'center',
  backgroundColor: '#fff',
  borderRadius: '2px',
  cursor: 'pointer'
})
