import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { TagFeedModule } from './tagFeed/tagFeed.module';
import { environment } from 'src/environments/environment';
import { YourFeedModule } from './yourFeed/yourFeed.module';
import { GlobalFeedModule } from './globalFeed/globalFeed.module';
import { TopBarModule } from './shared/modules/topBar/topBar.module';
import { PersistanceService } from './shared/services/persistance.service';
import { AuthInterceptor } from './shared/services/authInterceptor.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AuthModule,
    TopBarModule,
    TagFeedModule,
    BrowserModule,
    YourFeedModule,
    AppRoutingModule,
    GlobalFeedModule,
    HttpClientModule,
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
    StoreModule.forRoot({ router: routerReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    })
  ],
  providers: [PersistanceService, {
    multi: true,
    useClass: AuthInterceptor,
    provide: HTTP_INTERCEPTORS
  }],
  bootstrap: [AppComponent],
})
export class AppModule { }
