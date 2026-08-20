import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email = '';
  password = '';
  remember = false;
  showPassword = false;

  emailError = '';
  passwordError = '';

  /**
   * Form-level failures that do not belong to a single field,
   * such as an account that has not completed verification.
   */
  formError = '';

  submitting = false;

  constructor(private auth: AuthService, private router: Router) {}

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit(): void {

    this.clearErrors();

    let valid = true;

    if (!this.email.trim()) {
      this.emailError = 'Username is required';
      valid = false;
    }

    if (!this.password.trim()) {
      this.passwordError = 'Password is required';
      valid = false;
    }

    if (!valid) {
      return;
    }

    this.submitting = true;

    this.auth.login({
      username: this.email.trim(),
      password: this.password
    }).subscribe({

      next: (response) => {

        this.submitting = false;

        let role = response.role?.[0];

        if (response.role && response.role.length > 1 && response.role[1] === 'INFLUENCER') {
          role = response.role[1];
        }

        if (response.role && response.role.length > 2 && response.role[2] === 'INFLUENCER') {
          role = response.role[2];
        }

        switch (role) {

          case 'ADMIN':
            this.router.navigateByUrl('/admin/dashboard');
            break;

          case 'MANAGER':
            this.router.navigateByUrl('/manager/dashboard');
            break;

          case 'ORGANIZER':
            this.router.navigateByUrl('/tournament-organizer/dashboard');
            break;

          case 'BRAND':
            this.router.navigateByUrl('/brand/dashboard');
            break;

          case 'INFLUENCER':
            this.router.navigateByUrl('/influencer/dashboard');
            break;

          default:
            this.router.navigateByUrl('/user/dashboard');
        }
      },

      error: (error) => {

        this.submitting = false;

        const message =
          error?.error?.message ||
          'Login failed. Please try again.';

        /*
         * 403 means the credentials were correct but the account
         * has not been verified. That is a form-level message,
         * not a password problem.
         */
        if (error?.status === 403) {
          this.formError = message;
          return;
        }

        this.passwordError = message;
      }
    });
  }

  private clearErrors(): void {
    this.emailError = '';
    this.passwordError = '';
    this.formError = '';
  }
}
