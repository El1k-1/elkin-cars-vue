import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CarsView from '@/views/CarsView.vue'
import LoginView from '@/views/LoginView.vue'
import ContactsVue from '@/views/ContactsVue.vue'
import InfoView from '@/views/InfoView.vue'
import ServiceView from '@/views/ServiceView.vue'

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
    component: InfoView
  },
  {
    path: '/cars',
    name: 'cars',
    component: CarsView
  },
  {
    path: '/service',
    name: 'service',
    component: ServiceView
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: ContactsVue
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
