import { Directive, Injectable } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn:'root'
})

@Directive({
  selector: '[sostRepeatedPassword]',
  providers: [{ provide: NG_VALIDATORS, useExisting: RepeatedPasswordValidator, multi: true}]
})
export class RepeatedPasswordValidator implements Validator {
  private subscription: Subscription;

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null { // + écouteur sur psw et pswConf valueChange
  
    if (!control.dirty) {
      
    if (this.subscription) {
        this.subscription.unsubscribe();
        this.subscription = null;
      }
    
      return null;
    }
    
    if (!this.subscription) {
      this.subscription = control.root.get('password').valueChanges.subscribe(() => control.updateValueAndValidity());
    }
    console.log("Password : " + control.root.get('password').value);
    console.log("Password2 : " + control.value);

    return control.root.get('password').value !== control.value ? {'confirm' : true } : null;
  }
}
