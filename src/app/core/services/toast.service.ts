import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ToastService {
  private readonly _message = signal<string | null>(null);
  readonly message = this._message.asReadonly();

  show(text: string, durationMs = 3000) {
    this._message.set(text);
    setTimeout(() => this._message.set(null), durationMs);
  }
}
