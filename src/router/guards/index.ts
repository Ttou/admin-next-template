import type { Router } from 'vue-router'

import permissionGuard from './permissionGuard'
import progressGuard from './progressGuard'

export default function (router: Router) {
  progressGuard(router)
  permissionGuard(router)
}
