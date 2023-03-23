import vars from '@/assets/styles/var.module.css'

export const SETTING = {
  title: import.meta.env.VITE_APP_TITLE,
  fixedHeader: true,
  sideOpened: true,
  sideOpenedWidth: vars.menuWidth,
  sideClosedWidth: vars.menuCollapseWidth,
  homeRoute: {
    name: 'Analysis',
    path: '/dashboard/analysis'
  }
} as Setting
