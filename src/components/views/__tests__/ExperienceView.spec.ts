import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import ExperienceView from '@/components/views/ExperienceView.vue'

beforeEach(() => {
  vi.stubGlobal(
    'IntersectionObserver',
    vi.fn(() => ({ observe: vi.fn(), disconnect: vi.fn(), unobserve: vi.fn() })),
  )
})

describe('ExperienceView', () => {
  it('section uses bg-base-200', () => {
    const wrapper = mount(ExperienceView)
    expect(wrapper.find('section').classes()).toContain('bg-base-200')
  })

  it('section heading has left-border accent', () => {
    const wrapper = mount(ExperienceView)
    expect(wrapper.find('h2').classes()).toContain('border-l-2')
  })

  it('has scroll-hidden elements for animation', () => {
    const wrapper = mount(ExperienceView)
    expect(wrapper.findAll('.scroll-hidden').length).toBeGreaterThan(0)
  })
})
