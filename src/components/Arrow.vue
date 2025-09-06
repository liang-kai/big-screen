<template>
  <div class="arrow-container">
    <div class="center">
        <img class="arrow" style="left: 1vw;" src="../assets/detail/arrow-l.png"/>
        <div>{{ text }}</div>
        <img class="arrow-bg" src="../assets/detail/arrow-bg.png"/>
        <img class="arrow" style="right: 1vw;"src="../assets/detail/arrow-r.png"/>
    </div>
    
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    text: {
        type: String,
        defult: ''
    }
})

</script>

<style lang="less" scoped>
.arrow-container{
    display: flex;
    align-items: center;
    position: relative;
    .center {
        display: inline-block;
        position: relative;
        padding: 0 3vw;
        // width: 100%;
        .arrow-bg {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            width: 100%;
            height: 100%;
        }
        >div {
            position: relative;
            z-index: 2;
        }
    }

    .arrow {
        position: absolute;
        width: 0.5vw;
        height: 0.5vw;
        top: 50%;
        transform: translateY(-50%);
    }
}
</style>
