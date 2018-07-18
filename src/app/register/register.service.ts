﻿import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';

import {User} from '../_models/index';
import {environment} from "../../environments/environment";

@Injectable()
export class RegisterService {



  baseUrl = environment.baseUrl;

  constructor(private http: Http) {
  }

  singUpUser(user: User) {
    return this.http.post(this.baseUrl +`/sign-up/user`, user, new RequestOptions({ headers: new Headers({'content-type': 'application/json'})}))
      .toPromise()
      .then(response => response)
      .catch(this.handleError);
  }

  singUpAdmin(user: User) {
    return this.http.post(this.baseUrl +`/sign-up/admin`, user, new RequestOptions({ headers: new Headers({'content-type': 'application/json'})}))
      .toPromise()
      .then(response => response)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
