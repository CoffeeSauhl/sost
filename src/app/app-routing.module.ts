import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthorizationsComponent } from './authorizations/authorizations/authorizations.component';
import { AnonymousGuard } from './shared/anonymous.guard';
import { LoggedInGuard } from './shared/logged-in.guard';

const routes: Routes = [
  {
    path:'auth',
    canActivate: [AnonymousGuard],
    loadChildren: () => import('./authorizations/authorizations.module').then(m => m.AuthorizationsModule)
  },
  {
    path:'contacts',
    canActivate: [LoggedInGuard],
    loadChildren: () => import('./contacts/contacts.module').then(m=>m.ContactsModule),
  },
  {
    path:'**',
    redirectTo: 'auth'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
