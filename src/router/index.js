import { createRouter, createWebHistory } from 'vue-router'

// 导入组件
import Home from '../views/Home.vue'
import Detail from '../views/Detail.vue'
import Intel from '../views/Intel.vue'

// 定义路由
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/detail',
    name: 'detail',
    component: Detail
  },
  {
    path: '/intel',
    name: 'intel',
    component: Intel
  }
]

// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
