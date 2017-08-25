import { Observable } from 'rxjs/Rx';
import { UserService } from '../services/user.service';
import { ReputationService } from '../services/reputation.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css'],
 // providers: [ReputationService]
})
export class WallComponent implements OnInit {
  standings:any;

  ngOnInit() {
    this.getReputation();
  }

  constructor(private reputationService : ReputationService, private userService: UserService){}

  getReputation(){
   this.reputationService.getReputation(this.userService.getUserStore()).subscribe(
      (response: any) => {
        this.standings = response.json().items;
      },
      (error) => {console.log(error)}
    );
  }

}
