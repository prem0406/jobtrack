import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  template: `
    <div class="py-16 text-center">
      <h2 class="text-3xl font-semibold text-slate-900">404</h2>
      <p class="mt-2 text-slate-600">That page doesn't exist.</p>
      <a routerLink="/applications" class="mt-4 inline-block text-sm underline"
        >Back to applications</a
      >
    </div>
  `,
})
export class NotFound {}
