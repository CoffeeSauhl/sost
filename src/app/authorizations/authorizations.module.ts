import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorizationsRoutingModule } from './authorizations-routing.module';
import { AuthorizationsComponent } from './authorizations/authorizations.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import { RepeatedPasswordValidator } from './shared/validators/repeated-password.validator';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthorizationsHttpInterceptor } from './shared/interceptors/authorizations.interceptor';


@NgModule({
  declarations: [
    AuthorizationsComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    ToolbarComponent,
    RepeatedPasswordValidator
  ],
  exports: [
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    AuthorizationsRoutingModule,
    SharedModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthorizationsHttpInterceptor, multi: true}
  ]
})
export class AuthorizationsModule { }
