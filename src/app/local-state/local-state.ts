import { Component } from '@angular/core';

@Component({
  selector: 'app-local-state',
  imports: [],
  templateUrl: './local-state.html',
  styleUrl: './local-state.css'
})
export class LocalState {
  title: string = 'LOCAL STATE COUNTER!';
  counter : number = 0;

  increment() {
    this.counter++;
  }
  decrement() {
    this.counter--;
  }

  // get getCounter() {
  //   return this.counter;
  // }
}
