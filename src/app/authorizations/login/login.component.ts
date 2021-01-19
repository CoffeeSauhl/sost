import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/core/user/user';
import { UserService } from 'src/app/core/user/user.service';
import { environment } from 'src/environments/environment';
import { AuthorizationsHttpServiceService } from '../shared/services/AuthorizationsHttp/authorizations-http-service.service';
import { LoaderService } from '../shared/services/loader.service';
import { LoginFormService } from './service/login-form.service';

@Component({
  selector: 'sost-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  public loginForm : FormGroup;
  public error : HttpErrorResponse;
  // private user : User;

  constructor(private loginService: LoginFormService,
              private httpService: AuthorizationsHttpServiceService,
              private router: Router,
              public loaderService: LoaderService) { 

  }

  ngOnInit() {
    this.loginForm = this.loginService.formBuild();
    alert(environment.production);
  }

  enter() {
    console.log("ENTER");
  }
  
  login(): void {
    this.error = null;
    this.httpService.login(this.loginForm).subscribe(
      (data: User) => {
        console.log("In login.component !"); // check athorization-http-service .pipe(tap)
        
        // this.router.navigate(["/contacts", "dashboard"]);
      },
      (error: HttpErrorResponse) => {
        this.error = error;
      });
  }

}
