import {Router, RouterModule} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {UserComponent} from './users/user.component';
import {PostsComponent} from './posts/posts.component';
import {UsersComponent} from './users/users.component';
import {PreventUnsavedChangesGuard} from './users/prevent-unsaved-changes-guard.service';

export const routing = RouterModule.forRoot([
    { path: '' , component : HomeComponent},
    { path: 'posts' , component : PostsComponent},
    { path: 'users' , component : UsersComponent},
     { path: 'users/:id' , component : UserComponent},
    { path: 'users/new', component : UserComponent, canDeactivate : [PreventUnsavedChangesGuard]},
    { path: '**' , component : HomeComponent}
]);