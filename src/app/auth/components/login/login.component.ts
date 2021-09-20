import { Observable } from "rxjs"
import { select, Store } from "@ngrx/store"
import { Component, OnInit } from "@angular/core"
import { FormBuilder, FormGroup, Validators } from "@angular/forms"

import { loginAction } from "../../store/actions/login.action"
import { LoginRequestInterface } from "../../types/login.interface"
import { BackendErrorsInterface } from "src/app/shared/types/backendErrors.interface"
import { isSubmittingSelector, validationErrorSelector } from "../../store/selectors"


@Component({
    selector: 'an-login',
    templateUrl: './login.component.html',
    styleUrls: ['login.component.scss']
})
export class LoginComponent implements OnInit {
    form: FormGroup
    isSubmitting$: Observable<boolean>
    backendErrors$: Observable<BackendErrorsInterface> | null

    constructor(private store: Store, private formBuilder: FormBuilder) { }

    ngOnInit(): void {
        this.initializeForm()
        this.initializeValues()
    }

    onSubmit(): void {
        const request: LoginRequestInterface = { ...this.form.value }
        this.store.dispatch(loginAction({ request }))
    }

    private initializeForm(): void {
        this.form = this.formBuilder.group({
            email: ['', Validators.required],
            password: ''
        })
    }

    private initializeValues(): void {
        this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
        this.backendErrors$ = this.store.pipe(select(validationErrorSelector))
    }
}