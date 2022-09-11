import { Component, OnInit } from '@angular/core';


interface User {
  name: string;
  email: string;
  password: string;
  designation: string;
  bio: string;
  terms: boolean;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public user: User = {
    name: '',
    email: '',
    password: '',
    designation: '',
    bio: '',
    terms: false
  };
  public userData: any = [];
  constructor() { }

  ngOnInit(): void {
  }

  public submitRegister(): void {
    this.userData.push(this.user);
    console.log(this.userData);
  }

}
