import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { SpinnerComponent } from '../spinner/spinner.component';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.sass'],
    standalone: true,
    imports: [MatButtonModule, CommonModule, SpinnerComponent]
})
export class ButtonComponent {
  @Input() disabled = false;
  @Input() isLoading = false;
  @Input() label = '';
  @Input() type: 'button' | 'submit' = 'button';
}
