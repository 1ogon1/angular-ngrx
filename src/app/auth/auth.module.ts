import { NgModule } from '@angular/core'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router'

import { reducers } from './store/reducers'
import { AuthService } from './services/auth.service'
import { RegisterEffect } from './store/effects/register.effect'
import { PersistanceService } from '../shared/services/persistance.service'
import { RegisterComponent } from './components/register/register.component'
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
  providers: [AuthService, PersistanceService]
})
export class AuthModule { }
