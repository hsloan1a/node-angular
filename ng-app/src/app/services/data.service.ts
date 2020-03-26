import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'; // import {Http, Headers } from '@angular/http'
import {Item} from '../item';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private http: HttpClient) { }

  getToDoItems() {
    return this.http.get<Item[]>('http://localhost:3001/items')
            .pipe(map(res => (

              res || [])
              ));
  }

  addToDoItem(newItem) {
    const headers = new HttpHeaders();
    headers.append('Context-Type', 'application/json');

    return this.http.post('http://localhost:3001/item', newItem)
    .pipe(map(res => res || [] ));
  }

  updateToDoItem(newItem) {


    return this.http.put('http://localhost:3001/item/' + newItem._id, newItem)
    .pipe(map(res => res || []));

  }

  deleteToDoItem(id) {
    return this.http.delete('http://localhost:3001/item/' + id)
    .pipe(map(res => res || []));

  }
}
