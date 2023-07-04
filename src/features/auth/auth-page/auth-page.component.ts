import { Component } from '@angular/core';
import { LoginFormComponent } from '../login-form/login-form.component';

@Component({
  standalone: true,
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.sass'],
  imports: [LoginFormComponent]
})
export class AuthPageComponent {
  
}
