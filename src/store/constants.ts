function createActions<T extends Record<string, any>>(name: string, types: T) {
  return new Proxy<T>(types, {
    get(target: any, p: string) {
      return `${name}/${target[p]}`
    }
  })
}

export const PermissionModule = {
  name: 'permission',
  actions: {
    generateRoutes: 'generateRoutes'
  },
  mutations: {
    SET_ROUTES: 'SET_ROUTES'
  }
}

export const SettingsModule = {
  name: 'settings',
  actions: {
    changeSetting: 'changeSetting'
  },
  mutations: {
    CHANGE_SETTING: 'CHANGE_SETTING'
  }
}

export const TabsModule = {
  name: 'tabs',
  actions: {
    addTab: 'addTab',
    addVisitedTab: 'addVisitedTab',
    addCachedTab: 'addCachedTab',
    delTab: 'delTab',
    delVisitedTab: 'delVisitedTab',
    delCachedTab: 'delCachedTab',
    delLeftTabs: 'delLeftTabs',
    delLeftVisitedTabs: 'delLeftVisitedTabs',
    delLeftCachedTabs: 'delLeftCachedTabs',
    delRightTabs: 'delRightTabs',
    delRightVisitedTabs: 'delRightVisitedTabs',
    delRightCachedTabs: 'delRightCachedTabs',
    delOthersTabs: 'delOthersTabs',
    delOthersVisitedTabs: 'delOthersVisitedTabs',
    delOthersCachedTabs: 'delOthersCachedTabs',
    delAllTabs: 'delAllTabs',
    delAllVisitedTabs: 'delAllVisitedTabs',
    delAllCachedTabs: 'delAllCachedTabs'
  },
  mutations: {
    ADD_VISITED_TAB: 'ADD_VISITED_TAB',
    ADD_CACHED_TAB: 'ADD_CACHED_TAB',
    DEL_VISITED_TAB: 'DEL_VISITED_TAB',
    DEL_CACHED_TAB: 'DEL_CACHED_TAB',
    DEL_LEFT_VISITED_TABS: 'DEL_LEFT_VISITED_TABS',
    DEL_LEFT_CACHED_TABS: 'DEL_LEFT_CACHED_TABS',
    DEL_RIGHT_VISITED_TABS: 'DEL_RIGHT_VISITED_TABS',
    DEL_RIGHT_CACHED_TABS: 'DEL_RIGHT_CACHED_TABS',
    DEL_OTHERS_VISITED_TABS: 'DEL_OTHERS_VISITED_TABS',
    DEL_OTHERS_CACHED_TABS: 'DEL_OTHERS_CACHED_TABS',
    DEL_ALL_VISITED_TABS: 'DEL_ALL_VISITED_TABS',
    DEL_ALL_CACHED_TABS: 'DEL_ALL_CACHED_VIEWS'
  }
}

export const UserModule = {
  name: 'user',
  actions: {
    login: 'login',
    logout: 'logout',
    getInfo: 'getInfo',
    clear: 'clear'
  },
  mutations: {
    SET_TOKEN: 'SET_TOKEN',
    SET_NAME: 'SET_NAME',
    SET_ROLES: 'SET_ROLES'
  }
}

export const Actions = {
  permission: createActions(PermissionModule.name, PermissionModule.actions),
  setting: createActions(SettingsModule.name, SettingsModule.actions),
  tabs: createActions(TabsModule.name, TabsModule.actions),
  user: createActions(UserModule.name, UserModule.actions)
}
