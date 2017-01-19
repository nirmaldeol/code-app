import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class UsersService {

  private _url = "https://jsonplaceholder.typicode.com/users";

  constructor(private _http: Http) { }

  getAllUsers() {
    return this._http.get(this._url)
      .map(res =>
        res.json()
      );
  }

  createUser(user){
    return this._http.post(this._url,user).map(res=> res.json());
  }

  getOneUser(id){
    return this._http.get(this._url +'/' + id).map(res=> res.json());
  }

   editUser(user,id){
    return this._http.put(this._url+'/'+id ,user).map(res=> res.json());
  }

    deleteUser(id){
    return this._http.delete(this._url+'/'+id).map(res=> res.json());
  }



}
