import { type ExtractPropTypes } from 'vue'
import type Player from 'xgplayer'

import type props from './props'

export type ProVideoProps = ExtractPropTypes<typeof props>

export type ProVideoRef = {
  /** 视频容器 */
  video: ElementRef
  /** 播放器实例 */
  player: Player
}
