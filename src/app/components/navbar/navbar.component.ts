import { Component, effect, signal, OnDestroy } from '@angular/core';
import { AuthService, UserData } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'navbarCom',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports: [CommonModule, RouterModule, RouterOutlet],
})
export class NavbarComponent implements OnDestroy {
  user = signal<UserData | null>(null);
  private sub: Subscription;

  constructor(public authService: AuthService) {
    // Suscribirse al BehaviorSubject de AuthService
    this.sub = this.authService.currentUser$.subscribe(u => {
      this.user.set(u);
      console.log('Usuario actualizado:', this.user());
    });
  }

  logout() {
    this.authService.logout();
    // no hace falta setear user, ya lo hará la suscripción
  }

  ngOnDestroy() {
    this.sub.unsubscribe(); // limpieza de suscripción
  }
}
