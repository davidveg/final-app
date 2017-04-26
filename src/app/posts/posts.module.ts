import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Router, RouterModule} from '@angular/router';

import { PostsComponent } from './posts.component';
import { PaginationComponent } from './pagination.component';

import { SharedModule } from  '../shared/shared.module';

@NgModule({
     declarations: [
         PostsComponent,
         PaginationComponent,
     ],
     imports: [
         FormsModule,
         ReactiveFormsModule,
         HttpModule,
         CommonModule,
         SharedModule,
         RouterModule
     ],
     exports: [
         PostsComponent,
         PaginationComponent,
     ]
})
export class PostsModule{}