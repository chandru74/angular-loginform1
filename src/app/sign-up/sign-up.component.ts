import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  name;
  email;
  username;
  password;
  submitted:boolean=false;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    this.submitted=true;
    console.log("t")
  
  }

}