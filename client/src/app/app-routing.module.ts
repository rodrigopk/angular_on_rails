import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth-guard';
import { BookListComponent } from './book-list/book-list.component';
import { HomeComponent } from './home/home.component';
import { NewUserComponent } from './new-user/new-user.component';
import { NewUserSessionComponent } from './new-user-session/new-user-session.component';
import { NewBookComponent } from './new-book/new-book.component';

const routes: Routes = [
  { path: 'sign-up', component: NewUserComponent },
  { path: 'sign-in', component: NewUserSessionComponent },
  { path: '', component: BookListComponent },
  { path: 'new-book', component: NewBookComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

export class HomeLibraryRoutingModule { }