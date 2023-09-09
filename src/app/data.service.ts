import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  users: Array<any> = [];

  constructor() { }

  getUsers() {
    return this.users;
  }

  setUsers(users: Array<any>) {
    this.users = users;
  }
}
