<template>
  <div class="process-data" >
    <div class="right-down flex">
        <div class="down-top flex">
          <div class="down-t-left">
            <img
              class="subtitle"
              src="../assets/detail/sub-title.png"
              alt=""
            />
            <img src="../assets/detail/tp.png" alt="" />
          </div>
          <div class="flex down-t-right">
            <span class="text-2xl count">4.5亿</span>
            <img src="../assets/detail/circle.png" alt="" />
          </div>
        </div>
        <div class="down-bottom">
          <img src="../assets//underpan.png" alt="" />
        </div>
      </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

</script>

<style lang="less" scoped>
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
.process-data {
    flex: 1;
    .right-down {
        margin-top: 1vw;
        flex-direction: column;
        align-items: center;
        .down-top {
            .down-t-left {
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-left: 2vw;
                width: 55%;
                
                .subtitle {
                display: inline-block;
                width: 70%;
                }
            }
            .down-t-right {
                position: relative;
                width: 30%;
                margin-top: 6vw;
                img {
                    margin-left: 0.5vw;
                    height: 7vw;
                    width: 10vw;
                }
                .count {
                    position: absolute;
                    top: 3vw;
                    left: 3.7vw;
                    color: transparent;
                    -webkit-background-clip: text;
                    background-clip: text;
                    background-image: linear-gradient(to bottom, #fff, #82a8ee);
                } 
            }
        }
        .down-bottom {
            width: 95%;
        }
    } 
  .up-1 {
    margin-left: 2vw;
    padding: 1vw 1vw;
    background-color: rgba(12, 35, 72, 0.8);
    width: 85%;

    .process-list {
        padding-top: 1vw;
        display: flex;
        flex-flow: wrap;
        gap: 1%; /* 统一设置间隔 */
        width: 100%;
        padding: 1.5vw 0.5vw;
        div {
            margin-bottom: 1.5vw;
            margin-right: 0.5vw;
            width: 30%;
            height: 3vw;
            border: 1px solid #f00;
            &:nth-child(3) {
            margin-right: 0;
            }
        }
        }
  }
  .up-2 {
    margin-top: -1vw;
    width: 92%;
  }
}
</style>
