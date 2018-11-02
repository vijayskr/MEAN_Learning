import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: Http) { }

  gettodoItems() {
    return this.http.get('http://localhost:3000/items')
      .pipe(map(res => res.json()));
  }

  adtodoItem(newItem) {
    const headers = new Headers;

    headers.append('Content-Type', 'application/json');

    return this.http.post('http://localhost:3000/item', newItem, {headers: headers})
      .pipe(map(res => res.json()));
  }

  updatetodoItem(newItem) {
    const headers = new Headers;

    headers.append('Content-Type', 'application/json');

    return this.http.put('http://localhost:3000/item' + newItem._id, newItem, {headers: headers})
    .pipe(map(res => res.json()));
  }

  deletetoItem(id) {
    return this.http.delete('http://localhost:3000/item' + id)
    .pipe(map(res => res.json()));
  }
}
