import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/services/auth.service';
import { UserModule } from './user/user.module';
import { ApiService } from './shared/services/api.service';
import { TrainerModule } from './trainer/trainer.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggle,
    AuthModule,
    UserModule,
    TrainerModule
  ],
  providers: [
    provideAnimationsAsync(),
    AuthService,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
