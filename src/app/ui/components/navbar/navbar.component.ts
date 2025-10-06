import { CommonModule, TitleCasePipe } from '@angular/common';
import { Component, OnDestroy, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterModule,
} from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { filter, Subscription } from 'rxjs';
import { AuthService, UserData } from '../../../services/auth.service';

@Component({
  selector: 'kairoz-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports: [
    CommonModule,
    RouterModule,
    RouterLink,
    MatIconModule,
    TranslatePipe,
    TitleCasePipe,
  ],
})
export class NavbarComponent implements OnDestroy {
  user = signal<UserData | null>(null);

  private sub: Subscription;
  currentUrl = signal<string>('');

  constructor(
    private translate: TranslateService,
    public authService: AuthService,
    private router: Router
  ) {
    // Suscribirse al BehaviorSubject de AuthService
    this.sub = this.authService.currentUser$.subscribe((u) => {
      this.user.set(u);
    });

    // Suscribirse a cambios de ruta
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentUrl.set(event.url);
      });
  }

  logout() {
    this.router.navigate(['/login']);
    this.authService.logout();
  }

  switchLang() {
    const current = this.translate.currentLang;
    const nextLang = current === 'es' ? 'en' : 'es';
    this.translate.use(nextLang);
  }

  isServicePage(): boolean {
    return this.currentUrl().includes('/service/');
  }

  ngOnDestroy() {
    this.sub.unsubscribe(); // limpieza de suscripción
  }
}
