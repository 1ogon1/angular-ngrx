import { NgModule } from '@angular/core'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router'

import { reducers } from './store/reducers'
import { AuthKeys } from './shared/auth.keys'
import { AuthService } from './services/auth.service'
import { LoginEffect } from './store/effects/login.effect'
import { RegisterEffect } from './store/effects/register.effect'
import { LoginComponent } from './components/login/login.component'
import { PersistanceService } from '../shared/services/persistance.service'
import { RegisterComponent } from './components/register/register.component'
import { GetCurrentUserEffect } from './store/effects/getCurrentUser.effect'
import { BackendErrorsMessagesModule } from '../shared/modules/backendErrorMessages/backendErrorsMessages.module'

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    BackendErrorsMessagesModule,
    StoreModule.forFeature(AuthKeys.StoreModule, reducers),
    EffectsModule.forFeature([RegisterEffect, LoginEffect, GetCurrentUserEffect])
  ],
  declarations: [RegisterComponent, LoginComponent],
  providers: [AuthService, PersistanceService]
})
export class AuthModule { }
