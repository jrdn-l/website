import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import AboutView from '@/components/views/AboutView.vue'

beforeEach(() => {
  vi.stubGlobal(
    'IntersectionObserver',
    vi.fn(() => ({ observe: vi.fn(), disconnect: vi.fn(), unobserve: vi.fn() })),
  )
})

describe('AboutView', () => {
  it('section heading has left-border accent', () => {
    const wrapper = mount(AboutView)
    expect(wrapper.find('h2').classes()).toContain('border-l-2')
  })

  it('second paragraph has left-border accent', () => {
    const wrapper = mount(AboutView)
    const paras = wrapper.findAll('p')
    expect(paras[1].classes()).toContain('border-l-2')
  })

  it('elements have scroll-hidden class', () => {
    const wrapper = mount(AboutView)
    expect(wrapper.findAll('.scroll-hidden').length).toBeGreaterThan(0)
  })
})
