<template>
  <div class="detail-page">
    <h1>详情页面</h1>
    <p>这是详情页面的内容。</p>
    <router-link to="/">返回首页</router-link>
  </div>
</template>

<script setup>
// 详情页面的逻辑可以在这里编写
</script>

<style scoped>
.detail-page {
  padding: 20px;
  text-align: center;
}

h1 {
  color: #42b883;
  margin-bottom: 20px;
}

p {
  margin-bottom: 20px;
  font-size: 16px;
}

a {
  color: #646cff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
