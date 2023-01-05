declare interface LoginRes {
  token: string
}

declare interface GetInfoRes {
  name: string
  roles: string[]
  menus: Menu[]
}
