import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Software from '@/views/Software.vue'
import Photography from '@/views/Photography.vue'
import About from '@/views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/software',
    name: 'Software',
    component: Software
  },
  {
    path: '/photography',
    name: 'Photography',
    component: Photography
  },
  {
    path: '/about',
    name: 'About Me',
    component: About
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
