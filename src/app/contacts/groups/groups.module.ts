import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupsRoutingModule } from './groups-routing.module';
import { GroupDiscussionComponent } from './group-discussion/group-discussion.component';
import { GroupsComponent } from './groups/groups.component';
import { GroupFormComponent } from './group-form/group-form.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    GroupsComponent,
    GroupDiscussionComponent,
    GroupFormComponent
  ],
  imports: [
    CommonModule,
    GroupsRoutingModule,
    SharedModule
  ]
})
export class GroupsModule { }
