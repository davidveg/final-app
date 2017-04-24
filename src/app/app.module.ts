import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NewUserComponent } from './users/new.user.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { NavBarComponent } from './nav-bar/navbar.component';
import { PreventUnsavedChangesGuard } from './users/prevent-unsaved-changes-guard.service';

import {routing} from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NewUserComponent,
    HomeComponent,
    PostsComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing
  ],
  providers: [
    PreventUnsavedChangesGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
