<template>
  <span>{{ value }}</span>
</template>

<script lang="ts">
import { TransitionPresets, useTransition } from '@vueuse/core'
import { isNumber } from 'lodash-unified'
import {
  computed,
  defineComponent,
  onMounted,
  reactive,
  toRef,
  watch,
  watchEffect
} from 'vue'

import { props } from './CountTo.constant'

export default defineComponent({
  name: 'CountTo',
  props: props(),
  emits: ['started', 'finished'],
  setup(props, { emit }) {
    const state = reactive({
      source: props.startVal,
      disabled: false
    })
    const source = toRef(state, 'source')

    let outputValue = useTransition(source)

    const value = computed(() => formatNumber(outputValue.value))

    function start() {
      run()
      state.source = props.endVal
    }

    function reset() {
      state.source = props.startVal
      run()
    }

    function run() {
      outputValue = useTransition(source, {
        disabled: state.disabled,
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
      const regExp = /(\d+)(\d{3})/

      if (separator && !isNumber(separator)) {
        while (regExp.test(x1)) {
          x1 = x1.replace(regExp, '$1' + separator + '$2')
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
  }
})
</script>
