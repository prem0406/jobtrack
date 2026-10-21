import { Component, computed, inject, input } from '@angular/core';
import { ApplicationCard } from '../../components/application-card/application-card';
import { ApplicationService } from '../../../../core/services/application.service';
import { ToastService } from '../../../../core/services/toast.service';
import { APPLICATION_STATUSES } from '../../../../core/models/application.model';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-application-list',
  imports: [ApplicationCard, RouterLink],
  templateUrl: './application-list.html',
})
export class ApplicationList {
  private readonly service = inject(ApplicationService);
  private readonly toast = inject(ToastService);
  private readonly router = inject(Router);

  // bound automatically from ?status=... thanks to withComponentInputBinding()
  status = input<string>();

  readonly statuses = APPLICATION_STATUSES;
  applications = this.service.applications;
  interviewCount = this.service.interviewCount;

  filtered = computed(() => {
    const s = this.status();
    const all = this.applications();
    return s ? all.filter((a) => a.status === s) : all;
  });

  onSelected(id: number) {
    this.router.navigate(['/applications', id]);
  }

  addSample() {
    this.service.add({
      company: 'New Co',
      role: 'UI Engineer',
      status: 'WISHLIST',
      appliedDate: new Date().toISOString().slice(0, 10),
    });
    this.toast.show('Application added');
  }

  remove(id: number) {
    this.service.remove(id);
    this.toast.show('Application removed');
  }

  updateStatus({ id, status }: { id: number; status: string }) {
    this.service.updateStatus(id, status as any);
    this.toast.show('Application status updated');
  }
}
