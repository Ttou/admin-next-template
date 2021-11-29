import type { PropType } from 'vue'

import type { EditorConfig } from './types'

export default {
  config: {
    type: Object as PropType<EditorConfig>,
    default: (): Partial<EditorConfig> => ({ height: 500 })
  }
}
