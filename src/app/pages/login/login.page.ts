import { Component, signal, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {
  TranslatePipe,
 _
} from "@ngx-translate/core";
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslatePipe, RouterModule],
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.css']
})
export class LoginPage {
  protected readonly title = signal('poliApp');
  loading = signal<boolean>(false);
  error = signal<boolean>(false);
  errorMensaje = signal<string>('');



  email = '';
  password = '';

  constructor(
    private authService: AuthService,
    private router: Router,

  ) {

  }

  login() {
    this.loading.set(true);

    this.authService.login(this.email, this.password).subscribe({
      next: (res) => {

        if (res.success && res.data) {
          this.router.navigate(['/dashboard']);
        } else {
          this.error.set(true);
          this.errorMensaje.set(res.code as string);
        }
      },
      error: (err) => {
        this.error.set(true);
      },
      complete: () => {
        this.loading.set(false);
      }
    });
  }
}
