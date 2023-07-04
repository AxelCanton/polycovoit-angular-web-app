import { Component, Input } from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  standalone: true,
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.sass'],
  imports: [MatProgressSpinnerModule]
})
export class SpinnerComponent {
  @Input() size: 'small' | 'medium' | 'large' = 'small';
  @Input() color: 'primary' | 'accent' = 'primary'

  getSpinnerSize() {
    switch (this.size) {
      case 'large':
        return 24;
      case 'medium':
        return 18;
      case 'small':
        return 12;
    }
  }
}
