import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { PostsModule } from './posts/posts.module';
import { UsersModule } from './users/users.module';
import { SharedModule } from  './shared/shared.module';
import { Router, RouterModule} from '@angular/router';
import { PreventUnsavedChangesGuard } from './users/prevent-unsaved-changes-guard.service';

import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing,
    HomeModule,
    PostsModule,
    UsersModule,
    SharedModule
  ],
  providers: [
    PreventUnsavedChangesGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
