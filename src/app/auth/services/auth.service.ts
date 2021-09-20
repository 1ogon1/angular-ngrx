import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { environment } from 'src/environments/environment'
import { AuthResponseInterface } from '../types/authResponse.interface'
import { RegisterRequestInterface } from '../types/registerRequest.interface'
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface'
import { LoginRequestInterface } from '../types/login.interface'

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) { }

  login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
    return this.http
      .post<AuthResponseInterface>(`${environment.apiUrl}/auth/login`, data)
      .pipe(map((response: AuthResponseInterface) => response.user))
  }

  reggister(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    return this.http
      .post<AuthResponseInterface>(`${environment.apiUrl}/auth/register`, data)
      .pipe(map((response: AuthResponseInterface) => response.user))
  }

  getCurrentUser(): Observable<CurrentUserInterface> {
    return this.http
    .get<AuthResponseInterface>(`${environment.apiUrl}/user`)
    .pipe(map((response: AuthResponseInterface) => response.user))
  }
}
