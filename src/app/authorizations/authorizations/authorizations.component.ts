import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/user/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'sost-authorizations',
  templateUrl: './authorizations.component.html',
  styleUrls: ['./authorizations.component.scss'],
})
export class AuthorizationsComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {}

  disconnect() {
    if (this.userService.has) {
      window.localStorage.removeItem(environment.storage.student);
    }
  }

}
