import { mount } from '@vue/test-utils'
import { promiseTimeout } from '@vueuse/shared'
import { describe, expect, it } from 'vitest'

import CountTo from '.'

describe('CountTo', () => {
  it('test endVal', async () => {
    const wrapper = mount(CountTo, {
      props: {
        endVal: 2000
      }
    })

    await promiseTimeout(1500)

    expect(wrapper.text()).toContain('2,000')
  })
})
