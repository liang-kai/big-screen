import { createRouter, createWebHistory } from 'vue-router'

// 导入组件
import HelloWorld from '../components/HelloWorld.vue'

// 定义路由
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HelloWorld
  },
  // 可以在这里添加更多路由
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import('../views/About.vue')
  // }
]

// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
