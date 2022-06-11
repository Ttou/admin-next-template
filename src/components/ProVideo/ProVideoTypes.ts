import type { PropType } from 'vue'
import Player, { type IPlayerOptions } from 'xgplayer'

export const proVideoProps = () => ({
  options: {
    type: Object as PropType<IPlayerOptions>,
    required: true
  }
})

export type ProVideoProps = ComponentProps<typeof proVideoProps>

export type ProVideoRef = {
  /** 视频容器 */
  video: ElementRef
  /** 播放器实例 */
  player: Player
}

export default proVideoProps
