import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'applications' },
  {
    path: 'applications',
    loadChildren: () =>
      import('./features/applications/applications.routes').then((m) => m.APPLICATION_ROUTES),
  },
  {
    path: '**',
    title: 'Not found',
    loadComponent: () => import('./shared/pages/not-found/not-found').then((m) => m.NotFound),
  },
];
