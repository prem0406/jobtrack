export type ApplicationStatus = 'WISHLIST' | 'APPLIED' | 'INTERVIEW' | 'OFFER' | 'REJECTED';

export const APPLICATION_STATUSES: ApplicationStatus[] = [
  'WISHLIST',
  'APPLIED',
  'INTERVIEW',
  'OFFER',
  'REJECTED',
];

export interface JobApplication {
  id: number;
  company: string;
  role: string;
  status: ApplicationStatus;
  location?: string;
  salary?: number;
  appliedDate: string; // ISO string, matches Spring Boot's LocalDate JSON
  notes?: string;
}
