<template>
  <div class="detail-page">
    <!-- <router-link to="/">返回首页</router-link> -->
    <!-- 左边 -->
    <div class="left">
      <!-- 左上-->
      <div class="left-top">
        <div class="left-img">
          <img src="../assets/detail/left-img.png" alt="" />
        </div>
        <div class="center-img">
          <div class="w-[15vw]">
            <img src="../assets/detail/bt.png" alt="" />
          </div>
          <div class="p1-apply w-[10vw]">申请人信息</div>
        </div>
      </div>
      <div class="left-bottom">
        <!-- <div class="title">智能系统全流程覆盖-贷前自动化实时审批</div> -->
        <div class="content">
          <div class="w-[50vw] h-[20vw] man">
            <img src="../assets/detail/man.png" alt="" class="w-[50vw]" />
          </div>
          <!-- 中间人 -->
        </div>
        <div class="p1-apply w-60">申请卡版：xx</div>
        <!-- <div class="p1-text flex"> -->
          <!-- <div style="margin-right: 10px">审批结果：通过</div> -->
          <!-- <div>核发额度：{{ quota }} 万</div> -->
        <!-- </div> -->
      </div>
    </div>
    <!-- 右边 -->
    <div class="right">
      <div class="right-up">
        <div class="up-1">
          <div class="text-xs r1-top-title text-left">
            <div>2025年9月9日</div>
          </div>
          <div class="right1-style">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <!-- <div>
            <img src="../assets/detail/right-1/01.png" alt="">
          </div>
          <div></div>
          <div></div>
          <div></div>
          <div></div> -->
          </div>
        </div>
        <div class="up-2">
          <img src="../assets//underpan.png" alt="" />
        </div>
      </div>
      <div class="right-down">
        <div class="down-top flex">
          <div class="down-t-left">
            <img
              src="../assets/detail/sub-title.png"
              alt=""
              style="width: 40%"
            />
            <img src="../assets/detail/tp.png" alt="" />
          </div>
          <div class="flex down-t-right">
            4.5亿
          </div>
        </div>
        <div class="down-bottom">
          <img src="../assets//underpan.png" alt="" />
        </div>
      </div>
    </div>
    <!-- <div class="vertical-line"></div> -->
  </div>
</template>

<script setup>
import { ref } from "vue";
// import LeftImg from '../assets/detial/left-img.png'
// import btn2Img from '../assets/detial/title-suan.png'
// import btn3Img from '../assets/detial/title-intel.png'

// const page1 = {
//   left: {
//     img: LeftImg
//   }
// }
// 详情页面的逻辑可以在这里编写
const params = new URLSearchParams(window.location.search);
const tag = params.get("tag");
// tag 1 是贷前 2 贷中 3 贷后
console.log(tag, "===33");

const quota = ref("50");
</script>

<style scoped lang="less">
.flex-y {
  display: flex;
  flex-flow: column;
}
.flex {
  display: flex;
}
.bg-size-full {
  background-size: 100% 100%;
}
.justify-end {
  display: flex;
  justify-content: flex-end;
}
.detail-page {
  background-image: url("../assets/detail/bg.png");
  background-size: 100% 100%;
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
}
.left {
  flex: 2;
  width: 74%;
  display: flex;
  flex-flow: column;
}
.left-top {
  margin-top: 5vw;
  margin-left: 14vw;
  display: flex;;
  .left-img {
    width: 20vw;
  }
  .center-img {
    width: 28vw;
  }
}

.left-bottom {
  flex: 1;
  width: 100%;
  .content {
   position: relative;
    // width: 60vw;
    // background-image: url('../assets/detail/man.png');
    // height: 80vw;
    .man {
      right: 4vw;
      position: absolute;
    }
  }
}

.right {
  flex: 1;
  &-up {
    margin-top: 2vw;
    // margin-bottom: 2vw;
    // height: 50%
  }
  &-down {
    border: 1px solid #0f0;
    // padding: 2vw 0;
    .down-top {
      justify-content: baseline;
      
      .down-t-left {
        margin-left: 2vw;
      }
      .down-t-right {
        width: 30%;
        background-size: 100% 100%;
        background-image: url('../assets/detail/circle.png');
      }
    }
    .down-2 {
      padding-left: 2vw;
    }
  }
  .up-1 {
    margin-left: 2vw;
    padding: 1vw 1vw;
    background-color: rgba(12, 35, 72, 0.8);
    width: 85%;
  }
  .up-2 {
    margin-top: -1vw;
    width: 92%;
  }
}

.p1-apply {
  margin-top: 10px;
  background-size: 100% 100%;
  background-image: url("../assets/detail/bg-img.png");
  // margin-left: 45%;
}

.p1-text {
  justify-content: flex-end;
  margin-right: 28%;
  text-align: center;
  margin-top: 1%;
  font-size: 14px;
}

.right1-style {
  padding-top: 2vw;
  display: flex;
  flex-flow: wrap;
  gap: 1%; /* 统一设置间隔 */
  width: 100%;
  padding: 1.5vw 0.5vw;
  div {
    margin-bottom: 1.5vw;
    margin-right: 0.5vw;
    width: 30%;
    height: 5vw;
    border: 1px solid #f00;
    &:nth-child(3) {
      margin-right: 0;
    }
  }
}

.r1-top-title {
  background-size: 100% 100%;
  background-image: url("../assets/detail/right-1/r1-icon.png");
  div {
    padding-left: 1vw;
    padding-bottom: 0.5vw;
  }
}
</style>
