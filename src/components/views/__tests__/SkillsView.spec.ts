import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import SkillsView from '@/components/views/SkillsView.vue'

beforeEach(() => {
  vi.stubGlobal(
    'IntersectionObserver',
    vi.fn(() => ({ observe: vi.fn(), disconnect: vi.fn(), unobserve: vi.fn() })),
  )
})

describe('SkillsView', () => {
  it('section uses bg-base-200', () => {
    const wrapper = mount(SkillsView)
    expect(wrapper.find('section').classes()).toContain('bg-base-200')
  })

  it('section heading has left-border accent', () => {
    const wrapper = mount(SkillsView)
    expect(wrapper.find('h2').classes()).toContain('border-l-2')
  })

  it('Language badges are filled (badge-primary, no badge-outline)', () => {
    const wrapper = mount(SkillsView)
    const badge = wrapper.find('[data-testid="badge-lang"]')
    expect(badge.classes()).toContain('badge-primary')
    expect(badge.classes()).not.toContain('badge-outline')
  })

  it('Framework badges are outlined (badge-outline)', () => {
    const wrapper = mount(SkillsView)
    expect(wrapper.find('[data-testid="badge-fw"]').classes()).toContain('badge-outline')
  })

  it('Tool badges use soft bg-base-100 fill', () => {
    const wrapper = mount(SkillsView)
    const badge = wrapper.find('[data-testid="badge-tool"]')
    expect(badge.classes()).toContain('bg-base-100')
    expect(badge.classes()).not.toContain('badge-primary')
  })

  it('skill groups have scroll-hidden class', () => {
    const wrapper = mount(SkillsView)
    expect(wrapper.findAll('.scroll-hidden').length).toBeGreaterThan(0)
  })
})
