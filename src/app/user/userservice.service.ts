import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  users = []

  constructor(private http: HttpClient) { }

  createUser(User: Object) {
    this.users.push(User);
  }

  getUsers() {
    return this.users;
  }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }
}
