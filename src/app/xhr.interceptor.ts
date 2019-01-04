import {HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {CookieService} from "ngx-cookie-service";

@Injectable()
export class XhrInterceptor implements HttpInterceptor {

  constructor(private cookieservice:CookieService){}
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if(this.cookieservice.get('token')){
      const token=this.cookieservice.get('token');
      const xhr = req.clone({
        headers: req.headers.set('authorization', `Basic ${token}`)
      });
      return next.handle(xhr);
    }
    else{
      return next.handle(req);
    }
  }
}
