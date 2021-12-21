import { ExtractPropTypes } from 'vue'

import type props from './props'

export type QrCodeProps = ExtractPropTypes<typeof props>
