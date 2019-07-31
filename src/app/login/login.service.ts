import { Injectable } from '@angular/core';
@Injectable()
export class LoginService {
  data = [{ username: "admin", password: "admin" },
  { username: "admin1", password: "admin1" },
  { username: "admin2", password: "admin2" },
  { username: "admin3", password: "admin3" },
  { username: "admin4", password: "admin4" }]

  constructor() { }

  getdata() {
    return Promise.resolve(this.data)
  }
  getshow(){
    return this.data
  }
}