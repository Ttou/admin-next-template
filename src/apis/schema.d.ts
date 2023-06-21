export interface GetListReq {
  account?: string
  nickname?: string
  current: number
  pageSize: number
}

export interface GetListRes {
  content: any[]
  current: number
  size: number
  total: number
}

export interface LoginRes {
  token: string
}

export interface GetInfoRes {
  name: string
  roles: string[]
  menus: Menu[]
}
