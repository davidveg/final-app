import {Component, OnInit} from '@angular/core';

import {Comment} from './comment';
import {Post} from './post';
import {User} from '../users/user';
import {UsersService} from '../users/users.service';
import {PostsService} from './posts.service';
import {SpinnerComponent} from '../spinner/spinner.component';
import {PaginationComponent} from './pagination.component';
import * as _ from 'underscore';

@Component({
    selector: 'posts',
    templateUrl: 'posts.template.html',
    providers : [PostsService, UsersService],
    styles : [`
    .posts	li	{ cursor: default;  }
    .posts	li:hover    {	background:	#ecf0f1;	}	
    .list-group-item.active,	
    .list-group-item.active:hover,	
    .list-group-item.active:focus	{	
        background-color:	#ecf0f1;
        border-color:	#ecf0f1;	
        color:	#2c3e50;
    }
    .thumbnail { border-radius : 100%;}
    .media-heading { font-weight : bold;}
    `]
})
export class PostsComponent implements OnInit {

    users : User[] = [];
    posts : Post[] = [];
    pagedPosts : Post[] = [];
    comments : Comment[];
    isLoadingPosts;
    isLoadingComments;
    showDetail = false;
    post : Post;
    pageSize = 10;

    constructor(private _postService: PostsService, private _usersService: UsersService){
    }

    ngOnInit() {
        this.loadUsers();
        this.loadPosts();
    }

    show(post) {
        this.isLoadingComments = true;
        this.showDetail = true;
        this.post = post;
        this._postService.getCommnents(post)
            .subscribe(
                comments => this.comments = comments,
                null,
                () => {this.isLoadingComments = false }
            );
    }

    filterPosts(filter) {
        this.showDetail = false;
        this.post = null;
        this.loadPosts(filter);
    }

    onPageChanged(page) {
        var startIndex = (page - 1) * this.pageSize;
        this.pagedPosts = _.take(_.rest(this.posts, startIndex), this.pageSize);
	}

    private loadUsers(){
        this._usersService.getUsers()
            .subscribe(
                users => this.users = users,
                null // error handling
            );
    }

    private loadPosts(filter?) {
        this.isLoadingPosts = true;
        this._postService.getPosts(filter)
            .subscribe(
                posts => {
                    this.posts = posts;
                    this.pagedPosts = _.take(this.posts,this.pageSize);
                },
                null,
                () => { this.isLoadingPosts = false; });
    }
}