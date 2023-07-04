import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from 'src/components/button/button.component';
import { FormsModule }   from '@angular/forms';
import { AuthService } from 'src/services/auth.service';
import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  standalone: true,
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.sass'],
  imports: [
    ButtonComponent,
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    CommonModule
  ]
})
export class LoginFormComponent {
    isLoading = false;
    errorMessage = '';
    email = new FormControl('', Validators.required);
    password = new FormControl('', Validators.required);

    hidePassword = true;

    constructor(private authService: AuthService) {}

    private handleError(error: HttpErrorResponse) {
      let msg = '';
      switch (error.status) {
        case 401:
          msg = 'Email ou mot de passe incorrect';
          break;
        case 0:
          msg = 'Le site est indisponible, veuillez réessayer plus tard'
          break;
        case 500:
        default:
          msg = 'Une erreur inconnue est survenue';
          break;
      }
      this.errorMessage = msg;
    }
    
    switchPasswordVisibility() {
      this.hidePassword = !this.hidePassword;
    }

    onFormSubmit(event: Event) {
      event.preventDefault();
      this.errorMessage = '';
      const email = this.email.value;
      const password = this.password.value;
      if (!this.email.invalid && !this.password.invalid && email && password) {
        this.isLoading = true;
        this.authService.login({
          email,
          password,
          onSuccess: () => {
            this.isLoading = false;
          },
          onError: (error) => {
            this.isLoading = false;
            this.handleError(error);
          }
        });
      }
    }
}
