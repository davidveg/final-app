import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';

import { FormComponent } from './prevent-unsaved-changes-guard.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from './users.service';
import { validateEmail } from './email.validator';

import { User } from './user';

@Component({
    selector : 'newuser',
    templateUrl : 'user.template.html',
    styles : [`
        .form-control.ng-touched.ng-invalid {border: 1px solid red;} 
    `],
    providers : [UsersService]
})
export class UserComponent implements  FormComponent, OnInit {

    userForm : FormGroup;
    public user = new User();
    isSaving = false;
    title : string;

    hasUnsavedChanges() {
        return this.userForm.dirty && !this.isSaving
    }

    constructor(private _fb : FormBuilder, private _usersService: UsersService, private _router : Router, private _route: ActivatedRoute){
    }

    ngOnInit() {
       var id;
       this._route.params.subscribe(params => {
            id = Number.parseInt(params['id']);
       });
       this.title = id? "Edit User" : "Add New User";
       
       if(id) {
            this._usersService.getUser(id)
                .subscribe(data => {
                    this.user = data;
                    this.userForm.get("name").setValue(data.name);
                    this.userForm.get("email").setValue(data.email);
                    this.userForm.get("phone").setValue(data.phone);
                    this.userForm.get("address").get("street").setValue(data.address.street);
                    this.userForm.get("address").get("suite").setValue(data.address.suite);
                    this.userForm.get("address").get("city").setValue(data.address.city);
                    this.userForm.get("address").get("zipcode").setValue(data.address.zipcode);
                },
                response => {
                    if(response.status == 404) {
                        this._router.navigate(['/NotFound']);
                    }
                });
       }

        this.userForm = this._fb.group({
            name: [this.user.name, Validators.compose([
                Validators.required])], 
            email: [this.user.email, Validators.compose([
                Validators.required,
                validateEmail,
                ])],
            phone: [this.user.phone, Validators.compose([
                Validators.required])],
            address : this._fb.group({
                street: [this.user.address.street, Validators.compose([
                    Validators.required])],
                suite: [this.user.address.suite, Validators.compose([])],
                city: [this.user.address.city, Validators.compose([
                    Validators.required])],
                zipcode: [this.user.address.zipcode, Validators.compose([
                    Validators.required])]
            }) 
        });
    }

    save() {
        this.isSaving = true;
        var result;
        if(this.user.id)
            result = this._usersService.updateUser(this.user);
        else
            result = this._usersService.createUser(this.user);
        
        result.subscribe(data => {
                this.userForm.markAsPristine();
            });
        this._router.navigate(['/users']);
    }
    
}