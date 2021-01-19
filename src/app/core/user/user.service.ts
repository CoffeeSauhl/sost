import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: User;

  constructor() { 
    const user = window.localStorage.getItem(environment.storage.student);
    if (user) {
      this.user = JSON.parse(user);
    }
  }

  public setActive(user: User): void {
    this.user = user;
    window.localStorage.setItem(environment.storage.student, JSON.stringify(user));

    console.log("user : " + window.localStorage.getItem(environment.storage.student));
  }

  public get(): User {
    return this.user;
  }

  public has(): boolean {
    return !!(this.user);
  }
}
