import { onMounted, onUnmounted } from 'vue'

export function useScrollAnimate(
  getEls: () => HTMLElement[],
  { staggerMs = 0 }: { staggerMs?: number } = {},
) {
  const observers: IntersectionObserver[] = []

  onMounted(() => {
    getEls().forEach((el, i) => {
      el.style.transitionDelay = `${i * staggerMs}ms`
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.add('scroll-visible')
            observer.disconnect()
          }
        },
        { threshold: 0.1 },
      )
      observer.observe(el)
      observers.push(observer)
    })
  })

  onUnmounted(() => observers.forEach((o) => o.disconnect()))
}
