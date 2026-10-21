import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ApplicationService } from '../services/application.service';

export const applicationExistsGuard: CanActivateFn = (route) => {
  const service = inject(ApplicationService);
  const router = inject(Router);

  const id = Number(route.paramMap.get('id'));

  return service.getById(id) ? true : router.createUrlTree(['/not-found']);
};
