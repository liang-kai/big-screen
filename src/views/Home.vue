<script setup>
// 首页内容已清空
import { ref, computed } from 'vue'
import Data from '../components/Data.vue'
import Arithmetic from '../components/Arithmetic.vue'
import btn1Img from '../assets/home/title-data.png'
import btn2Img from '../assets/home/title-suan.png'
import btn3Img from '../assets/home/title-intel.png'
import { useRouter } from 'vue-router'

const activeTab = ref('data')
const router = useRouter()

const btnList = ref([
  {
    img: btn1Img,
    value: 'data',
    name: '数据',
    active: true
  },
  {
    img: btn2Img,
    value: 'arithmetic',
    name: '算力',
    active: false
  },
  {
    img: btn3Img,
    value: 'intel',
    name: '智能',
    active: false
  },
])

const tabClick = (btn) => {
  if (btn.active) return
  if(btn.value === 'intel') {
    router.push('/intel')
    return
  }
  btnList.value.forEach(b => {
    b.active = false
  })
  btn.active = true
  activeTab.value = btn.value
}


</script>

<template>
  <div class="flex w-full h-full">
    <!-- 左区 70%，以u-boat为背景居中 -->
    <div class="w-[67%] h-full p-4 flex items-center relative">
      <img src="../assets/home/top-left.png" alt="" class="left-top-title"/>
        <div class="sub-title self-start mb-[2vw] absolute bottom-0 left-[7vw]">
          <div class="list relative w-[12.2vw]" v-for="l in btnList" :key="l.value" @click="tabClick(l)">
            <img src="@/assets/home/big-btn-bg.png" alt="" class="width-full height-full"/>
            <div class="absolute w-full h-full top-0 left-0 flex justify-center"><img :src="l.img" alt="" class="block object-contain w-1/2 mb-1"></div>
          </div>
        </div>
      <div class="w-1/2 h-full left-[33.3vw] absolute">
        <img
          src="@/assets/home/u-boat.png"
          alt="u-boat"
          class="absolute w-[90vw] top-[12vw] left-[0vw] scale-300 -z-10"
          draggable="false"
        />
        <img src="../assets/home/middle-1.png" alt="" class="absolute w-[17vw] top-[5vw] left-[5vw]">
        <img src="../assets/home/middle-3.png" alt="" class="absolute w-[17vw] top-[19vw] right-[-2vw]">
        <img src="../assets/home/middle-2.png" alt="" class="absolute w-[17vw] bottom-[5vw] left-[2vw]">
      </div>
      <!-- 可在此添加左区内容 -->
       

    </div>
    <!-- 右区 30% -->
    <div class="flex-1 h-full p-2 ">
      <!-- 可在此添加右区内容 -->
      <Data v-if="activeTab === 'data'" />
      <Arithmetic v-if="activeTab === 'arithmetic'" />
    </div>
  </div>
</template>

<style scoped>

</style>
