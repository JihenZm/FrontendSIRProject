import { Routes } from '@angular/router';
import { AppSideLoginComponent } from './side-login/side-login.component';
import { AppSideRegisterComponent } from './side-register/side-register.component';
import { Error404Component } from './error404/error404.component';

export const AuthenticationRoutes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./side-login/side-login.component').then(
        (m) => m.AppSideLoginComponent
      ),
  },
  {
    path: 'inscription',
    loadComponent: () =>
      import('./side-register/side-register.component').then(
        (m) => m.AppSideRegisterComponent
      ),
  },
  {
    path: 'error',
    loadComponent: () =>
      import('./error404/error404.component').then((m) => m.Error404Component),
  },
];

