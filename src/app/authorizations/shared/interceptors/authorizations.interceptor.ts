import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { LoaderService } from '../services/loader.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationsHttpInterceptor implements HttpInterceptor {

  constructor(private loaderService: LoaderService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("Intercepted ! (authorizationsHttpInterceptor)")
    let action = null;

    if (environment.api.login == req.url) {
      action = 'login';
    } else if (environment.api.signup) {
      action = "register"
    } else {
      return next.handle(req);
    }

    this.loaderService[action] = true;
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        let message: string = "Network problem";
        if (error.status === 404) {
          message = "Invalid credentials";

        } else if (error.status === 400) {
          message = error.error.error;
          
        } else if (error.status === 500) {
          message = "Unavailable Webservice";
        }
        throw message;

      }),
      finalize(() => {
        this.loaderService[action] = false;
      })
    );
  }

}
