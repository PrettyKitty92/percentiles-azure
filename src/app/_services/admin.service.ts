import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';
import {User} from '../_models';
import {environment} from "../../environments/environment";

@Injectable()
export class AdminService {

  queryUsername = '?name=';
  queryOldAdmin = '?oldAdmin=';
  queryNewAdmin = '&newAdmin=';

  baseUrl = environment.baseUrl;

  constructor(private http: Http) {
  }

  allUsers(): Promise<User[]> {
    const url = this.baseUrl + `/admin/users`;
    return this.http.get(url, this.getOptions())
      .toPromise()
      .then(response => response.json() as User[])
      .catch(this.handleError);
  }

  userByName(username: String) {
    const url = this.baseUrl +`/admin/users/user`;
    return this.http.get(url + this.queryUsername + username, this.getOptions())
      .toPromise()
      .then(response => response.json() as User)
      .catch(this.handleError);
  }

  deleteUser(username: string) {
    const url = this.baseUrl +`/admin/users/user/delete`;
    return this.http.delete(url + this.queryUsername + username, this.getOptions())
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  /*******************ADMIN8******/

  allAdmins() {
    const url = this.baseUrl +`/admin/admins`;
    return this.http.get(url, this.getOptions())
      .toPromise()
      .then(response => response.json() as User[])
      .catch(this.handleError);
  }

  adminByName(username: String) {
    const url =this.baseUrl +`/admin/admins/admin`;
    return this.http.get(url + this.queryUsername + username, this.getOptions())
      .toPromise()
      .then(response => response.json() as User)
      .catch(this.handleError);
  }

  deleteAdmin(username: string) {
    const url =this.baseUrl + `/admin/admins/admin/delete`;
    return this.http.delete(url + this.queryUsername + username, this.getOptions())
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  updateAdmin(name: String, newAdminData: User) {
    console.log(name);
    console.log(newAdminData);
    const url =this.baseUrl + `/admin/admins/admin/edit`;
    return this.http.post(url + this.queryUsername + name, newAdminData, this.getOptions())
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  updateAdmin2(newAdminData: User) {
    console.log(name);
    console.log(newAdminData);
    const url = this.baseUrl +`/admin/admins/admin/edit2`;
    return this.http.post(url, newAdminData, this.getOptions())
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  private getOptions(): RequestOptions {
    const re = /"/gi;
    const headers = new Headers({
      'content-type': 'application/json',
      'authorization': localStorage.getItem('authToken').replace(re, '')
    });
    return new RequestOptions({headers: headers});
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


}
