import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Response } from '@angular/http';

const users = [
  { id: 1, name: 'Pascal Precht', password: '@PascalPrecht', profession: 'test' },
  { id: 2, name: 'Christoph Burgdorf', password: '@cburgdorf', profession: 'test' },
  { id: 3, name: 'Thomas Burleson', password: '@thomasburleson', profession: 'test' },
  { id: 4, name: 'Dominic Elm', password: '@elmd_', profession: 'test' }
];


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: Http) {

  }
  getUsers(): Observable<Response> {
    const url = 'http://localhost:8085/listusers';
    return this.http.get(url);
  }

}
