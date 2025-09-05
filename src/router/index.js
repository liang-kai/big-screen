import { createRouter, createWebHistory } from 'vue-router'

// 导入组件
import HelloWorld from '../components/HelloWorld.vue'

// 定义路由
const routes = [
  {
    path: '/',
    name: 'home',
    component: HelloWorld
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import('../views/Detail.vue')
  }
]

// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
