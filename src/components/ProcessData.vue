<template>
  <div class="process-data" >
    <div class="right-up flex">
        <div class="main-body">
          <div class="text-xs r1-top-title text-left">
            <img src="../assets/detail/right-1/r1-icon.png">
            <span>2025年9月9日</span>
          </div>
          <div class="process-list">
            <div class="process-item flex text-xl" v-for="(item, index) in processData" v-bind:key="index">
              <img :src="item.pic" alt="">
              <div class="text-subtitle text-xs">{{ item.subtitle }}</div>
              <div class="text-container flex">
                <div class="item-data">{{item.data}}</div>
                <div class="item-unit text-xs">{{item.unit}}</div>  
              </div>
            </div>
          </div>
        </div>
        <div class="bottom">
          <img src="../assets//underpan.png" alt="" />
        </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import processImg1 from '../assets/detail/right-1/01.png'
import processImg2 from '../assets/detail/right-1/02.png'
import processImg3 from '../assets/detail/right-1/03.png'
import processImg4 from '../assets/detail/right-1/04.png'

const processData = [
  {
    subtitle: '第一笔进件时间',
    pic: processImg1,
    data: '00:00',
    unit: ''
  },
  {
    subtitle: '第一笔进件渠道',
    pic: processImg2,
    data: '我行申请卡',
    unit: ''
  },
  {
    subtitle: '今日累计进件',
    pic: processImg3,
    data: '30',
    unit: '万件'
  },
  {
    subtitle: '系统秒批平均实效',
    pic: processImg4,
    data: '12',
    unit: '秒（不变）'
  }
]
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
    .right-up {
        margin-top: 2vw;
        flex-direction: column;
        align-items: center;
    }
    .right-down {
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
                margin-top: 5vw;
                span {
                    position: absolute;
                    top: 3.5vw;
                    left: 4vw;
                }
                img {
                    margin-left: 0.5vw;
                }
            }
        }
        .down-bottom {
            width: 95%;
        }
    }
    .main-body {
        padding: 1vw 1vw;
        background-color: rgba(12, 35, 72, 0.8);
        width: 85%;

        .r1-top-title {
            position: relative;
            span {
                position: absolute;
                left: 1.2vw;
                top: 0.1vw;
            }
        }

        .process-list {
            padding-top: 1vw;
            display: flex;
            flex-flow: wrap;
            gap: 1%; /* 统一设置间隔 */
            width: 100%;

            .process-item {
                margin-bottom: 1.5vw;
                margin-right: 0.5vw;
                padding-left: 4vw;
                padding-top: 0.5vw;
                width: 45%;
                height: 3vw;
                position: relative;
                flex-direction: column;
                img {
                    position: absolute;
                    left: 0;
                    top: 0;
                }
                .text-subtitle {
                    position: relative;
                    z-index: 1;
                    color:#fffefe; 
                    text-align: left;
                }
                .text-container {
                    position: relative;
                    z-index: 1;
                    align-items: flex-end ;
                    .item-data {
                        color: #0086f8;
                        margin-right: 0.1vw;
                    }
                    .item-unit {
                        position: relative;
                        top: -0.15vw;
                    }
                }
            }
            .process-item:nth-child(3) {
                margin-bottom: 1vw;
            }
            .process-item:nth-child(4) {
                margin-bottom: 1vw;
            }
        }
    }
    .bottom {
        margin-top: -1.5vw;
        width: 92%;
    }
}
</style>
