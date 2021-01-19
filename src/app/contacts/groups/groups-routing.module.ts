import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroupDiscussionComponent } from './group-discussion/group-discussion.component';
import { GroupFormComponent } from './group-form/group-form.component';
import { GroupsComponent } from './groups/groups.component';

const routes: Routes = [
  {
    path:'',
    component: GroupsComponent,
    children: [
      {
        path: 'discussion/:id',
        component: GroupDiscussionComponent
      },
      {
        path: 'new',
        component: GroupFormComponent
      },
      {
        path:'**',
        redirectTo: 'form'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupsRoutingModule { }
