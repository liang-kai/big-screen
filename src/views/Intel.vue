<template>
    <div class="w-full h-full relative">
        <img src="../assets/intel/bg.jpg" alt="" class="block object-contain w-full h-full absolute">
        <div class="dai absolute bg-amber-200/10 left-[22%] top-[35%] w-[12vw] h-[6vw]" @click="goDetail(1)"></div>
        <div class="dai absolute bg-amber-200/10 left-[38%] top-[56%] w-[12vw] h-[6vw]" @click="goDetail(2)"></div>
        <div class="dai absolute bg-amber-200/10 left-[52%] top-[25%] w-[12vw] h-[5vw]" @click="goDetail(3)"></div>
        <Back />
    </div>
</template>
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import Back from '@/components/Back.vue';

const router = useRouter();
function goDetail(tag) {
    router.push({ name: 'detail', query: { tag } });
}
</script>