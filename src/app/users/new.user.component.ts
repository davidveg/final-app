import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';

import { FormComponent } from './prevent-unsaved-changes-guard.service';
import { Router } from '@angular/router';
import { UsersService } from './users.service';
import { validateEmail } from './email.validator';

@Component({
    selector : 'newuser',
    templateUrl : 'new-user.template.html',
    styles : [`
        .form-control.ng-touched.ng-invalid {border: 1px solid red;} 
    `],
    providers : [UsersService]
})
export class NewUserComponent implements FormComponent {

    userForm : FormGroup;

    isSaving = false;

    hasUnsavedChanges() {
        return this.userForm.dirty && !this.isSaving
    }

    constructor(private _fb : FormBuilder, private _usersService: UsersService, private _router : Router){
    }

    ngOnInit() {
        this.userForm = this._fb.group({
            name: ['', Validators.compose([
                Validators.required])], 
            email: ['', Validators.compose([
                Validators.required,
                validateEmail,
                ])],
            phone: ['', Validators.compose([
                Validators.required])],
            address : this._fb.group({
                street: ['', Validators.compose([
                    Validators.required])],
                suite: ['', Validators.compose([])],
                city: ['', Validators.compose([
                    Validators.required])],
                zipcode: ['', Validators.compose([
                    Validators.required])]
            }) 
        })
    }

    save(user) {
        this.isSaving = true;
        this._usersService.createUser(user)
            .subscribe(data => {
                console.log(data);
                this.userForm.markAsPristine();
        });

        this._router.navigate(['/users']);
    }
    
}