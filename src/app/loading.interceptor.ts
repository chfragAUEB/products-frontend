import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  constructor(private service: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Set isLoading to true before making the HTTP call
    this.service.setLoadingState(true);

    // Pass the request to the next interceptor or backend
    return next.handle(req).pipe(
      // Set isLoading to false when the request is finalized
      finalize(() => this.service.setLoadingState(false))
    );
  }
}
