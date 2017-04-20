
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {

    private _url = 'https://jsonplaceholder.typicode.com/users';

    constructor(private _http: Http){}


    getUsers() : Observable<any> {
        return this._http.get(this._url)
        .map(res => res.json());
    } 
}