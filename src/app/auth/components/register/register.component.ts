import { Observable } from 'rxjs'
import { Component, OnInit } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

import { registerAction } from '../../store/actions/register.action'
import { RegisterRequestInterface } from '../../types/registerRequest.interface'
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface'
import { isSubmittingSelector, validationErrorSelector } from '../../store/selectors'

@Component({
  selector: 'an-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup
  isSubmitting$: Observable<boolean>
  backendErrors$: Observable<BackendErrorsInterface> | null

  constructor(private formBuilder: FormBuilder, private store: Store) { }

  ngOnInit(): void {
    this.initializeForm()
    this.initializeValues()
  }

  initializeForm(): void {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      email: '',
      password: '',
    })
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ =this.store.pipe(select(validationErrorSelector));
  }

  onSubmit(): void {
    const request: RegisterRequestInterface = { ...this.form.value };
    this.store.dispatch(registerAction({ request }))
  }
}
