import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '@/views/Home.vue'
import projectRoutes from './projects'
import aliases from './aliases'

Vue.use(VueRouter)

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      headerImage: 'port.png'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/About.vue'),
    meta: {
      headerImage: 'ship.png',
      header: 'About Us'
    }
  },
  {
    path: '/consultants',
    name: 'consultants',
    component: () => import('@/views/Consultants.vue'),
    meta: {
      headerImage: 'train.png',
      header: 'Consultants'
    }
  },
  {
    path: '/clients',
    name: 'clients',
    component: () => import('@/views/Clients.vue'),
    meta: {
      headerImage: 'port2.jpg',
      header: 'Clients'
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/views/Contact.vue'),
    meta: {
      headerImage: 'lorry.jpg',
      header: 'Contact Us'
    }
  },
  ...projectRoutes,
  {
    path: '*',
    component: () => import('@/views/Error/NotFound.vue')
  },
  ...aliases
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
