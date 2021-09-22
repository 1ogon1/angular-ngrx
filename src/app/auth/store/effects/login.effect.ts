import { of } from "rxjs";
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import { AuthKeys } from "src/app/auth/shared/auth.keys";
import { AuthService } from "../../services/auth.service";
import { catchError, map, switchMap, tap } from "rxjs/operators";
import { loginAction, loginFailrueAction, loginSuccessAction } from "../actions/login.action";
import { PersistanceService } from "src/app/shared/services/persistance.service";
import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface";

@Injectable()
export class LoginEffect {
    constructor(
        private router: Router,
        private actions$: Actions,
        private authService: AuthService,
        private persistanceService: PersistanceService
    ) { }

    login$ = createEffect(() => this.actions$.pipe(
        ofType(loginAction),
        switchMap(({ request }) => {
            return this.authService.login(request).pipe(
                map((currentUser: CurrentUserInterface) => {
                    this.persistanceService.set(AuthKeys.AccessToken, `Bearer ${currentUser.token}`)

                    return loginSuccessAction({ currentUser })
                }),
                catchError((error: HttpErrorResponse) => {
                    return of(loginFailrueAction({ errors: error.error }))
                })
            )
        })
    ))

    redirectAfterSubmit$ = createEffect(
        () => this.actions$.pipe(
            ofType(loginSuccessAction),
            tap(() => {
                this.router.navigateByUrl('/')
            })
        ),
        { dispatch: false }
    )
}