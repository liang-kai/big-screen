<template>
  <div class="back-home" @click="goBack">
    <img src="@/assets/home/arrow-left.png" alt="首页" class="icon" />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
const goBack = () => {
  router.back();
};
</script>

<style scoped>
.back-home {
  position: absolute;
  left: 32px;
  bottom: 32px;
  z-index: 1000;
  cursor: pointer;
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.3
}
.icon {
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: drop-shadow(0 2px 8px rgba(0,0,0,0.2));
  transition: transform 0.2s;
}
.back-home:hover .icon {
  transform: scale(1.08);
}
</style>
