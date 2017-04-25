
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {

    private _url = 'https://jsonplaceholder.typicode.com/posts/';
    
    constructor(private _http: Http){}

    getPosts() : Observable<any> {
        return this._http.get(this._url)
        .map(res => res.json());
    }


}