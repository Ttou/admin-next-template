declare interface LoginRes {
  token: string
}

declare interface GetInfoRes {
  nickname: string
  roles: string[]
  menus: Menu[]
}
