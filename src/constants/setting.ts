import vars from '@/styles/var.module.css'

export const SETTING = {
  title: '后台管理系统',
  fixedHeader: true,
  sideOpened: true,
  sideOpenedWidth: vars.menuWidth,
  sideClosedWidth: vars.menuCollapseWidth,
  homeRoute: {
    name: 'Analysis',
    path: '/dashboard/analysis'
  }
} as Setting
