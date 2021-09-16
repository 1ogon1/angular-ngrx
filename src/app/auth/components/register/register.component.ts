import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { select, Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { AppStateInterface } from 'src/app/shared/types/appState.interface'
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface'
import { registerAction } from '../../store/actions/register.action'
import { isSubmittingSelector, validationErrorSelector } from '../../store/selectors'
import { AuthStateInterface } from '../../types/authState.interface'
import { RegisterRequestInterface } from '../../types/registerRequest.interface'

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
    console.log(this.form.value)
    const request: RegisterRequestInterface = {
      user: this.form.value
    };
    this.store.dispatch(registerAction({ request }))
  }
}
