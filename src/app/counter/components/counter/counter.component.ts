import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
     <h3>Counter: {{counter}}</h3>
     <button class="btn btn-secondary mx-2" (click)="increaseBy(5)">+5</button>
     <button class="btn btn-secondary mx-2" (click)="resetCounter()">Reset counter</button>
     <button class="btn btn-secondary mx-2" (click)="increaseBy(-5)">-5</button>
  `
})

export class CounterComponent {
  public counter: number = 10;

  increaseBy = (value: number): void => {
    this.counter += value;
  }

  resetCounter = (): void => {
    this.counter = 10;
  }
}
