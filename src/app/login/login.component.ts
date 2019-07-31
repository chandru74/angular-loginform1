import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  submitted: boolean = false;
  errMessage;
  username;
  password;
  flag = 0;
  constructor(private router: Router, public loginservice: LoginService) { }

  onSubmit() {

    this.loginservice.getdata().then(data => {
      console.log("data", data)
      for (let i = 0; i < data.length; i++) {
        if (data[i].username == this.username && data[i].password == this.password) {
          this.submitted = true;

        }
        else {
          this.flag = 1
        }
      }
    })
    if (this.flag == 1) {
      this.submitted = false;
      this.errMessage = "Invalid username or Password"
    }
    // if (this.username == "admin" && this.password == "admin") {
    //   this.submitted = true;
    // }
    // else {
    //   this.submitted = false;
    //   this.errMessage = "Invalid username or Password"
    // }

  }

  signUp() {
    this.router.navigate(['/signup'])
  }
  addme() {
    this.loginservice.getdata().then(data => data.push({ username: "chandru", password: "12345" }))
  }
}