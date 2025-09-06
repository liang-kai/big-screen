<script setup>
// 不再需要直接导入 HelloWorld，路由会自动处理
const isProd = import.meta.env.PROD;
</script>

<template>
  <!-- 整体黑色背景 -->
  <div class="min-h-screen w-full flex items-center justify-center" :class="{ 'bg-black': isProd }">
    <!-- <div class="absolute inset-0 z-0 pointer-events-none select-none">
      <template v-for="i in 101" :key="i">
        <div
          class="absolute top-0 h-full border-l border-dashed border-blue-300"
          :style="{ left: `calc(${(i - 1)}% / 100 * 100)` }"
        >
          <span
            class="absolute top-2 left-0 text-xs text-blue-400 bg-black/60 px-1 rounded"
            :style="{ transform: 'translateX(-50%)' }"
          >{{ i - 1 }}</span>
        </div>
      </template>
    </div> -->
    <!-- 主要内容区域，2.7:1 比例，宽度为屏幕宽度 -->
    <div
      class="relative w-screen aspect-[2.7/1] overflow-hidden rounded-lg shadow-lg"
    >
      <!-- 背景图层 -->
      <img
        src="./assets/bg.jpg"
        alt="background"
        class="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none select-none"
        draggable="false"
      />
      <!-- 内容层 -->
      <div class="relative z-10 w-full h-full" :class="{ 'divided-container': !isProd }">
        <!-- <nav>
          <router-link to="/">首页</router-link>
          <router-link to="/detail">详情</router-link>
        </nav> -->
        <transition name="fade-slide" mode="out-in">
          <router-view></router-view>
        </transition>
        <div class="vertical-line" v-if="!isProd"></div>
        
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 横线 */
.divided-container::before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
  height: 1px;
  background-color: #ccc;
  transform: translateY(-50%);
}

/* 竖线1 */
.divided-container::after {
  content: "";
  position: absolute;
  top: 0;
  left: 33.33%;
  width: 1px;
  height: 100%;
  background-color: #ccc;
  transform: translateX(-50%);
}

/* 如果需要两条伪元素都不够用，可以给容器添加一个子元素作为第三条线 */
.divided-container .vertical-line {
  position: absolute;
  top: 0;
  left: 67%;
  width: 1px;
  height: 100%;
  background-color: #ccc;
  transform: translateX(-50%);
}
</style>

<style>
.fade-slide-enter-active, .fade-slide-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}
.fade-slide-enter-from, .fade-slide-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
.fade-slide-enter-to, .fade-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
