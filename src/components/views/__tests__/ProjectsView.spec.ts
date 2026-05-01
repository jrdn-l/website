import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import ProjectsView from '@/components/views/ProjectsView.vue'

beforeEach(() => {
  vi.stubGlobal(
    'IntersectionObserver',
    vi.fn(() => ({ observe: vi.fn(), disconnect: vi.fn(), unobserve: vi.fn() })),
  )
})

describe('ProjectsView', () => {
  it('renders a card for each project', () => {
    const wrapper = mount(ProjectsView)
    expect(wrapper.findAll('[data-testid="project-card"]')).toHaveLength(3)
  })

  it('each card has an image strip', () => {
    const wrapper = mount(ProjectsView)
    expect(wrapper.findAll('[data-testid="card-image"]')).toHaveLength(3)
  })

  it('cards have hover lift class', () => {
    const wrapper = mount(ProjectsView)
    expect(wrapper.find('[data-testid="project-card"]').classes()).toContain('hover:-translate-y-1')
  })

  it('section heading has left-border accent', () => {
    const wrapper = mount(ProjectsView)
    expect(wrapper.find('h2').classes()).toContain('border-l-2')
  })

  it('cards have scroll-hidden class', () => {
    const wrapper = mount(ProjectsView)
    expect(wrapper.findAll('[data-testid="project-card"]')[0].classes()).toContain('scroll-hidden')
  })
})
