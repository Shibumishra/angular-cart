import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-user',
  templateUrl: './auth-user.component.html',
  styleUrls: ['./auth-user.component.css']
})
export class AuthUserComponent implements OnInit {
  public isLogginedIn: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  public login():void{
    this.isLogginedIn = true;
  }

  public logOut():void{
    this.isLogginedIn = false;
  }
}
