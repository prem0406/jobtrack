import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.html',
})
export class ApplicationForm {
  id = input<string>(); // undefined on /applications/new
  isEdit = computed(() => !!this.id());
}
