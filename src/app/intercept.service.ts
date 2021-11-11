import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonService } from './common.service';
@Injectable({
  providedIn: 'root'
})

@Injectable()
export class InterceptService implements HttpInterceptor {
  constructor(private service: CommonService){}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      let token=`bmF6aW1AbmltYXBpbmZvdGVjaC5jb206dGVzdEAxMjM=`
      if (this.service.isLoggedin()) {
        request = request.clone({
          setHeaders: {
            Authorization: `Basic ${token}`,
            'Cache-Control': 'no-cache',
            Pragma: 'no-cache',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
          }
        });
      }
      return next.handle(request);
    }
}
