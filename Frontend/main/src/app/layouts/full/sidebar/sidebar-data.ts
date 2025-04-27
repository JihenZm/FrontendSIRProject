import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Home',
  },
  {
    displayName: 'Tableau de bord',
    iconName: 'solar:atom-line-duotone',
    route: '/dashboard',
  },
  {
    displayName: 'Evenements',
    iconName: 'solar:widget-add-line-duotone',
    route: 'event/listEvent',
    chip: true,

  },
  {
    displayName: 'eCommerce',
    iconName: 'solar:chart-line-duotone',
    route: 'https://materialm-angular-main.netlify.app/dashboards/dashboard2',
    chip: true,

  },


  {
    divider: true,
    navCap: 'Apps',
  },


  {
    displayName: 'Participants',
    iconName: 'solar:user-id-line-duotone',
    route: 'participant/listParticipant',
    chip: true,

  },

  {
    displayName: 'Tickets',
    iconName: 'solar:ticket-sale-line-duotone',
    route: 'event/Tickets',
    chip: true,

  },

  {
    displayName: 'login',
    iconName: 'solar:user-id-line-duotone',
    route: 'accueil/login',
    chip: true,

  },

];
