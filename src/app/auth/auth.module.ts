import { NgModule } from '@angular/core'
import { StoreModule } from '@ngrx/store'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router'

import { reducers } from './store/reducers'
import { AuthService } from './services/auth.service'
import { RegisterComponent } from './components/register/register.component'
import { EffectsModule } from '@ngrx/effects'
import { RegisterEffect } from './store/effects/register.effect'
import { BackendErrorsMessagesModule } from '../shared/modules/backendErrorMessages/backendErrorsMessages.module'

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    BackendErrorsMessagesModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([RegisterEffect])
  ],
  declarations: [RegisterComponent],
  providers: [AuthService]
})
export class AuthModule { }
