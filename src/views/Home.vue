<script setup>
// 首页内容已清空
</script>

<template>
  <div class="flex w-full h-full">
    <!-- 左区 70%，以u-boat为背景居中 -->
    <div class="w-[70%] h-full p-4 flex items-center justify-center relative">
      <img
        src="@/assets/home/u-boat.png"
        alt="u-boat"
        class="absolute left-1/2 top-1/2 max-w-[80%] max-h-[80%] -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
        style="scale: 1.42;left: 71%;"
        draggable="false"
      />
      <!-- 可在此添加左区内容 -->
      <div></div>
    </div>
    <!-- 右区 30% -->
    <div class="flex-1 h-full p-4">
      <!-- 可在此添加右区内容 -->
    </div>
  </div>
</template>

<style scoped>
</style>
