import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
    selector : 'newuser',
    templateUrl : 'new-user.template.html',
    styles : [`
        .form-control.ng-touched.ng-invalid {border: 1px solid red;} 
    `]
})
export class NewUserComponent {

    userForm : FormGroup;

    constructor(private _fb : FormBuilder){
        
    }

    ngOnInit() {
        this.userForm = this._fb.group({
            name: ['', Validators.compose([
                Validators.required])], 
            email: ['', Validators.compose([
                Validators.required])],
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
        console.log(this.userForm);
    }
}