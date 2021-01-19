import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/core/user/user.service';
import { environment } from 'src/environments/environment';
import { InvitationService } from '../shared/services/invitation.service';

@Component({
  selector: 'sost-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent implements OnInit {

  public title: string;

  public inviteForm: FormGroup
  public error: HttpErrorResponse;



  public students = [ {name: "Boule", validated:false},
                      {name: "Bill", validated:false},
                      {name: "Phil", validated:false},
                      {name: "Jack", validated:false},
                      {name: "Penelope", validated:false}];

  constructor(private invitationService: InvitationService,
              private fb: FormBuilder,
              private userService: UserService) { }

  ngOnInit() {
    this.title = "Dashboard test."
    this.inviteForm = this.fb.group({
      email: ['',[
        Validators.required,
        Validators.email
      ]]
    });

    this.getContactList();

  }

  suppress(i: number): void {
    //const ind = this.students.indexOf(student);
    //this.students.splice(ind, 1);
    this.students.splice(i,1);
  }

  validate(student): void {
    student.validated = true;
  }

  sendInviation(): void {
    this.error = null;
    this.invitationService.invite(this.inviteForm).subscribe(
      () => {},
      () => {}
    );
  }

  getContactList() {
    this.error = null;
    this.invitationService.getList().subscribe(
      () => {},
      () => {}
    )
  }

  disconnect() {
    if (this.userService.has) {
      window.localStorage.removeItem(environment.storage.student);
    }
  }

  invite() {
    
  }

}
