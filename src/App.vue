<script setup>
// 不再需要直接导入 HelloWorld，路由会自动处理
</script>

<template>
  <!-- 整体黑色背景 -->
  <div class="min-h-screen w-full flex items-center justify-center">
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
      <div class="relative z-10 w-full h-full divided-container">
        <!-- <nav>
          <router-link to="/">首页</router-link>
          <router-link to="/detail">详情</router-link>
        </nav> -->
        <router-view></router-view>
        <div class="vertical-line"></div>
        
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
