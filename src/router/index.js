import { createRouter, createWebHashHistory } from 'vue-router'

// 导入组件
import Home from '../views/Home.vue'
import Detail from '../views/Detail.vue'
import Intel from '../views/Intel.vue'
import Test from '../views/Test.vue'

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
  },
  {
    path: '/test',
    name: 'test',
    component: Test
  }
]

// 创建路由实例
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
