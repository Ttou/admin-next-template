import { ElInput, ElPopover, ElTabPane, ElTabs } from 'element-plus'
import { defineComponent, nextTick, reactive, toRefs, watch } from 'vue'

import IconVirtualList from './IconVirtualList'
import { iconList, iconVirtualPickProps } from './IconVirtualPick.define'

export default defineComponent({
  name: 'IconVirtualPick',
  props: iconVirtualPickProps(),
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const state = reactive({
      show: false,
      activeIconSet: iconList[0].value,
      activeIconIndex: 0,
      listRefs: {} as Record<string, ComponentRef>
    })

    function handleChange({ value, index }) {
      emit('update:modelValue', value)
      state.activeIconIndex = index
      state.show = false
    }

    watch(
      () => state.show,
      val => {
        if (val) {
          nextTick(() => {
            state.listRefs[state.activeIconSet]?.scrollTo(state.activeIconIndex)
          })
        }
      }
    )

    watch(
      () => state.activeIconSet,
      () => {
        nextTick(() => {
          console.log(state.listRefs, state.activeIconSet)
          state.listRefs[state.activeIconSet]?.scrollTo(0)
        })
      }
    )

    watch(
      () => props.modelValue,
      val => {
        if (val) {
          const [provider, iconSet, iconName] = val.split(':')
          state.activeIconSet = iconSet
          state.activeIconIndex = iconList
            .find(v => v.value === iconSet)!
            .icons.findIndex(v => v.includes(val))
        }
      },
      {
        immediate: true
      }
    )

    return {
      ...toRefs(state),
      iconList,
      handleChange
    }
  },
  render() {
    return (
      <ElPopover
        v-model:visible={this.show}
        placement="bottom"
        width="400"
        trigger="click"
      >
        {{
          default: () => (
            <ElTabs v-model={this.activeIconSet}>
              {this.iconList.map(item => (
                <ElTabPane
                  key={item.value}
                  name={item.value}
                  label={item.label}
                >
                  <IconVirtualList
                    ref={e => (this.listRefs[item.value] = e)}
                    data={item.icons}
                    activeIconName={this.modelValue}
                    onChange={this.handleChange}
                  />
                </ElTabPane>
              ))}
            </ElTabs>
          ),
          reference: () => (
            <ElInput
              modelValue={this.modelValue}
              placeholder="请选择图标"
              clearable
              onClear={() => this.handleChange({ value: '', index: 0 })}
            />
          )
        }}
      </ElPopover>
    )
  }
})
