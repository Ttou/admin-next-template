import { CSS_VARS } from './cssVars'

export const SETTING = {
  tabbar: true,
  fixedHeader: true,
  sideOpened: true,
  sideOpenedWidth: CSS_VARS.menuWidth,
  sideClosedWidth: CSS_VARS.menuCollapseWidth,
  homeRoute: {
    name: 'Analysis',
    path: '/dashboard/analysis'
  }
} as Setting
