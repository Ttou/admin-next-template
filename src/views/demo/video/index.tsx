import { Button, Space } from 'ant-design-vue'
import { defineComponent, ref } from 'vue'

import { type ProVideoProps, type ProVideoRef, ProVideo } from '@/components'

import styles from './index.module.css'

export default defineComponent({
  name: 'DemoVideo',
  setup() {
    const videoRef = ref({} as ProVideoRef)
    const videoConfig = ref({
      options: {
        url: '//lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/byted-player-videos/1.0.0/xgplayer-demo-720p.mp4'
      }
    } as ProVideoProps)

    function handlePlay() {
      videoRef.value.player.start()
      videoRef.value.player.play()
    }

    function handlePause() {
      videoRef.value.player.pause()
    }

    function handleContinueToPlay() {
      videoRef.value.player.play()
    }

    function handleReplay() {
      videoRef.value.player.reload()
    }

    return {
      videoRef,
      videoConfig,
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
          <Space>
            <Button onClick={this.handlePlay}>播放</Button>
            <Button onClick={this.handlePause}>暂停</Button>
            <Button onClick={this.handleContinueToPlay}>继续播放</Button>
            <Button onClick={this.handleReplay}>重新播放</Button>
          </Space>
        </div>
      </div>
    )
  }
})
