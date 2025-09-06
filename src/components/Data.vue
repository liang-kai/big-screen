<script setup>
    import { ref, computed } from 'vue'
    import btn1Img from '../assets/data/bright-01.png'
    import btn2Img from '../assets/data/bright-02.png'
    import btn3Img from '../assets/data/bright-03.png'
    import btn4Img from '../assets/data/bright-04.png'
    import btn5Img from '../assets/data/bright-05.png'
    import btn6Img from '../assets/data/bright-06.png'
    import btn7Img from '../assets/data/bright-07.png'
    import btn1DarkImg from '../assets/data/dark-01.png'
    import btn2DarkImg from '../assets/data/dark-02.png'
    import btn3DarkImg from '../assets/data/dark-03.png'
    import btn4DarkImg from '../assets/data/dark-04.png'
    import btn5DarkImg from '../assets/data/dark-05.png'
    import btn6DarkImg from '../assets/data/dark-06.png'
    import btn7DarkImg from '../assets/data/dark-07.png'
    import os1 from '../assets/data/os/os-01.png'
    import os2 from '../assets/data/os/os-02.png'
    import os3 from '../assets/data/os/os-03.png'
    import os4 from '../assets/data/os/os-04.png'
    import os5 from '../assets/data/os/os-05.png'
    import os6 from '../assets/data/os/os-06.png'
    import os7 from '../assets/data/os/os-07.png'
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
        },
        {
            activeImg: btn7Img,
            defaultImg: btn7DarkImg,
            os: os7,
            value: '07',
            active: false
        },
    ])
    const tabClick = (tab) => {
        tabs.value.forEach(t => t.active = (t.value === tab.value))
    }

    const activeTab = computed(() => {
        return tabs.value.find(t => t.active)
    })

</script>
<template>
    <div class="w-full h-full">
        <div class="top flex justify-center flex-col items-center mt-4">
            <img src="../assets/data/title.png" alt="" class="block object-contain w-2/3">
            <img src="../assets/data/intro.png" alt="" class="block object-contain w-2/3">
            <div class="w-full">
                <div  class="flex justify-center items-center gap-3 mt-2 flex-wrap">
                    <img v-for="tab in tabs.slice(0,3)" :key="tab.value" :src="tab.active ? tab.activeImg : tab.defaultImg" alt="" class="h-[2.6vw] cursor-pointer block" @click="tabClick(tab)">
                </div>
                <div class="flex justify-center items-center gap-1 mt-2 flex-wrap">
                    <img v-for="tab in tabs.slice(3,)" :key="tab.value" :src="tab.active ? tab.activeImg : tab.defaultImg" alt="" class="h-[2.6vw] cursor-pointer" @click="tabClick(tab)">
                </div>
            </div>
            <img src="../assets/underpan.png" alt="">
        </div>
        <div class="bottom">
            <img :src="activeTab.os" alt="" class="block object-contain w-full">
            <img src="../assets/underpan.png" alt=""></img>
        </div>
    </div>
</template>