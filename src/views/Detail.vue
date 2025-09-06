<template>
  <div class="detail-page">
    <!-- <router-link to="/">返回首页</router-link> -->
    <div class="right"></div>
    <!-- 左边 -->
    <div class="left">
      <!-- 左上-->
       <div class="left-top"></div>
       <div class="left-bottom">
        <div class="title">智能系统全流程覆盖-贷前自动化实时审批</div>
        <div class="content"></div>
       </div>
    </div>
    <!-- <div class="vertical-line"></div> -->
  </div>
</template>

<script setup>
// 详情页面的逻辑可以在这里编写
const params = new URLSearchParams(window.location.search)
const tag = params.get('tag')
// tag 1 是贷前 2 贷中 3 贷后
console.log(tag, '===33')
</script>

<style scoped lang="less">
.detail-page {
  position: relative;
  height: 100%;
  width: 100%;
  /* text-align: center; */
}
.left {
  width: 74%;
  height: 300px;
  display: flex;
  flex-flow: column;
  align-items: center;
  // justify-items: center;
  &-top {
    border: 1px solid #f00;
    width: 200px;
    height: 100px;
    text-align: center;
  }
  
  &-bottom {
    width: 98%;
    height: 100px;
    background-color: #0d4779;
    .title {
      font-size: 26px;
      color: rgba(255,255,255, 0.8);
    }
  }
}

.right {
  float: right;
  width: 24%;
  background-color: #0d4779;
  height: 100vh;
}
</style>
