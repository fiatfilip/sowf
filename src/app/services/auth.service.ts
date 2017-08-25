import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class AuthService implements OnInit {
  private accessToken: string;

  private issuer: string;
  private redirectUri: string;
  private clientId: string;
  private scope: string;

  private loginURL: string;


  constructor() {
    // Issuer's Login-Url
    this.issuer = "https://stackexchange.com/oauth/dialog"; 

    // URL of the SPA to redirect the user to after login
    this.redirectUri = window.location.origin + "/authentication/authenticate";

    // The SPA's id. The SPA is registerd with this id at the auth-server
    this.clientId = "10455";

    // set the scope for the permissions the client should request
    this.scope = "";

    this.loginURL = this.issuer + "?" + "client_id=" + this.clientId + "&redirect_uri=" + this.redirectUri;
   }

   ngOnInit() {
    
  }

  public authenticate() {
    console.log("authenticate called " + this.loginURL);
    window.location.href = this.loginURL;
  }
    
  public logoff() {
    console.log("logout called");

    console.log("logout called");
  }

  isAuthenticated():boolean{
    return this.accessToken != null;
  }

  setAccessToken(token :string){
    this.accessToken = token;
  }

  getAccessToken(){
    return this.accessToken ;
  }
}
