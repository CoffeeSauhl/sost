import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private register: boolean;
  private login: boolean;

  constructor() { }

  getRegister(): boolean {
    return this.register;
  }

  setRegister(bool: boolean): void {
    this.register = bool;
  }

  getLogin(): boolean {
    return this.login;
  }

  setLogin(bool: boolean): void {
    this.login = bool;
  }
}
