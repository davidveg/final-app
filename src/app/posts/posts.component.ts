import {Component, OnInit} from '@angular/core';

import {PostsService} from './posts.service';

@Component({
    selector: 'posts',
    templateUrl: 'posts.template.html',
    providers : [PostsService]
})
export class PostsComponent implements OnInit {

    posts : any[];

    isLoading = true;

    constructor(private _postService: PostsService){
    }

    ngOnInit() {
        this._postService.getPosts()
            .subscribe(
                posts => this.posts = posts,
                null,
                () => { this.isLoading = false; });
    }

}