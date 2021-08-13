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
    delTab: 'delTab',
    delLeftTabs: 'delLeftTabs',
    delRightTabs: 'delRightTabs',
    delOthersTabs: 'delOthersTabs',
    delAllTabs: 'delAllTabs',
    delCachedTab: 'delCachedTab'
  },
  mutations: {
    ADD_TAB: 'ADD_TAB',
    DEL_TAB: 'DEL_TAB',
    DEL_LEFT_TABS: 'DEL_LEFT_TABS',
    DEL_RIGHT_TABS: 'DEL_RIGHT_TABS',
    DEL_OTHERS_TABS: 'DEL_OTHERS_TABS',
    DEL_ALL_TABS: 'DEL_ALL_TABS',
    DEL_CACHED_TAB: 'DEL_CACHED_TAB',
    UPDATE_CACHED_TAB: 'UPDATE_CACHED_TAB'
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
