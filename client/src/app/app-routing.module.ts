import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewUserComponent } from './new-user/new-user.component';
import { NewUserSessionComponent } from './new-user-session/new-user-session.component';

const routes: Routes = [
  { path: 'sign-up', component: NewUserComponent },
  { path: 'sign-in', component: NewUserSessionComponent },
  { path: '', component: NewUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

export class HomeLibraryRoutingModule { }