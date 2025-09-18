import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LocalState } from './local-state/local-state';
import { SharedState } from './shared-state/shared-state';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LocalState, SharedState],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('state-demo');
}
