import { Routes } from '@angular/router';

import { BlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/full.component';


import { ListEventComponent } from "./components/Events/list-event/list-event.component";
import { AddEventComponent } from "./components/Events/add-event/add-event.component";
import { EventDetailComponent } from "./components/Events/event-detail/event-detail.component";
import { ListTicketComponent } from "./components/Tickets/list-ticket/list-ticket.component";
import { ListParticipantComponent } from "./components/Participants/list-participant/list-participant.component";

import { AppSideLoginComponent } from "./pages/authentication/side-login/side-login.component";
import { AppSideRegisterComponent } from "./pages/authentication/side-register/side-register.component";


import {FullParticipantComponent} from "./layouts/fullparticipant/fullParticipant.component";
import {EventParticipantComponent} from "./components/Events/event-participant/event-participant.component";
import {ReserveticketParticipantComponent} from "./components/Tickets/reserveticket-participant/reserveticket-participant.component";
import {ListticketParticipantComponent} from "./components/Tickets/listticket-participant/listticket-participant.component";
import {
  EventParticipantDetailComponent
} from "./components/Events/event-participant-detail/event-participant-detail.component";
export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: AppSideLoginComponent,
  },
  {
    path: 'inscription',
    component: AppSideRegisterComponent,
  },
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./pages/pages.routes').then((m) => m.PagesRoutes),
      },
      {
        path: 'event/listEvent',
        component: ListEventComponent,
      },
      {
        path: 'event/addEvent',
        component: AddEventComponent,
      },
      {
        path: 'participant/listParticipant',
        component: ListParticipantComponent,
      },
      {
        path: 'event/EventDetail/:id',
        component: EventDetailComponent,
      },
      {
        path: 'event/Tickets',
        component: ListTicketComponent,
      },
      {
        path: 'event/Tickets/:id',
        component: ListTicketComponent
      }
,
      {
        path: 'extra',
        loadChildren: () =>
          import('./pages/extra/extra.routes').then((m) => m.ExtraRoutes),
      },
    ],
  },
  {
    path: 'participant',
    component: FullParticipantComponent,
    children: [
      {
        path: '',
        redirectTo: '/participantdashboard',
        pathMatch: 'full',
      },

      {
        path: 'event/EventParticipant',
        component: EventParticipantComponent,
      },
      {
        path: 'event/EventParticipantDetail/:id',
        component: EventParticipantDetailComponent,
      },


      {
        path: 'ticket/ticketparticipant',
        component: ListticketParticipantComponent ,
      },
      {
        path: 'ticket/reserveticketparticipant',
        component: ReserveticketParticipantComponent,
      },
    ],
  },

  {
    path: '**',
    redirectTo: 'authentication/error',
  },
];
