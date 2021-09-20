import { NgModule } from '@angular/core'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'

import { AppComponent } from './app.component'
import { AuthModule } from './auth/auth.module'
import { AppRoutingModule } from './app-routing.module'
import { environment } from 'src/environments/environment'
import { TopBarModule } from './shared/modules/topBar/topBar.module'
import { PersistanceService } from './shared/services/persistance.service'
import { AuthInterceptor } from './shared/services/authInterceptor.service'
import { GlobalFeedModule } from './globalFeed/globalFeed.module'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule,
    TopBarModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    GlobalFeedModule
  ],
  providers: [PersistanceService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent],
})
export class AppModule { }
