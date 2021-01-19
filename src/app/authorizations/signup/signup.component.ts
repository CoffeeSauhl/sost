import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ViewWillEnter } from '@ionic/angular';
import { AuthorizationsHttpServiceService } from '../shared/services/AuthorizationsHttp/authorizations-http-service.service';
import { LoaderService } from '../shared/services/loader.service';
import { RegisterFormServiceService } from './service/register-form-service.service';

class PackageBag {
  package: string = null;
}

@Component({
  selector: 'sost-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {

  public signupForm : FormGroup;
  public error : string;

  constructor(private formService: RegisterFormServiceService,
              private httpService: AuthorizationsHttpServiceService,
              private router: Router,
              public loaderService: LoaderService) { }

  ngOnInit() {
    this.signupForm = this.formService.formBuild();
  }

  register() {
    this.error = null;
    this.httpService.register(this.signupForm).subscribe(
      () => {
        this.router.navigate(["/auth", "login"]); // ???????????
      },
      (error: string) => {
        this.error = error;
      });
  }

}
