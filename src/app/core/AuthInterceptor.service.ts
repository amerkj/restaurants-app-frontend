import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { AuthService } from './Auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  token = ''
  constructor(private authService: AuthService) {
    this.authService.Token.subscribe(token => {
      this.token = token
    })
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let headers:any = 
    {
      'Content-Type' : 'application/json; charset=utf-8',
      'Accept'       : 'application/json',
    }
    if(this.token) {
      headers = {
        ...headers,
        'Authorization': `Bearer ${this.token}`,
      }
    }
    req = req.clone({
      setHeaders: headers,
    });

    return next.handle(req);
  }
}