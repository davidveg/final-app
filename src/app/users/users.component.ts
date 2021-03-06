import {Component, OnInit} from '@angular/core';

import {UsersService} from './users.service';

@Component({
    selector: 'users',
    templateUrl: 'users.template.html',
    providers: [UsersService],
    styles : [`
        .ng-touched.ng-invalid {border: 1px solid red; }
        .clickable { cursor: pointer;}
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

    deleteUser(user){
		if (confirm("Are you sure you want to delete " + user.name + "?")) {
			var index = this.users.indexOf(user)
			// Here, with the splice method, we remove 1 object
            // at the given index.
            this.users.splice(index, 1);

			this._usersService.deleteUser(user.id)
				.subscribe(null, 
					err => {
						alert("Could not delete the user.");
                        // Revert the view back to its original state
                        // by putting the user object at the index
                        // it used to be.
						this.users.splice(index, 0, user);
					});
		}
	}

}