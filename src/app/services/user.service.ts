import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

export interface UserData {
  id: string;
  userName: string;
  accessToken: string;
  refreshToken: string;
}

interface RegisterResponse {
  success: boolean;
  code?: string;
  data?: any;
}

@Injectable({ providedIn: 'root' })
export class UserService {
  private apiUrl = `${environment.apiUrl}/user`;

  constructor(private http: HttpClient, private ngZone: NgZone) {}

  register(
    userName: string,
    password: string,
    name: string,
    lastName: string
  ): Observable<RegisterResponse> {
    return this.http
      .post<RegisterResponse>(`${this.apiUrl}/create`, {
        userName,
        password,
        name,
        lastName,
      })
      .pipe(
        tap((res) => {
          if (res.success && res.data) {
          }
        })
      );
  }
}
