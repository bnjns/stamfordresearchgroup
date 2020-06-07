import { RouteConfig } from 'vue-router'

const routes: RouteConfig[] = [
  {
    path: '/project/ports',
    name: 'project-ports',
    component: () => import('@/views/Projects/Ports.vue'),
    meta: {
      headerImage: 'lorry.jpg',
      header: 'Ports'
    }
  },
  {
    path: '/project/shipping',
    name: 'project-shipping',
    component: () => import('@/views/Projects/Shipping.vue'),
    meta: {
      headerImage: 'lorry.jpg',
      header: 'Shipping'
    }
  },
  {
    path: '/project/rail-intermodal',
    name: 'project-rail-intermodal',
    component: () => import('@/views/Projects/RailAndIntermodal.vue'),
    meta: {
      headerImage: 'lorry.jpg',
      header: 'Rail and Intermodal'
    }
  },
  {
    path: '/project/logistics',
    name: 'project-logistics',
    component: () => import('@/views/Projects/Logistics.vue'),
    meta: {
      headerImage: 'lorry.jpg',
      header: 'Logistics'
    }
  },
  {
    path: '/project/equipment',
    name: 'project-equipment',
    component: () => import('@/views/Projects/Equipment.vue'),
    meta: {
      headerImage: 'lorry.jpg',
      header: 'Equipment'
    }
  }
]

export default routes
