import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Incident} from "./model/incident";

@Injectable({
  providedIn: 'root'
})
export class GetService {
  baseUrl : string="http://localhost:8080/";
  constructor( private  http: HttpClient) { }

  getstatprov(province): Observable<any>{
    return this.http.get<Observable<any>>(this.baseUrl+'api/carto/stat/'+province);
 }
  getall(): Observable<any> {
    return this.http.get<Observable<any>>(this.baseUrl + 'api/carto/all');
  }
  getprov(): Observable<any> {
    return this.http.get<Observable<any>>(this.baseUrl + 'api/carto/prov');
  }
  getetat(): Observable<any> {
    return this.http.get<Observable<any>>(this.baseUrl + 'api/carto/etat');
  }
}
