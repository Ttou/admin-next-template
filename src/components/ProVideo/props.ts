import { type PropType } from 'vue'
import { type IPlayerOptions } from 'xgplayer'

export default {
  options: {
    type: Object as PropType<IPlayerOptions>,
    required: true
  }
}
