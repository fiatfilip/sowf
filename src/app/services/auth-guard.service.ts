import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuardService implements CanActivate{

  constructor(private authService : AuthService, private router: Router) { }

  canActivate(route:ActivatedRouteSnapshot, 
    state:RouterStateSnapshot): boolean{
      if (this.authService.isAuthenticated()){
          return true;
      }else{
          this.authService.authenticate();
      }
  }

}
