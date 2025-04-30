import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Home',
  },
  {
    displayName: 'Evenements',
    iconName: 'solar:widget-add-line-duotone',
    route: 'participant/event/EventParticipant',
    chip: true,

  },

  {
    displayName: 'Tickets',
    iconName: 'solar:ticket-sale-line-duotone',
    route: 'participant/ticket/ticketparticipant',
    chip: true,

  },




];
