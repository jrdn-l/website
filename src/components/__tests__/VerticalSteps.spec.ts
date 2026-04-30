import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import VerticalSteps from '@/components/VerticalSteps.vue'

const items = [
  { title: 'Senior Engineer', subtitle: 'Acme', date: '2023–present' },
  { title: 'Engineer', subtitle: 'Initech', date: '2021–2023' },
]

beforeEach(() => {
  vi.stubGlobal(
    'IntersectionObserver',
    vi.fn(() => ({ observe: vi.fn(), disconnect: vi.fn(), unobserve: vi.fn() })),
  )
})

describe('VerticalSteps', () => {
  it('renders the correct number of list items', () => {
    const wrapper = mount(VerticalSteps, { props: { items } })
    expect(wrapper.findAll('li')).toHaveLength(2)
  })

  it('dots have ring-2 class', () => {
    const wrapper = mount(VerticalSteps, { props: { items } })
    expect(wrapper.find('[data-testid="timeline-dot"]').classes()).toContain('ring-2')
  })

  it('connecting line has scale-y-0 class initially', () => {
    const wrapper = mount(VerticalSteps, { props: { items } })
    expect(wrapper.find('[data-testid="timeline-line"]').classes()).toContain('scale-y-0')
  })

  it('shows one connecting line between two items', () => {
    const wrapper = mount(VerticalSteps, { props: { items } })
    expect(wrapper.findAll('[data-testid="timeline-line"]')).toHaveLength(1)
  })
})
