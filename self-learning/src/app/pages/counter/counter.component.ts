import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  count:number = 0;
  
  getBackgroundColorClass(count: number): string | null {
    if (count === 1) {
      return 'red-background';
    } else if (count === 2) {
      return 'blue-background';
    } else if (count === 3) {
      return 'green-background';
    }
    // Add more conditions for different background colors if needed
    return null;
  }
  
  
}
