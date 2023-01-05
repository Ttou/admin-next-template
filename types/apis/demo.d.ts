declare interface GetListReq {
  account?: string
  nickname?: string
  current: number
  pageSize: number
}

declare interface GetListRes {
  content: any[]
  current: number
  size: number
  total: number
}
