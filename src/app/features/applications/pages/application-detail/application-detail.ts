import { Component, computed, inject, input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ApplicationService } from '../../../../core/services/application.service';
import { ToastService } from '../../../../core/services/toast.service';

@Component({
  selector: 'app-application-detail',
  imports: [RouterLink],
  templateUrl: './application-detail.html',
})
export class ApplicationDetail {
  private readonly service = inject(ApplicationService);
  private readonly router = inject(Router);
  private readonly toast = inject(ToastService);

  id = input.required<string>(); // route params always arrive as strings

  application = computed(() => this.service.getById(Number(this.id())));

  delete() {
    const app = this.application();
    if (!app) return;
    this.service.remove(app.id);
    this.toast.show('Application removed');
    this.router.navigate(['/applications']);
  }
}
