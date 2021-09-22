import { of } from "rxjs";
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, switchMap, tap } from "rxjs/operators";

import { AuthKeys } from "src/app/auth/shared/auth.keys";
import { AuthService } from "../../services/auth.service";
import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface";
import { PersistanceService } from "src/app/shared/services/persistance.service";
import { registerAction, registerFailureAction, registerSuccessAction } from "../actions/register.action";

@Injectable()
export class RegisterEffect {
    constructor(
        private router: Router,
        private actions$: Actions,
        private authService: AuthService,
        private persistanceService: PersistanceService
    ) { }

    register$ = createEffect(() => this.actions$.pipe(
        ofType(registerAction),
        switchMap(({ request }) => {
            return this.authService.reggister(request).pipe(
                map((currentUser: CurrentUserInterface) => {
                    this.persistanceService.set<string>(AuthKeys.AccessToken, `Bearer ${currentUser.token}`)

                    return registerSuccessAction({ currentUser })
                }),
                catchError((error: HttpErrorResponse) => {
                    return of(registerFailureAction({ errors: error.error }))
                })
            )
        })
    ))

    redirectAfterSubmit$ = createEffect(
        () => this.actions$.pipe(
            ofType(registerSuccessAction),
            tap(() => {
                this.router.navigateByUrl('/')
            })
        ),
        { dispatch: false }
    )
}