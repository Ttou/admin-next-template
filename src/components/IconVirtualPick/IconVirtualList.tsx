import { Icon } from '@iconify/vue'
import { useVirtualList } from '@vueuse/core'
import { computed, defineComponent } from 'vue'

import { iconVirtualListProps } from './IconVirtualList.define'
import styles from './IconVirtualList.module.css'

export default defineComponent({
  name: 'IconVirtualList',
  props: iconVirtualListProps(),
  emits: ['change'],
  setup(props, { emit }) {
    const filteredData = computed(() => props.data)

    const { list, containerProps, wrapperProps, scrollTo } = useVirtualList(
      filteredData,
      { itemHeight: 50 }
    )

    function handleSelect(value: string, index: number) {
      emit('change', { value, index })
    }

    return {
      list,
      containerProps,
      wrapperProps,
      scrollTo,
      handleSelect
    }
  },
  render() {
    return (
      <div
        {...this.containerProps}
        style={{
          height: '300px'
        }}
      >
        <div {...this.wrapperProps}>
          {this.list.map(row => (
            <div key={row.index}>
              {row.data.map(icon => (
                <div
                  class={[
                    styles.iconItem,
                    {
                      selected: icon === this.activeIconName
                    }
                  ]}
                  key={icon}
                  onClick={() => this.handleSelect(icon, row.index)}
                >
                  <Icon icon={icon} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    )
  }
})
