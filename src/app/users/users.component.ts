import {Component, OnInit} from '@angular/core';

import {UsersService} from './users.service';

@Component({
    selector: 'users',
    templateUrl: 'users.template.html',
    providers: [UsersService],
    styles : [`
        .ng-touched.ng-invalid {border: 1px solid red; }
    `]
})
export class UsersComponent implements OnInit {
    
    users: any[];

    constructor(private _usersService: UsersService){
    }

    ngOnInit() {
        this._usersService.getUsers()
            .subscribe(
                    users => this.users = users
                );
    }

}