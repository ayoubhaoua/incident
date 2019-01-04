import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {CookieService} from "ngx-cookie-service";

@Injectable()
export class AppService {

  authenticated = false;
  BASE_URL="http://localhost:8080";
  Role='';
  username='';

  constructor(private http: HttpClient, private cookieservice :CookieService) {
  }

  authenticate(credentials, callback) {
    if(credentials) {
      const token =btoa(credentials.username + ':' + credentials.password);
      this.cookieservice.set('token',token);
      this.auth(callback);
    }
  }

  auth(callback){
  this.http.get(this.BASE_URL+'/user/user').subscribe(response => {
    if (response['name']) {
      console.log(response['name'])
      this.username=response['name'];
      this.authenticated = true;
      this.Role=response['authorities'][0].authority;
      console.log("test&&&");
    } else {
      this.authenticated = false;
      this.Role='';
    }
    return callback && callback();
  })
}

logout(){
  this.cookieservice.delete("token");
  this.authenticated = false;
  this.Role='';
}

}
