import { Component } from '@angular/core';
import { ButtonComponent } from 'src/components/button/button.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@Component({
  standalone: true,
  selector: 'app-password-change',
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.sass'],
  imports: [ButtonComponent, ButtonComponent, MatInputModule, MatFormFieldModule]
})
export class PasswordChangeComponent {

}
