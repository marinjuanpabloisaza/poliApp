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
  currentLang = signal<string>('es');

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

    // Suscribirse a cambios de idioma
    this.translate.onLangChange.subscribe((event) => {
      this.currentLang.set(event.lang);
    });

    // Establecer idioma inicial
    this.currentLang.set(this.translate.currentLang || 'es');
  }

  logout() {
    this.router.navigate(['/login']);
    this.authService.logout();
  }

  switchLang() {
    const current = this.currentLang();
    const nextLang = current === 'es' ? 'en' : 'es';
    console.log('Current lang:', current, 'Switching to:', nextLang);
    
    this.translate.use(nextLang).subscribe({
      next: (translations) => {
        console.log('Language changed successfully to:', nextLang);
        this.currentLang.set(nextLang);
      },
      error: (error) => {
        console.error('Error changing language:', error);
      }
    });
  }

  get currentLanguage(): string {
    const current = this.currentLang();
    return current === 'es' ? 'ES' : 'EN';
  }

  get currentLanguageName(): string {
    const current = this.currentLang();
    return current === 'es' ? 'Español' : 'English';
  }

  isServicePage(): boolean {
    return this.currentUrl().includes('/service/');
  }

  ngOnDestroy() {
    this.sub.unsubscribe(); // limpieza de suscripción
  }
}
