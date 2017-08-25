import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import { UserService } from './../../services/user.service';
import { User } from './../../model/user.model';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css']
})
export class AuthenticateComponent implements OnInit {
  private fragment: string;
  private userInfo: any;

  constructor(private authService: AuthService, private userService: UserService, private route: ActivatedRoute, private router: Router) { 

  }

  ngOnInit() {
    if(this.route.snapshot.fragment != null){
      this.fragment = this.route.snapshot.fragment.split("&")[0].split("=")[1];
      this.authService.setAccessToken(this.fragment);
      this.router.navigate(['/profile']);
    }else{
      this.router.navigate(['/wall']);
    }
  }
}
