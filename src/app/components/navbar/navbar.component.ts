import { Component, effect, signal, OnDestroy } from '@angular/core';
import { AuthService, UserData } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'navbarCom',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports: [CommonModule, RouterModule, RouterOutlet, MatIconModule ],
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
    this.sub = this.authService.currentUser$.subscribe(u => {
      this.user.set(u);
      console.log('Usuario actualizado:', this.user());
    });

    // Suscribirse a cambios de ruta
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentUrl.set(event.url);
      });
  }

  logout() {
    this.authService.logout();
  }

  switchLang() {
  const current = this.translate.currentLang;
  const nextLang = current === 'es' ? 'en' : 'es';
  console.log(`🌐 Cambiando idioma de ${current} a ${nextLang}`);
  this.translate.use(nextLang);
}

  isServicePage(): boolean {
    return this.currentUrl().includes('/service/');
  }

  ngOnDestroy() {
    this.sub.unsubscribe(); // limpieza de suscripción
  }
}
