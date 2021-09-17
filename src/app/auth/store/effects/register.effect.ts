import { of } from "rxjs";
import { Injectable } from "@angular/core";
import { catchError, map, switchMap, tap } from "rxjs/operators";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import { AuthService } from "../../services/auth.service";
import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface";
import { registerAction, registerFailureAction, registerSuccessAction } from "../actions/register.action";
import { HttpErrorResponse } from "@angular/common/http";
import { PersistanceService } from "src/app/shared/services/persistance.service";
import { Router } from "@angular/router";

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
                    this.persistanceService.set<string>('accessToken', currentUser.token)

                    return registerSuccessAction({ currentUser })
                }),
                catchError((errorResponce: HttpErrorResponse) => {
                    return of(registerFailureAction({ errors: errorResponce.error }))
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