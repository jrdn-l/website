import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HeroSection from '@/components/HeroSection.vue'

describe('HeroSection', () => {
  it('renders the name Jordan', () => {
    const wrapper = mount(HeroSection)
    expect(wrapper.text()).toContain('Jordan')
  })

  it('renders LinkedIn link', () => {
    const wrapper = mount(HeroSection)
    const link = wrapper.find('a[href*="linkedin"]')
    expect(link.exists()).toBe(true)
    expect(link.text()).toContain('LinkedIn')
  })

  it('renders avatar with J initial', () => {
    const wrapper = mount(HeroSection)
    expect(wrapper.find('[data-testid="avatar"]').text().trim()).toBe('J')
  })

  it('renders three geometric shapes', () => {
    const wrapper = mount(HeroSection)
    expect(wrapper.findAll('[data-testid="shape"]')).toHaveLength(3)
  })

  it('does not render a GitHub link', () => {
    const wrapper = mount(HeroSection)
    const githubLinks = wrapper.findAll('a').filter((a) => a.text().toLowerCase().includes('github'))
    expect(githubLinks).toHaveLength(0)
  })
})
