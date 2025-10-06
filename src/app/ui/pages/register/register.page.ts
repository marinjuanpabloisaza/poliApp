import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { AuthService } from '../../../services/auth.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'kairoz-register',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslatePipe, RouterLink],
  templateUrl: './register.page.html',
})
export class RegisterPage {
  model = {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  errorMensaje = signal<string>('');
  loading = signal<boolean>(false);

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router
  ) {}

  onRegister(form: any) {
    if (form.value.password !== form.value.confirmPassword) {
      this.loading.set(false);
      this.errorMensaje.set('PASSWORD_NO_FOUNT');
      return;
    } else {
      this.loading.set(true);
      this.errorMensaje.set('');
      const { userName, password, name, lastName } = form.value;
      this.userService.register(userName, password, name, lastName).subscribe({
        next: (res) => {
          if (res.success) {
            this.authService.login(userName, password).subscribe({
              next: (res) => {
                if (res.success && res.data) {
                  this.router.navigate(['/dashboard']);
                }
              },
              complete: () => {
                this.loading.set(false);
              },
            });
          } else {
            this.errorMensaje.set(res.code as string);
            this.loading.set(false);
          }
        },
        error: (err) => {
          this.errorMensaje.set(err as string);
        },
      });
    }
  }
}
