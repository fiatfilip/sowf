import { UserService } from './user.service';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class ReputationService {
  private reputationUrl: string = "https://api.stackexchange.com/2.2/users";
  private orderParams:string = "order=desc&sort=reputation&site=stackoverflow"
  // private userIds:string[] =[
  //   "8302340", //filipfiat
  //   "1879076", //dutzu
  //   "1954563", //vlad
  //   "2451127", //gerge ganea
  // ]

  constructor(private http: Http, private userService: UserService) { }

  getReputation(userStore: string){
    return this.http.get(userStore + ".json").map(
      (response: Response) => {
        const users = response.json();
        var userIds: string[] = [];
        for(var user in users){
           userIds.push(users[user].user_id);
        }
        return userIds;
      }).flatMap((userIds) => {
        return this.http.get(this.reputationUrl + "/" + userIds.join(';') + "?" + this.orderParams);
      }
    )
  }
}
