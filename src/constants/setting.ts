import type { Setting } from './settingTypes'

export const SETTING = {
  title: '后台管理系统',
  fixedHeader: true,
  headerHeight: '48px',
  siderOpened: true,
  siderTheme: 'dark',
  siderOpenedWidth: '256px',
  siderClosedWidth: '80px',
  siderLogoHeight: '44px',
  homeRoute: {
    name: 'Analysis',
    path: '/dashboard/analysis'
  }
} as Setting
