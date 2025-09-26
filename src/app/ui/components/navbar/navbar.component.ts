import { Component, effect, signal, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import {
  TranslatePipe,
 _
} from "@ngx-translate/core";
import { AuthService, UserData } from '../../../services/auth.service';
@Component({
  selector: 'navbarCom',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports: [CommonModule, RouterModule, RouterOutlet, MatIconModule, TranslatePipe ],
})
export class NavbarComponent implements OnDestroy {
  user = signal<UserData | null>(null);

  private sub: Subscription;

  constructor(
    private translate: TranslateService,
    public authService: AuthService
  ) {

    // Suscribirse al BehaviorSubject de AuthService
    this.sub = this.authService.currentUser$.subscribe(u => {
      this.user.set(u);
    });
  }

  logout() {
    this.authService.logout();
  }

  switchLang() {
  const current = this.translate.currentLang;
  const nextLang = current === 'es' ? 'en' : 'es';
  this.translate.use(nextLang);
}

  ngOnDestroy() {
    this.sub.unsubscribe(); // limpieza de suscripción
  }
}
