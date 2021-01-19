import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/user/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'sost-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {}

  disconnect() {
    if (this.userService.has) {
      window.localStorage.removeItem(environment.storage.student);
    }
  }

}
