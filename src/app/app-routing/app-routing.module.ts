import { AuthGuardService } from '../services/auth-guard.service';
import { AuthenticateComponent } from '../authentication/authenticate/authenticate.component';
import { ProfileComponent } from '../profile/profile.component';
import { WallComponent } from '../wall/wall.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


const appRoutes:Routes = [
  {path: '', redirectTo: '/wall', pathMatch:'full'},
  {path: 'wall', component: WallComponent},
  {path: 'profile', canActivate: [AuthGuardService], component: ProfileComponent},
  {path: 'authentication/authenticate', component: AuthenticateComponent},
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
