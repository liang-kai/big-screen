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
          <div style="margin-top: 1vw;">
            <Arrow text="申请人信息"></Arrow>
          </div>
        </div>
      </div>
      <div class="left-bottom">
        <!-- <div class="title">智能系统全流程覆盖-贷前自动化实时审批</div> -->
        <div class="content relative">
          <div class="w-[50vw] h-[21vw] man">
            <img src="../assets/detail/man.png" alt="" class="w-[50vw]" />
          </div>
          <div class="w-[50vw] flex h-[21vw] absolute left-bottom-info text-xs">
              <div class="sex">女</div>
              <div class="time">2020-12-09</div>
              <div class="age">25</div>
              <div class="duty">经理</div>
              <div class="work-city">广东深圳</div>
              <div class="degree">本科</div>
              <div class="live-city">深圳</div>
              <div class="credit-point">100</div>
          </div>
          <!-- 中间人 -->
        </div>
        <div class="flex justify-center">
          <Arrow text="申请卡版：XXXXXXXXXXX"></Arrow>
        </div>
        <div class="p1-text flex justify-center text-sm">
          <div style="margin-right: 2vw">审批结果：通过</div>
          <div>核发额度：{{ quota }} 万</div>
        </div>
      </div>
    </div>
    <!-- 右边 -->
    <div class="right">
      <ProcessData></ProcessData>
      <RealTimeData></RealTimeData>
    </div>
    <!-- <div class="vertical-line"></div> -->
  </div>
</template>

<script setup>
import { ref } from "vue";
// import LeftImg from '../assets/detial/left-img.png'
// import btn2Img from '../assets/detial/title-suan.png'
// import btn3Img from '../assets/detial/title-intel.png'
import ProcessData from '../components/ProcessData.vue'
import RealTimeData from '../components/RealTimeData.vue'
import Arrow from "../components/Arrow.vue";
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
.justify-center {
  justify-content: center;
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
  padding-left: 14vw;
  .content {
   position: relative;
    // width: 60vw;
    // background-image: url('../assets/detail/man.png');
    height: 21vw;
    .man {
      position: absolute;
    }
    .left-bottom-info {
      position: absolute;

      >div {
        position: absolute;
        width: 5vw;
        text-align: center;
      }
      .sex {
        left: 11vw;
        top: 2.6vw
      }
      .time {
        right: 9.4vw;
        top: 2.6vw;
      }
      .age {
        left: 9.6vw;
        top: 7vw;
      }
      .duty {
        right: 9vw;
        top: 7vw;
      }
      .work-city {
        left: 9.2vw;
        top: 11.7vw;
      }
      .degree {
        right: 9.1vw;
        top: 11.7vw;
      }
      .live-city {
        left: 10.3vw;
        top: 16.3vw;
      }
      .credit-point {
        right: 11.2vw;
        top: 16.2vw;
      }


    }
    // &::after {
    //   content: '';
    //   display: block;
    //   clear: both;
    // }
  }
  .card-type {
    padding: 0 5vw;
    justify-content: center;
    align-items: center;
    background-position: center;
  }
  .p1-text {
    margin-top: 1%;
  }

}

.right {
  flex: 1;
  margin-top: 1.8vw;
}

.p1-apply {
  margin-top: 10px;
  background-size: 100% 100%;
  background-image: url("../assets/detail/bg-img.png");
  // margin-left: 45%;
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
