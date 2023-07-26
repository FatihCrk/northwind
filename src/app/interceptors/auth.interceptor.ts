import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

//mmiddleware'lar gibi araya girecek intercepterlar yazılabilir. Hata kodu verdiğinde ne yapayım gibi...

//interceptor araya girmek- pakete Token ekleyip göndermek için. app.Module'deki provider'a Interceptor'ı ekliyoruz.

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = localStorage.getItem("token");
    let newRequest: HttpRequest<any>;
    newRequest = request.clone({   //Request Klonu oluşturduk. Headers, Bearer ve Token alanı Oluşturuyoruz ve Set ediyoruz..
      headers: request.headers.set("Authorization", "Bearer " + token)
    })
    return next.handle(newRequest);   //Token ile handle ediyoruz.
  }
}
