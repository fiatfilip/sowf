import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { Http, HttpModule } from '@angular/http';
import { ReputationService } from './services/reputation.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { WallComponent } from './wall/wall.component';
import { HeaderComponent } from './header/header.component';
import { AuthenticateComponent } from './authentication/authenticate/authenticate.component';

@NgModule({
  declarations: [
    AppComponent,
    WallComponent,
    ProfileComponent,
    HeaderComponent,
    AuthenticateComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    AuthGuardService,
    AuthService,
    ReputationService,
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
