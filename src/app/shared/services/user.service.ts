import { Injectable } from '@angular/core';
import { Http,  Response } from '@angular/http';
import {User} from "../models/user";

@Injectable()
export class UserService {
    constructor(private http: Http) { }

    create(user: User) {
        return this.http.put('/api/v1/user/register', user).map((response: Response) => response.json());
    }


}