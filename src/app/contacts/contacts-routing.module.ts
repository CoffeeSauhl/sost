import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactDiscussionComponent } from './contact-discussion/contact-discussion.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactSearchComponent } from './contact-search/contact-search.component';
import { ContactsComponent } from './contacts/contacts.component';

const routes: Routes = [
  {
    path: '',
    component: ContactsComponent,
    children: [
      {
        path: 'discussion/:id',
        component: ContactDiscussionComponent
      },
      {
        path: 'dashboard',
        component: ContactListComponent
      },
      {
        path: 'search',
        component: ContactSearchComponent
      },
      {
        path:'groups',
        loadChildren: () => import('./groups/groups.module').then(m=>m.GroupsModule)
      },
      {
        path:'**',
        redirectTo: 'list'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
