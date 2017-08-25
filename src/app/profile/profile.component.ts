import { UserService } from '../services/user.service';
import { User } from '../model/user.model';
import { AuthService } from '../services/auth.service';
import { AuthGuardService } from '../services/auth-guard.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
 /* providers:[
    AuthGuardService,
    AuthService
  ]*/
})
export class ProfileComponent implements OnInit {

     username:string;
     id:string;
     link: string;
     profileImage: string;
     reputation: number;
     reputationChangeDay: number;
     reputationChangeWeek: number;
     reputationChangeMonth: number;
     reputationChangeQuarter: number;
     reputationChangeYear: number;
     bronzeBadges: number;
     silverBadges: number;
     goldBadges: number;

    enrolled: boolean;

  constructor(private authService : AuthService, private userService: UserService) { }

  ngOnInit() {
    this.userService.getAuthenticatedUser(this.authService.getAccessToken()).subscribe(
      (userInfo : User) => {
          this.username = userInfo.getName();
          this.id = userInfo.getId();
          this.link = userInfo.getLink();
          this.profileImage = userInfo.getProfileImage();
          this.reputation = userInfo.getReputation();
          this.reputationChangeDay = userInfo.getReputationChangeDay();
          this.reputationChangeWeek = userInfo.getReputationChangeWeek();
          this.reputationChangeMonth = userInfo.getReputationChangeMonth();
          this.reputationChangeQuarter = userInfo.getReputationChangeQuarter();
          this.reputationChangeYear = userInfo.getReputationChangeYear();
          this.bronzeBadges = userInfo.getBronzeBadges();
          this.silverBadges = userInfo.getSilverBadges();
          this.goldBadges = userInfo.getGoldBadges();
          this.enrolled = this.userService.isEnrolled();
          this.userService.userIsSubscribed(this.id).subscribe(
            (response) => {
              if(response){
                this.userService.setEnrolled(true);
                this.enrolled = true;
              }
            }
          )
      }
    );
    //this.enrolled = this.userService.isEnrolled();
  }

  onEnrollChange(){
    this.enrolled = !this.enrolled;
    this.userService.setEnrolled(this.enrolled);
    if(this.enrolled){
      this.userService.addEnrollement(this.username, this.id).subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      )
    }else{
      this.userService.deleteEnrollement(this.username).subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      )
    }
  }
}
