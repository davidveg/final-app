import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Router, RouterModule} from '@angular/router';

import { HomeComponent } from './home.component';
import { SharedModule } from  '../shared/shared.module';

@NgModule({
     declarations: [
         HomeComponent,
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
         HomeComponent
    ]
})
export class HomeModule{}