import { RouteConfig } from 'vue-router'

const routes: RouteConfig[] = [
  {
    path: '/projects/ports',
    name: 'project-ports',
    component: () => import('@/views/Projects/Ports.vue'),
    meta: {
      headerImage: 'lorry.jpg',
      header: 'Ports'
    }
  },
  {
    path: '/projects/shipping',
    name: 'project-shipping',
    component: () => import('@/views/Projects/Shipping.vue'),
    meta: {
      headerImage: 'lorry.jpg',
      header: 'Shipping'
    }
  },
  {
    path: '/projects/rail-and-intermodal',
    name: 'project-rail-intermodal',
    component: () => import('@/views/Projects/RailAndIntermodal.vue'),
    meta: {
      headerImage: 'lorry.jpg',
      header: 'Rail and Intermodal'
    }
  },
  {
    path: '/projects/logistics',
    name: 'project-logistics',
    component: () => import('@/views/Projects/Logistics.vue'),
    meta: {
      headerImage: 'lorry.jpg',
      header: 'Logistics'
    }
  },
  {
    path: '/projects/equipment',
    name: 'project-equipment',
    component: () => import('@/views/Projects/Equipment.vue'),
    meta: {
      headerImage: 'lorry.jpg',
      header: 'Equipment'
    }
  }
]

export default routes
