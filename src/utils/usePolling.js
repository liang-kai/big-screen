import { ref, onUnmounted } from 'vue'

export function usePolling(requestFn, interval = 5000) {
  const timer = ref(null)
  const isActive = ref(false)

  const start = async () => {
    isActive.value = true
    await requestFn()
    timer.value = setInterval(requestFn, interval)
  }

  const stop = () => {
    isActive.value = false
    if (timer.value) clearInterval(timer.value)
  }

  onUnmounted(stop)

  return { start, stop, isActive }
}