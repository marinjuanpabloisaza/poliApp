import { Injectable, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface UserData {
  id: string;
  userName: string;
  accessToken: string;
  refreshToken: string;
}

interface LoginResponse {
  success: boolean;
  code?: string;
  data?: UserData;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = 'http://localhost:3000/auth';

  private currentUserSubject = new BehaviorSubject<UserData | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

//   private inactivityTime = 2 * 60 * 1000; // 2 minutos
private inactivityTime = 10 * 1000; // 10 segundos

  private timer: any;

  constructor(private http: HttpClient, private ngZone: NgZone) {
    // Inicializa desde sessionStorage si ya hay sesión
    const storedUser = sessionStorage.getItem('currentUser');
    if (storedUser) {
      this.currentUserSubject.next(JSON.parse(storedUser));
      this.startInactivityWatcher(); // comienza a vigilar la inactividad
    }
  }

  login(email: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, { email, password })
      .pipe(
        tap(res => {
          if (res.success && res.data) {
            // Guarda en sessionStorage y BehaviorSubject
            sessionStorage.setItem('currentUser', JSON.stringify(res.data));
            this.currentUserSubject.next(res.data);
            this.startInactivityWatcher(); // reinicia vigilancia al hacer login
          }
        })
      );
  }

  logout() {
    sessionStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    clearTimeout(this.timer);
  }

  getCurrentUser(): UserData | null {
    return this.currentUserSubject.value;
  }

  getToken(): string | null {
    return this.currentUserSubject.value?.accessToken || null;
  }

  private startInactivityWatcher() {
    // Escucha eventos de interacción del usuario
    ['mousemove', 'mousedown', 'keypress', 'touchstart', 'scroll'].forEach(event => {
      window.addEventListener(event, () => this.resetTimer());
    });

    this.resetTimer();
  }

  private resetTimer() {
    clearTimeout(this.timer);
    this.ngZone.runOutsideAngular(() => {
      this.timer = setTimeout(() => this.ngZone.run(() => this.logout()), this.inactivityTime);
    });
  }
}
