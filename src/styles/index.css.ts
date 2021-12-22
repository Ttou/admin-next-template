import './transitions.css'

import { globalStyle } from '@vanilla-extract/css'

globalStyle('*,*::before,*::after', {
  padding: 0,
  margin: 0,
  boxSizing: 'border-box'
})

globalStyle('html,body,#app ', {
  width: '100%',
  height: '100%',
  overflowX: 'hidden'
})

globalStyle('ul,li,ol', {
  listStyle: 'none'
})

globalStyle('a', {
  color: 'inherit !important',
  textDecoration: 'inherit !important'
})
