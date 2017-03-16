import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Angular2TokenService } from 'angular2-token';

import { AuthGuard } from './auth-guard';
import { HomeLibraryRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewUserComponent } from './new-user/new-user.component';
import { NewUserFormComponent } from './new-user-form/new-user-form.component';
import { NewUserSessionComponent } from './new-user-session/new-user-session.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NewUserComponent,
    NewUserComponent,
    NewUserFormComponent,
    NewUserSessionComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HomeLibraryRoutingModule
  ],
  providers: [Angular2TokenService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
