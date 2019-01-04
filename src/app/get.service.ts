import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GetService {
  baseUrl : string="http://localhost:8080/";
  constructor( private  http: HttpClient) { }

  getstatprov(province,filter): Observable<any>{
    return this.http.get<Observable<any>>(this.baseUrl+'api/carto/stat/'+filter+"/"+province);
 }
  getall(): Observable<any> {
    return this.http.get<Observable<any>>(this.baseUrl + 'api/carto/all');
  }
  getallbypro(username):Observable<any>{
    return this.http.get<Observable<any>>(this.baseUrl + 'user/incident/'+username);
  }
  getprov(): Observable<any> {
    return this.http.get<Observable<any>>(this.baseUrl + 'api/carto/prov');
  }
  getetat(): Observable<any> {
    return this.http.get<Observable<any>>(this.baseUrl + 'api/carto/etat');
  }

 updateincident(incident): Observable<any>{
   return this.http.post<Observable<any>>(this.baseUrl + 'admin/modifier',incident);
 } 
 updateincident1(incident): Observable<any>{
  return this.http.post<Observable<any>>(this.baseUrl + 'user/modifier',incident);
 } 

 getprofs(id:number):Observable<any>{
  return this.http.get<Observable<any>>(this.baseUrl + 'admin/profs/'+id);
 }
 delincident(id:number):Observable<any>{
  return this.http.get<Observable<any>>(this.baseUrl + 'admin/del/'+id);
 }

}
