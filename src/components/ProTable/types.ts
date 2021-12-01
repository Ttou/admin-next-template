import type { ExtractPropTypes } from 'vue'

import type props from './props'

export type PropTableProps = ExtractPropTypes<typeof props>
