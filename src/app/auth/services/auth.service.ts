import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'

import { environment } from "src/environments/environment";
import { AuthResponseInterface } from "../types/authResponse.interface";
import { RegisterRequestInterface } from "../types/registerRequest.interface";
import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface";

@Injectable()
export class AuthService {
    constructor(private http: HttpClient) { }

    reggister(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
        return this.http
            .post<AuthResponseInterface>(`${environment.apiUrl}/users`, data)
            .pipe(map((response: AuthResponseInterface) => response.user))
    }
}