export const countToProps = () => ({
  /**
   * 开始值
   */
  startVal: { type: Number, default: 0 },
  /**
   * 结束值
   */
  endVal: { type: Number, default: 1000 },
  /**
   * 持续时间
   */
  duration: { type: Number, default: 1500 },
  /**
   * 自动播放
   */
  autoplay: { type: Boolean, default: true },
  /**
   * 保留小数点位数
   */
  decimals: { type: Number, default: 0, validator: (val: number) => val >= 0 },
  /**
   * 前缀
   */
  prefix: { type: String, default: '' },
  /**
   * 后缀
   */
  suffix: { type: String, default: '' },
  /**
   * 分隔符号
   */
  separator: { type: String, default: ',' },
  /**
   * 小数点符号
   */
  decimal: { type: String, default: '.' },
  /**
   * 使用动画
   */
  useEasing: { type: Boolean, default: true },
  /**
   * 过渡动画
   */
  transition: { type: String, default: 'linear' }
})

export type CountToProps = ComponentProps<typeof countToProps>
