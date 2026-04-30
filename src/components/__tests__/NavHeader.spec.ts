import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import NavHeader from '@/components/NavHeader.vue'

describe('NavHeader', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'scrollY', { value: 0, writable: true, configurable: true })
  })

  it('does not show border when at top of page', () => {
    const wrapper = mount(NavHeader)
    expect(wrapper.find('.navbar').classes()).not.toContain('border-b')
  })

  it('adds border-b after scrolling past hero', async () => {
    const wrapper = mount(NavHeader)
    Object.defineProperty(window, 'scrollY', { value: 100, writable: true, configurable: true })
    window.dispatchEvent(new Event('scroll'))
    await nextTick()
    expect(wrapper.find('.navbar').classes()).toContain('border-b')
  })
})
