import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { map } from "rxjs/operators";
import { isNullOrUndefined } from "util";

import { Users } from "../models/users";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isUserLoggedIn;
  public usserLogged:Users;

  public userCod:Users;

  constructor(private http: HttpClient) {this.isUserLoggedIn = false; }

  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
});

registerUser(user: any) {
  const url_api = "http://localhost:3000/auth/register";

  return this.http.post(url_api, user);
}

loginuser(email: string, password: string): Observable<any> {
  const url_api = "http://localhost:3000/auth/login";
  return this.http.post(url_api, {email, password});
}

passwordUser(password: any) {
  const url_api = "http://localhost:3000/auth/changePass";
  
  return this.http.post(url_api, password);
}

setUserLoggedIn(user:Users) {
  this.isUserLoggedIn = true;
  this.usserLogged = user;
  localStorage.setItem('currentUser', JSON.stringify(user));
}


getUserLoggedIn() {
  return localStorage.getItem('currentUser');
}

setCodigoPass(user:Users) {
  this.userCod = user;
  localStorage.setItem('currentCod', JSON.stringify(user));
}

getCodigoPass() {
  return localStorage.getItem('currentCod');
}

logoutUser() {
  localStorage.removeItem("currentUser");
}
}
