import { Routes } from '@angular/router';
import { BlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/full.component';
import { ListEventComponent } from "./components/Events/list-event/list-event.component";
import { ListParticipantComponent } from "./components/Participants/list-participant/list-participant.component";
import { AddEventComponent } from "./components/Events/add-event/add-event.component";
import { EventDetailComponent } from "./components/Events/event-detail/event-detail.component";
import { ListTicketComponent } from "./components/Tickets/list-ticket/list-ticket.component";
import { AppSideLoginComponent } from './pages/authentication/side-login/side-login.component';
import { AppSideRegisterComponent } from './pages/authentication/side-register/side-register.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
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
        path: 'event/EventDetail',
        component: EventDetailComponent,
      },
      {
        path: 'event/Tickets',
        component: ListTicketComponent,
      },
      {
        path: 'extra',
        loadChildren: () =>
          import('./pages/extra/extra.routes').then((m) => m.ExtraRoutes),
      },
    ],
  },
  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: 'authentication',
        loadChildren: () =>
          import('./pages/authentication/authentication.routes').then(
            (m) => m.AuthenticationRoutes
          ),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'authentication/error',
  },
];
