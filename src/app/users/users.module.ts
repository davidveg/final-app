import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Router, RouterModule} from '@angular/router';

import { UsersComponent } from './users.component';
import { UserComponent } from './user.component';

import { SharedModule } from  '../shared/shared.module';

@NgModule({
     declarations: [
         UsersComponent,
         UserComponent,
     ],
     imports: [
         FormsModule,
         ReactiveFormsModule,
         HttpModule,
         CommonModule,
         SharedModule,
         RouterModule
     ],
     exports : [
         UsersComponent,
         UserComponent,
     ]
})
export class UsersModule{}