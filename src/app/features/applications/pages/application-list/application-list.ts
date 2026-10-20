import { Component, inject } from '@angular/core';
import { ApplicationCard } from '../../components/application-card/application-card';
import { ApplicationService } from '../../../../core/services/application.service';
import { ToastService } from '../../../../core/services/toast.service';

@Component({
  selector: 'app-application-list',
  imports: [ApplicationCard],
  templateUrl: './application-list.html',
})
export class ApplicationList {
  private readonly service = inject(ApplicationService);
  private readonly toast = inject(ToastService);

  applications = this.service.applications;
  interviewCount = this.service.interviewCount;

  onSelected(id: number) {
    console.log('selected', id);
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
