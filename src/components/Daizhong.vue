<script setup>
import { ref, computed, onUnmounted } from 'vue'
import { usePolling } from '../utils/usePolling'
import dayjs from 'dayjs'
import { getData } from '../utils'

const getD = async () => {
  const data = await getData({
    rptDt: dayjs().format('YYYY-MM-DD'),
    mode: '1'
  })
  console.log(data)
}

const { start, stop } = usePolling(getD, 3000) // 3秒轮询
onUnmounted(() => {
  stop()
})
start()

// 需要时调用 start()，页面销毁自动 stop
</script>
<template>
    <div>袋中</div>
</template>