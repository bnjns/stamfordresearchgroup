import { MenuItem } from '@/types/menu'

const menu: MenuItem[] = [
  {
    text: 'About Us',
    route: 'about'
  },
  {
    text: 'Consultants',
    route: 'consultants'
  },
  {
    text: 'Clients',
    route: 'clients'
  },
  {
    text: 'Projects',
    children: [
      {
        text: 'Ports',
        route: 'project-ports'
      },
      {
        text: 'Shipping',
        route: 'project-shipping'
      },
      {
        text: 'Rail and Intermodal',
        route: 'project-rail-intermodal'
      },
      {
        text: 'Logistics',
        route: 'project-logistics'
      },
      {
        text: 'Equipment',
        route: 'project-equipment'
      }
    ]
  },
  {
    text: 'Contact Us',
    route: 'contact'
  }
]

export default menu
