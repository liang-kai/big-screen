<script setup>
    import { ref, computed } from 'vue'
    import btn1Img from '../assets/arithmetic/bright-01.png'
    import btn2Img from '../assets/arithmetic/bright-02.png'
    import btn3Img from '../assets/arithmetic/bright-03.png'
    import btn4Img from '../assets/arithmetic/bright-04.png'
    import btn5Img from '../assets/arithmetic/bright-05.png'
    import btn6Img from '../assets/arithmetic/bright-06.png'
    import btn1DarkImg from '../assets/arithmetic/dark-01.png'
    import btn2DarkImg from '../assets/arithmetic/dark-02.png'
    import btn3DarkImg from '../assets/arithmetic/dark-03.png'
    import btn4DarkImg from '../assets/arithmetic/dark-04.png'
    import btn5DarkImg from '../assets/arithmetic/dark-05.png'
    import btn6DarkImg from '../assets/arithmetic/dark-06.png'
    import os1 from '../assets/arithmetic/os/os-01.png'
    import os2 from '../assets/arithmetic/os/os-02.png'
    import os3 from '../assets/arithmetic/os/os-03.png'
    import os4 from '../assets/arithmetic/os/os-04.png'
    import os5 from '../assets/arithmetic/os/os-05.png'
    import os6 from '../assets/arithmetic/os/os-06.png'
    const tabs = ref([
        {
            activeImg: btn1Img,
            defaultImg: btn1DarkImg,
            os: os1,
            value: '01',
            active: true
        },
        {
            activeImg: btn2Img,
            defaultImg: btn2DarkImg,
            os: os2,
            value: '02',
            active: false
        },
        {
            activeImg: btn3Img,
            defaultImg: btn3DarkImg,
            os: os3,
            value: '03',
            active: false
        },
        {
            activeImg: btn4Img,
            defaultImg: btn4DarkImg,
            os: os4,
            value: '04',
            active: false
        },
        {
            activeImg: btn5Img,
            defaultImg: btn5DarkImg,
            os: os5,
            value: '05',
            active: false
        },
        {
            activeImg: btn6Img,
            defaultImg: btn6DarkImg,
            os: os6,
            value: '06',
            active: false
        }
    ])
    const tabClick = (tab) => {
        tabs.value.forEach(t => t.active = (t.value === tab.value))
    }

    const activeTab = computed(() => {
        return tabs.value.find(t => t.active)
    })

</script>
<template>
    <div class="w-full h-full flex flex-col">
        <div class="top flex-1 flex justify-between flex-col items-center">
            <img src="../assets/arithmetic/title.png" alt="" class="block object-contain w-54/100">
            <img src="../assets/arithmetic/intro.png" alt="" class="block object-contain w-78/100">
            <div class="w-full">
                <div  class="flex justify-center items-center gap-3 mt-2 flex-wrap">
                    <img v-for="tab in tabs.slice(0,3)" :key="tab.value" :src="tab.active ? tab.activeImg : tab.defaultImg" alt="" class="h-[4vw] cursor-pointer block" @click="tabClick(tab)" :class="[
                        'cursor-pointer transition-transform duration-200',
                        tab.active ? 'scale-120' : 'scale-100'
                    ]">
                </div>
                <div class="flex justify-center items-center gap-1 mt-2 flex-wrap">
                    <img v-for="tab in tabs.slice(3,)" :key="tab.value" :src="tab.active ? tab.activeImg : tab.defaultImg" alt="" class="h-[4vw] cursor-pointer" @click="tabClick(tab)" :class="[
                        'cursor-pointer transition-transform duration-200',
                        tab.active ? 'scale-120' : 'scale-100'
                    ]">
                </div>
            </div>
            <img src="../assets/underpan.png" alt="" class="mb-2">
        </div>
        <div class="bottom flex-1 flex flex-col justify-end">
            <img :src="activeTab.os" alt="" class="block object-contain w-full">
            <img src="../assets/underpan.png" alt=""></img>
        </div>
    </div>
</template>

<style>
.scale-120 {
  transform: scale(1.05);
}
</style>