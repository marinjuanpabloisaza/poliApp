import { Component, signal, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {
  TranslateService,
  TranslatePipe,
  TranslateDirective, _
} from "@ngx-translate/core";


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslatePipe, TranslateDirective],
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.css']
})
export class LoginPage {
  protected readonly title = signal('poliApp');
  private translate = inject(TranslateService);

  email = '';
  password = '';

  constructor(
    private authService: AuthService,
    private router: Router,

  ) {
 
  }

  login() {
    this.authService.login(this.email, this.password).subscribe(res => {
      console.log('Login response:', res);
      if (res.success && res.data) {
        console.log('Login exitoso, datos guardados en sessionStorage');
        this.router.navigate(['/dashboard']);
        console.error('Error en login:', res.code);
      }
    });
  }
}
