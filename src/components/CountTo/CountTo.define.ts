import type { TransitionPresets } from '@vueuse/core'
import { bool, number, string } from 'vue-types'

export const countToProps = () => ({
  /**
   * 开始值
   */
  startVal: number().def(0),
  /**
   * 结束值
   */
  endVal: number().def(1000),
  /**
   * 持续时间
   */
  duration: number().def(1500),
  /**
   * 自动播放
   */
  autoplay: bool().def(true),
  /**
   * 保留小数点位数
   */
  decimals: number()
    .def(0)
    .validate(val => val >= 0),
  /**
   * 前缀
   */
  prefix: string().def(''),
  /**
   * 后缀
   */
  suffix: string().def(''),
  /**
   * 分隔符号
   */
  separator: string().def(','),
  /**
   * 小数点符号
   */
  decimal: string().def('.'),
  /**
   * 使用动画
   */
  useEasing: bool().def(true),
  /**
   * 过渡动画
   */
  transition: string<keyof typeof TransitionPresets>().def('linear')
})

export type CountToProps = ReturnType<typeof countToProps>
