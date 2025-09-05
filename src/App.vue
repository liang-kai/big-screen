<script setup>
// 不再需要直接导入 HelloWorld，路由会自动处理
</script>

<template>
  <!-- 整体黑色背景 -->
  <div class="min-h-screen w-full flex items-center justify-center">
    <!-- 主要内容区域，2.7:1 比例，居中显示 -->
    <div
      class="relative w-full max-w-[90vw] aspect-[2.7/1] overflow-hidden rounded-lg shadow-lg"
    >
      <!-- 背景图层 -->
      <img
        src="./assets/bg.jpg"
        alt="background"
        class="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none select-none"
        draggable="false"
      />
      <!-- 内容层 -->
      <div class="relative z-10 w-full h-full">
        <nav>
          <router-link to="/">首页</router-link>
          <!-- 可以添加更多导航链接 -->
          <!-- <router-link to="/about">关于</router-link> -->
        </nav>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 可选：让内容更美观 */
</style>
