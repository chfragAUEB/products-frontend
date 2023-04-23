import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private service: AuthService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('In Error interceptor');
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log('lala', error);
        if (error.status === 502 || error.status === 0) {
          // Handle the 502 error here
          console.log('A 502 error occurred:', error);
          this.service.newAlert({
            type: 'danger',
            heading: 'Backend Error',
            text: 'Backend encountered an error and is restarting ...',
          });
        }
        // Re-throw the error to let other interceptors or subscribers handle it
        return throwError(() => new Error(error.message));
      })
    );
  }
}
