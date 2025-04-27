import { Routes } from '@angular/router';
import { BlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/full.component';
import { ListEventComponent } from "./components/Events/list-event/list-event.component";
import { ListParticipantComponent } from "./components/Participants/list-participant/list-participant.component";
import { AppSideLoginComponent } from "./pages/authentication/side-login/side-login.component";
import { AppSideRegisterComponent } from "./pages/authentication/side-register/side-register.component";
import { AddEventComponent } from "./components/Events/add-event/add-event.component";
import { ListeEvenementsComponent } from './pages/liste-evenements/liste-evenements.component';
import { CreationEvenementComponent } from './pages/creation-evenement/creation-evenement.component'; // <-- Ajout import création événement

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login', // Redirige vers la page de connexion par défaut
    pathMatch: 'full',
  },
  {
    path: 'login', // Route vers la page de connexion
    component: AppSideLoginComponent,
  },
  {
    path: 'inscription', // Route vers la page d'inscription
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
        path: 'liste-evenements',
        component: ListeEvenementsComponent,
      },
      {
        path: 'creation-evenement',
        component: CreationEvenementComponent, // <-- Ajout route création événement
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
