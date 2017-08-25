import { Observer } from 'rxjs/Rx';
import { User } from '../model/user.model';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable'; 
import 'rxjs/Rx';

@Injectable()
export class UserService {

  private siteName: string;
  private apiKey: string;

  private userStore: string;

  private enrolled:boolean;

  constructor(private http: Http) { 
    this.siteName = "stackoverflow";
    this.apiKey = "cftNWuciXgFtpn0K23pokw((";
    this.userStore = "https://hl-reputation.firebaseio.com/userids";
   // this.initForTest();
  }

  userIsSubscribed(id: string){
      return this.http.get(this.userStore + ".json").map(
        (response: Response) => {
          const users = response.json();
          for(var user in users){
            if(users[user].user_id == id){
              return true;
            }
          }
          return false;
        }
      )
  }


  getAuthenticatedUser(token: string){
    return this.http.get("https://api.stackexchange.com/2.2/me?site=" + this.siteName + "&key=" + this.apiKey + "&access_token=" + token)
        .map(
          (response: Response) => {
            var userInfo = response.json().items;
            var user = new User(userInfo[0].display_name, 
                                userInfo[0].user_id,
                                userInfo[0].link,
                                userInfo[0].profile_image,
                                userInfo[0].reputation,
                                +userInfo[0].reputation_change_day,
                                +userInfo[0].reputation_change_week,
                                +userInfo[0].reputation_change_month,
                                +userInfo[0].reputation_change_quarter,
                                +userInfo[0].reputation_change_year,
                                +userInfo[0].badge_counts.bronze,
                                +userInfo[0].badge_counts.silver,
                                +userInfo[0].badge_counts.gold
                              );
            return user;
          },
          (error) => {console.log(error);}
        );
  }

  addEnrollement(userName: string, userId: string){
    return this.http.put(this.userStore + "/" + userName + ".json", '{"user_name" : "' + userName + '", "user_id" : "' + userId + '"}');
  }

  deleteEnrollement(userName: string){
    return this.http.delete(this.userStore + "/" + userName + ".json");
  }

  //only populate database for testing purposes
  initForTest(){
      const  userIds:any[] =[
      //"8302340", //filipfiat
        {id: "1879076", name: "dutzu"},
        {id: "1954563", name: "vlad"},
        {id: "2451127", name: "george ganea"},
      ] 
      for(let userId of userIds){
        this.addEnrollement(userId.name, userId.id).subscribe(
          (response) => console.log(response),
          (error) => console.log(error)
        )
      }
  }

  getUserStore(){
    return this.userStore;
  }

  setEnrolled(enrolled: boolean){
    this.enrolled = enrolled;
  }

  isEnrolled(){
    return this.enrolled;
  }

}
