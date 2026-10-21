import { Routes } from '@angular/router';
import { applicationExistsGuard } from '../../core/guards/application-exists.guard';

export const APPLICATION_ROUTES: Routes = [
  {
    path: '',
    title: 'Applications',
    loadComponent: () =>
      import('./pages/application-list/application-list').then((m) => m.ApplicationList),
  },
  {
    // must come BEFORE ':id', otherwise "new" would be treated as an id
    path: 'new',
    title: 'New application',
    loadComponent: () =>
      import('./pages/application-form/application-form').then((m) => m.ApplicationForm),
  },
  {
    path: ':id',
    title: 'Application details',
    canActivate: [applicationExistsGuard],
    loadComponent: () =>
      import('./pages/application-detail/application-detail').then((m) => m.ApplicationDetail),
  },
  {
    path: ':id/edit',
    title: 'Edit application',
    canActivate: [applicationExistsGuard],
    loadComponent: () =>
      import('./pages/application-form/application-form').then((m) => m.ApplicationForm),
  },
];
