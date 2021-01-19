import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactDiscussionComponent } from './contact-discussion/contact-discussion.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactSearchComponent } from './contact-search/contact-search.component';
import { ContactsComponent } from './contacts/contacts.component';
import { GroupsRoutingModule } from './groups/groups-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ContactsComponent,
    ContactDiscussionComponent,
    ContactListComponent,
    ContactSearchComponent
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    GroupsRoutingModule,
    SharedModule
  ]
})
export class ContactsModule { }
