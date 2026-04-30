import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { defineComponent, ref, nextTick } from 'vue'
import { useScrollAnimate } from '@/composables/useScrollAnimate'

const callbacks: IntersectionObserverCallback[] = []
const mockObserve = vi.fn()
const mockDisconnect = vi.fn()

beforeEach(() => {
  callbacks.length = 0
  mockObserve.mockClear()
  mockDisconnect.mockClear()
  vi.stubGlobal(
    'IntersectionObserver',
    vi.fn((cb: IntersectionObserverCallback) => {
      callbacks.push(cb)
      return { observe: mockObserve, disconnect: mockDisconnect, unobserve: vi.fn() }
    }),
  )
})

const TestComponent = defineComponent({
  setup() {
    const el1 = ref<HTMLElement | null>(null)
    const el2 = ref<HTMLElement | null>(null)
    useScrollAnimate(() => [el1.value, el2.value].filter(Boolean) as HTMLElement[], { staggerMs: 80 })
    return { el1, el2 }
  },
  template: `
    <div>
      <div ref="el1" class="scroll-hidden" data-testid="el1">one</div>
      <div ref="el2" class="scroll-hidden" data-testid="el2">two</div>
    </div>
  `,
})

describe('useScrollAnimate', () => {
  it('observes all elements on mount', async () => {
    mount(TestComponent)
    await nextTick()
    expect(mockObserve).toHaveBeenCalledTimes(2)
  })

  it('adds scroll-visible when element intersects', async () => {
    const wrapper = mount(TestComponent)
    await nextTick()
    const el = wrapper.find('[data-testid="el1"]').element as HTMLElement
    callbacks[0]([{ isIntersecting: true, target: el } as unknown as IntersectionObserverEntry], {} as IntersectionObserver)
    expect(el.classList.contains('scroll-visible')).toBe(true)
  })

  it('does not add scroll-visible when not intersecting', async () => {
    const wrapper = mount(TestComponent)
    await nextTick()
    const el = wrapper.find('[data-testid="el1"]').element as HTMLElement
    callbacks[0]([{ isIntersecting: false, target: el } as unknown as IntersectionObserverEntry], {} as IntersectionObserver)
    expect(el.classList.contains('scroll-visible')).toBe(false)
  })

  it('sets stagger transition-delay on elements', async () => {
    const wrapper = mount(TestComponent)
    await nextTick()
    const el1 = wrapper.find('[data-testid="el1"]').element as HTMLElement
    const el2 = wrapper.find('[data-testid="el2"]').element as HTMLElement
    expect(el1.style.transitionDelay).toBe('0ms')
    expect(el2.style.transitionDelay).toBe('80ms')
  })

  it('disconnects all observers on unmount', async () => {
    const wrapper = mount(TestComponent)
    await nextTick()
    wrapper.unmount()
    expect(mockDisconnect).toHaveBeenCalledTimes(2)
  })
})
