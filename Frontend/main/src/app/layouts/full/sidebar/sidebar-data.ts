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
    displayName: 'Evénéments',
    iconName: 'solar:widget-add-line-duotone',
    route: 'event/listEvent',
    chip: true,

  },




  {
    displayName: 'Participants',
    iconName: 'solar:user-id-line-duotone',
    route: 'participant/listParticipant',
    chip: true,

  },





];
