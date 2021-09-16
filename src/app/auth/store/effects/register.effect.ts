import { of } from "rxjs";
import { Injectable } from "@angular/core";
import { catchError, map, switchMap } from "rxjs/operators";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import { AuthService } from "../../services/auth.service";
import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface";
import { registerAction, registerFailureAction, registerSuccessAction } from "../actions/register.action";
import { HttpErrorResponse } from "@angular/common/http";

@Injectable()
export class RegisterEffect {
    constructor(private actions$: Actions, private authService: AuthService) { }

    register$ = createEffect(() => this.actions$.pipe(
        ofType(registerAction),
        switchMap(({ request }) => {
            return this.authService.reggister(request).pipe(
                map((currentUser: CurrentUserInterface) => {
                    return registerSuccessAction({ currentUser })
                }),
                catchError((errorResponce: HttpErrorResponse) => {
                    return of(registerFailureAction({ errors: errorResponce.error.errors }))
                })
            )
        })
    ))

}