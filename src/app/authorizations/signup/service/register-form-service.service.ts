import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RepeatedPasswordValidator } from '../../shared/validators/repeated-password.validator';

@Injectable({
  providedIn: 'root'
})
export class RegisterFormServiceService {

  constructor(private fb: FormBuilder,
              private repeatedPasswordValidator : RepeatedPasswordValidator) { }

  formBuild() : FormGroup {
    return this.fb.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      username: ['', [
        Validators.required,
        Validators.maxLength(15),
      ]],
      password: ['', [
        Validators.required,
        Validators.maxLength(20),
      ]],
      passwordConf: ['', [
        this.repeatedPasswordValidator
      ]]
    });
  }
}
