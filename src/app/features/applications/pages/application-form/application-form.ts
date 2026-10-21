import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-application-form',
  template: `
    <h2 class="text-xl font-semibold">{{ isEdit() ? 'Edit' : 'New' }} application</h2>
    <p class="text-slate-500">Form coming in Phase 5.</p>
  `,
})
export class ApplicationForm {
  id = input<string>(); // undefined on /applications/new
  isEdit = computed(() => !!this.id());
}
