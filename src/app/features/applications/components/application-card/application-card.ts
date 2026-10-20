import { Component, computed, input, output } from '@angular/core';
import { ApplicationStatus, JobApplication } from '../../../../core/models/application.model';

const STATUS_STYLES: Record<ApplicationStatus, string> = {
  WISHLIST: 'bg-slate-100 text-slate-700',
  APPLIED: 'bg-blue-100 text-blue-700',
  INTERVIEW: 'bg-amber-100 text-amber-800',
  OFFER: 'bg-green-100 text-green-700',
  REJECTED: 'bg-red-100 text-red-700',
};

@Component({
  selector: 'app-application-card',
  templateUrl: './application-card.html',
})
export class ApplicationCard {
  application = input.required<JobApplication>();
  selected = output<number>();

  statusClasses = computed(() => STATUS_STYLES[this.application().status]);

  onClick() {
    this.selected.emit(this.application().id);
  }
}
