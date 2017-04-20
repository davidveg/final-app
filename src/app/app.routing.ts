import {Router, RouterModule} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {NewUserComponent} from './users/new.user.component';
import {PostsComponent} from './posts/posts.component';
import {UsersComponent} from './users/users.component';


export const routing = RouterModule.forRoot([
    { path: '' , component : HomeComponent},
    { path: 'posts' , component : PostsComponent},
    { path: 'users' , component : UsersComponent},
    { path: 'users/new', component : NewUserComponent},
    { path: '**' , component : HomeComponent}
]);