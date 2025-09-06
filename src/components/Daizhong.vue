<script setup>
import { ref, computed, onUnmounted } from 'vue'
import { usePolling } from '../utils/usePolling'
import dayjs from 'dayjs'
import { getData } from '../utils/utils'

const randomMan = ref({})
const tody = dayjs().format('YYYY-MM-DD')
const firstTime = ref('')
const firstChannel = ref('')
const firstCard = ref('')
const sumCardNum = ref('')
const sumJwtTime = ref('')

const getD = async () => {
  const {data} = await getData({
    rptDt: dayjs().format('YYYY-MM-DD'),
    mode: '1'
  })
  
  console.log(data)

  data.forEach(item => {
    if(item.indicator_name === '随机一名批核客户信息') {
      randomMan.value = JSON.parse(item.indicator_value)
    } else if(item.indicator_name === '当日第一笔进件时间') {
      firstTime.value = dayjs(item.indicator_value).format('HH:mm')
    } else if(item.indicator_name === '当日第一笔进件渠道') {
      firstChannel.value = item.indicator_value
    } else if(item.indicator_name === '当日第一笔申请卡版') {
      // 卡产品大类不良率G01口径
      firstCard.value = item.indicator_value
    } else if(item.indicator_name === '当日累计进件量') {
      // 卡产品大类不良率G01口径
      sumCardNum.value = (+item.indicator_value/10000).toFixed(2) + '万'
    } else if(item.indicator_name === '实时运算次数') {
      // 卡产品大类不良率G01口径
      sumJwtTime.value = (+item.indicator_value/10000/10000).toFixed(2) + '亿'
    }
  })
}

const { start, stop } = usePolling(getD, 5000) // 3秒轮询
onUnmounted(() => {
  stop()
})
start()

// 需要时调用 start()，页面销毁自动 stop



</script>
<template>
  <div>
    <div>袋中</div>
    <div>客户信息：{{ randomMan }}</div>
    <div>当日第一笔进件时间：{{ firstTime }}</div>
    <div>当日第一笔进件渠道：{{ firstChannel }}</div>
    <div>当日第一笔申请卡版：{{ firstCard }}</div>
    <div>当日累计进件量：{{ sumCardNum }}</div>
    <div>实时运算次数：{{ sumJwtTime }}</div>
  </div>
</template>