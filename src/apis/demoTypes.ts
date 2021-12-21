export type GetListReq = {
  account?: string
  nickname?: string
  current: number
  pageSize: number
}

export type GetListRes = {
  content: any[]
  current: number
  size: number
  total: number
}
