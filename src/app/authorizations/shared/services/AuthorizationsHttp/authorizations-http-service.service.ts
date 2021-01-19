import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { catchError, finalize, tap } from 'rxjs/operators'
import { User } from 'src/app/core/user/user';
import { UserService } from 'src/app/core/user/user.service';
import { environment } from 'src/environments/environment';
import { LoaderService } from '../loader.service';

@Injectable({
  providedIn: 'any' 
})
export class AuthorizationsHttpServiceService {

  constructor(private http: HttpClient,
              private userService: UserService,
              private loaderService: LoaderService) { 

  }

  register(signupForm: FormGroup): Observable<User> {
    // this.loaderService.setRegister(true);
    return this.http.post<User>(environment.api.signup, {  
      username: signupForm.get('username').value,
      email: signupForm.get('email').value,
      password: signupForm.get('password').value
    }).pipe(
      tap(() => {
        this.loaderService.setRegister(false);
      })
    );

  }


  login(loginForm: FormGroup): Observable<User> {
    // this.loaderService.setLogin(true);
    return this.http.post<User>(environment.api.login, {
      email: loginForm.get('email').value,
      password: loginForm.get('password').value,
    }).pipe(
      tap((user : User) => {
        this.userService.setActive(user);
        this.loaderService.setLogin(false);
      })
    );
  }

}
