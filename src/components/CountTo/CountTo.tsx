import { TransitionPresets, useTransition } from '@vueuse/core'
import { isNumber } from 'lodash-es'
import {
  computed,
  defineComponent,
  onMounted,
  ref,
  watch,
  watchEffect
} from 'vue'

import countToProps from './CountToTypes'

export { countToProps }

export default defineComponent({
  name: 'CountTo',
  props: countToProps(),
  emits: ['started', 'finished'],
  setup(props, { emit }) {
    const source = ref(props.startVal)
    const disabled = ref(false)

    let outputValue = useTransition(source)

    const value = computed(() => formatNumber(outputValue.value))

    function start() {
      run()
      source.value = props.endVal
    }

    function reset() {
      source.value = props.startVal
      run()
    }

    function run() {
      outputValue = useTransition(source, {
        disabled,
        duration: props.duration,
        onFinished: () => emit('finished'),
        onStarted: () => emit('started'),
        ...(props.useEasing
          ? { transition: TransitionPresets[props.transition] }
          : {})
      })
    }

    function formatNumber(num: number | string) {
      if (!num && num !== 0) {
        return ''
      }

      const { decimals, decimal, separator, suffix, prefix } = props
      num = Number(num).toFixed(decimals)
      num += ''
      const x = num.split('.')
      let x1 = x[0]
      const x2 = x.length > 1 ? decimal + x[1] : ''
      const rgx = /(\d+)(\d{3})/

      if (separator && !isNumber(separator)) {
        while (rgx.test(x1)) {
          x1 = x1.replace(rgx, '$1' + separator + '$2')
        }
      }

      return prefix + x1 + x2 + suffix
    }

    watchEffect(() => {
      source.value = props.startVal
    })

    watch([() => props.startVal, () => props.endVal], () => {
      if (props.autoplay) {
        start()
      }
    })

    onMounted(() => {
      if (props.autoplay) {
        start()
      }
    })

    return {
      value,
      start,
      reset
    }
  },
  render() {
    return <span>{this.value}</span>
  }
})
