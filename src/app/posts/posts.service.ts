
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';

import {Post} from './post';

@Injectable()
export class PostsService {

    private _url = 'https://jsonplaceholder.typicode.com/posts/';
    
    constructor(private _http: Http){}

    getPosts(filter?) : Observable<any> {
        var url = this._url;
        
        if(filter && filter.userId)
            url+= "?userId=" + filter.userId;

        return this._http.get(url)
            .map(res => res.json());
    }

    getCommnents(post) {
        return this._http.get(this._url + post.id + '/comments')
            .map(res => res.json())
            .debounceTime(10000);
    }


}