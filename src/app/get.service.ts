import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Incident} from "./model/incident";

@Injectable({
  providedIn: 'root'
})
export class GetService {
  baseUrl : string="http://localhost:8080";
  constructor( private  http: HttpClient) { }

  getstatprov(province): Observable<any>{
    return this.http.get<Observable<any>>(this.baseUrl+'/carto/statAll/'+province);
 }
  getall(): Observable<any> {
    return this.http.get<Observable<any>>(this.baseUrl + '/carto/all');
  }
}
