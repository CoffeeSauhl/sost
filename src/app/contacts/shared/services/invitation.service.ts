import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/user/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InvitationService {

  private user: User;

  constructor(private http: HttpClient) { }

  invite(inviteForm: FormGroup) {

    const user = window.localStorage.getItem(environment.storage.student);
    if (user) {
      this.user = JSON.parse(user);
      const sender = this.user.email;

      return this.http.post(environment.api.invite, {
        sender: sender,
        receiver: inviteForm.get('email').value
      });
    }
  }

  getList() {
    const user = window.localStorage.getItem(environment.storage.student);
    if (user) { // verify user is correct
      this.user = JSON.parse(user);

      return this.http.post(environment.api.getList, {
        student: user //Already JSON
      });
    }

  }

}
