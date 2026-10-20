import { Injectable, computed, signal } from '@angular/core';
import { JobApplication, ApplicationStatus } from '../models/application.model';

@Injectable({ providedIn: 'root' })
export class ApplicationService {
  // private writable state, public read-only view
  private readonly _applications = signal<JobApplication[]>([
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

  readonly applications = this._applications.asReadonly();

  readonly interviewCount = computed(
    () => this._applications().filter((a) => a.status === 'INTERVIEW').length,
  );

  getById(id: number): JobApplication | undefined {
    return this._applications().find((a) => a.id === id);
  }

  add(data: Omit<JobApplication, 'id'>): JobApplication {
    const nextId = Math.max(0, ...this._applications().map((a) => a.id)) + 1;
    const created = { ...data, id: nextId };
    this._applications.update((list) => [...list, created]);
    return created;
  }

  update(id: number, changes: Partial<JobApplication>): void {
    this._applications.update((list) => list.map((a) => (a.id === id ? { ...a, ...changes } : a)));
  }

  updateStatus(id: number, status: ApplicationStatus): void {
    this.update(id, { status });
  }

  remove(id: number): void {
    this._applications.update((list) => list.filter((a) => a.id !== id));
  }
}
