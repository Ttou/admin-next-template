import { ElButton, ElSpace } from 'element-plus'
import { defineComponent, reactive, toRefs } from 'vue'

import { type ProVideoProps, type ProVideoRef, ProVideo } from '@/components'

import styles from './index.module.css'

export default defineComponent({
  name: 'DemoVideo',
  setup() {
    const state = reactive({
      videoRef: {} as ProVideoRef,
      videoConfig: {
        options: {
          url: '//lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/byted-player-videos/1.0.0/xgplayer-demo-720p.mp4'
        }
      } as ProVideoProps
    })

    function handlePlay() {
      state.videoRef.player.start()
      state.videoRef.player.play()
    }

    function handlePause() {
      state.videoRef.player.pause()
    }

    function handleContinueToPlay() {
      state.videoRef.player.play()
    }

    function handleReplay() {
      state.videoRef.player.reload()
    }

    return {
      ...toRefs(state),
      handlePlay,
      handlePause,
      handleContinueToPlay,
      handleReplay
    }
  },
  render() {
    return (
      <div class={styles.view}>
        <ProVideo ref="videoRef" {...this.videoConfig} />
        <div class={styles.btns}>
          <ElSpace>
            <ElButton onClick={this.handlePlay}>播放</ElButton>
            <ElButton onClick={this.handlePause}>暂停</ElButton>
            <ElButton onClick={this.handleContinueToPlay}>继续播放</ElButton>
            <ElButton onClick={this.handleReplay}>重新播放</ElButton>
          </ElSpace>
        </div>
      </div>
    )
  }
})
