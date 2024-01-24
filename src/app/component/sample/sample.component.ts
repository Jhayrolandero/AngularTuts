import { Component } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrl: './sample.component.css'
})
export class SampleComponent {
  counter: number = 0
  
  incrementCounter(): void {
    this.counter++
  }
}
