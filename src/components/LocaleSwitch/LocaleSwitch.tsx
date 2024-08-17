import { Icon } from '@iconify/vue'
import { ElButton, ElPopover, ElSpace } from 'element-plus'
import { defineComponent } from 'vue'

import type { ILocale } from '@/i18n'
import { useLocaleStore } from '@/store'

import styles from './LocaleSwitch.module.css'

export default defineComponent({
  name: 'LocaleSwitch',
  setup() {
    const localeStore = useLocaleStore()

    function getType(value: ILocale) {
      if (localeStore.locale === value) {
        return 'primary'
      }
      return 'default'
    }

    function handleClick(value: ILocale) {
      if (localeStore.locale === value) {
        return
      }
      localeStore.setLocale(value)
    }

    return {
      getType,
      handleClick
    }
  },
  render() {
    return (
      <ElPopover>
        {{
          reference: () => (
            <div>
              <Icon icon={'@local:icon-park-outline:translate'} inline />
            </div>
          ),
          default: () => (
            <div class={styles.locales}>
              <ElSpace direction="vertical">
                <ElButton
                  type={this.getType('zh_CN')}
                  bg={this.getType('zh_CN') === 'primary'}
                  text
                  onClick={() => this.handleClick('zh_CN')}
                >
                  中文
                </ElButton>
                <ElButton
                  type={this.getType('en_US')}
                  bg={this.getType('en_US') === 'primary'}
                  text
                  onClick={() => this.handleClick('en_US')}
                >
                  English
                </ElButton>
              </ElSpace>
            </div>
          )
        }}
      </ElPopover>
    )
  }
})
