import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthKeys } from "src/app/auth/shared/auth.keys";
import { PersistanceService } from "./persistance.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private persistanceService: PersistanceService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        request = request.clone({
            setHeaders: {
                Authorization: this.persistanceService.get(AuthKeys.AccessToken) || ''
            }
        })

        return next.handle(request)
    }

}