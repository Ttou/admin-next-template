import './index.less'

import { computed, defineComponent } from 'vue'

import { propTypes } from '@/utils'

export default defineComponent({
  name: 'SvgIcon',
  props: {
    prefix: propTypes.string().def('icon'),
    name: propTypes.string().isRequired
  },
  setup(props) {
    const symbolId = computed(() => `#${props.prefix}-${props.name}`)

    return {
      symbolId
    }
  },
  render() {
    return (
      <svg class="svg-icon" aria-hidden="true">
        <use xlinkHref={this.symbolId} />
      </svg>
    )
  }
})
