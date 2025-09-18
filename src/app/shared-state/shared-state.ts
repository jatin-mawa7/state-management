import { Component, OnInit } from '@angular/core';
import { Counter } from './counter';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-shared-state',
  imports: [CommonModule],
  templateUrl: './shared-state.html',
  styleUrl: './shared-state.css'
})
export class SharedState implements OnInit {
  counter$!: Observable<number> | undefined;
  
  constructor(private counter: Counter) {}

  ngOnInit(): void {
    this.counter$ = this.counter.count$;
  }
  increment() {
    this.counter.increment();
  }
  decrement() {
    this.counter.decrement();
  }
}
