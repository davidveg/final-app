
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { User } from './user';

@Injectable()
export class UsersService {

    private _url = 'https://jsonplaceholder.typicode.com/users/';
    user : User;
    
    constructor(private _http: Http){}

    getUsers() : Observable<any> {
        return this._http.get(this._url)
        .map(res => res.json());
    }

    getUser(id) : Observable<User>{
        return this._http.get(this._url + id)
        .map(res => res.json());
    }

    createUser(user : User) : Observable<User> {
        return this._http.post(this._url, JSON.stringify(user))
        .map(res => res.json());
    }

    updateUser(user : User) : Observable<User> {
        return this._http.put(this._url + user.id, JSON.stringify(user))
        .map(res => res.json());
    }

    deleteUser(user : User) : Observable<User> {
        return this._http.delete(this._url + user.id)
        .map(res => res.json());
    }
}