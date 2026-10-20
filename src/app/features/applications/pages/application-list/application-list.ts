import { Component, signal } from '@angular/core';
import { JobApplication } from '../../../../core/models/application.model';
import { ApplicationCard } from '../../components/application-card/application-card';

@Component({
  selector: 'app-application-list',
  imports: [ApplicationCard],
  templateUrl: './application-list.html',
})
export class ApplicationList {
  applications = signal<JobApplication[]>([
    { id: 1, company: 'Acme', role: 'Frontend Dev', status: 'APPLIED', appliedDate: '2026-10-01' },
    {
      id: 2,
      company: 'Globex',
      role: 'Full Stack Dev',
      status: 'INTERVIEW',
      appliedDate: '2026-10-05',
    },
    {
      id: 3,
      company: 'Initech',
      role: 'Angular Dev',
      status: 'WISHLIST',
      appliedDate: '2026-10-10',
    },
  ]);

  onSelected(id: number) {
    console.log('selected', id);
  }
}
