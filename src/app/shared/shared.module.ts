import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Router, RouterModule} from '@angular/router';

import { NavBarComponent } from './nav-bar/navbar.component';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
     declarations: [
         NavBarComponent,
         SpinnerComponent
     ],
     imports: [
         FormsModule,
         ReactiveFormsModule,
         HttpModule,
         CommonModule,
         RouterModule
     ],
     exports: [
         NavBarComponent,
         SpinnerComponent
     ]
})
export class SharedModule{}