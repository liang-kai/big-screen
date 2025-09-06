<script setup>
// 首页内容已清空
import { ref } from 'vue'
import Data from '../components/Data.vue'
import Arithmetic from '../components/Arithmetic.vue'
import btn1Img from '../assets/home/title-data.png'
import btn2Img from '../assets/home/title-suan.png'
import btn3Img from '../assets/home/title-intel.png'


const btnList = ref([
  {
    img: btn1Img,
    value: 'data',
    name: '数据'
  },
  {
    img: btn2Img,
    value: 'arithmetic',
    name: '算力'
  },
  {
    img: btn3Img,
    value: 'intel',
    name: '智能'
  },
])
</script>

<template>
  <div class="flex w-full h-full">
    <!-- 左区 70%，以u-boat为背景居中 -->
    <div class="w-[68.5%] h-full p-4 flex items-center relative">
      <div class="flex flex-col items-center justify-between z-10 text-white ml-[8vw]" style="height: 100%; ">
        <img src="../assets/home/top-left.png" alt="" class="w-[20vw] mt-[3vw] block object-contain"/>
        <div class="sub-title self-start mb-[2vw] ">
          <div class="list relative w-[12.2vw]" v-for="l in btnList" :key="l.value">
            <img src="@/assets/home/big-btn-bg.png" alt="" class="width-full height-full"/>
            <div class="absolute w-full h-full top-0 left-0 flex justify-center"><img :src="l.img" alt="" class="block object-contain w-1/2"></div>
          </div>
        </div>
      </div>
      <img
        src="@/assets/home/u-boat.png"
        alt="u-boat"
        class="absolute left-1/2 top-1/2 max-w-[80%] max-h-[80%] -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
        style="scale: 1.52;left: 71%;"
        draggable="false"
      />
      <div class="bg-amber-100/20 w-1/2 h-full relative">
        <img src="../assets/home/middle-1.png" alt="" class="absolute w-[15vw] top-[5vw] left-[5vw]">
        <img src="../assets/home/middle-3.png" alt="" class="absolute w-[15vw] top-[15vw] right-[0vw]">
        <img src="../assets/home/middle-2.png" alt="" class="absolute w-[15vw] bottom-[5vw] left-[5vw]">
      </div>
      <!-- 可在此添加左区内容 -->
       

    </div>
    <!-- 右区 30% -->
    <div class="flex-1 h-full p-4 bg-teal-50/20">
      <!-- 可在此添加右区内容 -->
      <Data />
    </div>
  </div>
</template>

<style scoped>

</style>
