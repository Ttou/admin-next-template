import { ExtractPropTypes } from 'vue'

import type props from './props'

export type ProQrProps = ExtractPropTypes<typeof props>
