import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: HomeView
  },
  {
    path: '/info',
    name: 'info',
    component: HomeView
  },
  {
    path: '/cars',
    name: 'cars',
    component: HomeView
  },
  {
    path: '/service',
    name: 'service',
    component: HomeView
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: HomeView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
