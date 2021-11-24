import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LogInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    //Get current time when request is sent
    const startTime = new Date().getTime();

    return next.handle(req).pipe(
      tap((response) => {
        //if response is valid calculate difference between startTime and end of request
        if (response instanceof HttpResponse) {
          const endTime = new Date().getTime();
          console.log(
            `Status response : ${response.status}  Response url : ${response.url}`
          );
          console.log(`Response time : ${endTime - startTime}`);
        }
      })
    );
  }
}
