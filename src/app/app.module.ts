import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { PostsModule } from './posts/posts.module';
import { UsersModule } from './users/users.module';
import { SharedModule } from  './shared/shared.module';
import { Router, RouterModule} from '@angular/router';

import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    HomeModule,
    PostsModule,
    UsersModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
