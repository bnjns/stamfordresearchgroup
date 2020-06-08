import { RouteConfig } from 'vue-router'

const aliases: RouteConfig[] = [
  { path: '/about.html', redirect: { name: 'about' } },
  { path: '/consultants.html', redirect: { name: 'consultants' } },
  { path: '/clients.html', redirect: { name: 'clients' } },
  { path: '/contact.html', redirect: { name: 'contact' } },
  { path: '/ports.html', redirect: { name: 'project-ports' } },
  { path: '/shipping.html', redirect: { name: 'project-shipping' } },
  { path: '/rail-and-intermodal.html', redirect: { name: 'project-rail-intermodal' } },
  { path: '/logistics.html', redirect: { name: 'project-logistics' } },
  { path: '/equipment.html', redirect: { name: 'project-equipment' } }
]

export default aliases
