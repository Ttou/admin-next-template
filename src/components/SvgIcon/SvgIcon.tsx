import { computed, defineComponent } from 'vue'

import styles from './index.module.css'
import svgIconProps from './SvgIconTypes'

export { svgIconProps }

export default defineComponent({
  name: 'SvgIcon',
  props: svgIconProps(),
  setup(props) {
    const symbolId = computed(() => `#${props.prefix}-${props.name}`)

    return {
      symbolId
    }
  },
  render() {
    return (
      <svg class={styles.svgIcon} aria-hidden="true">
        <use xlinkHref={this.symbolId} />
      </svg>
    )
  }
})
