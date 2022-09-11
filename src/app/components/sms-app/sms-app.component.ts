import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sms-app',
  templateUrl: './sms-app.component.html',
  styleUrls: ['./sms-app.component.css']
})
export class SmsAppComponent implements OnInit {
  public message: string = '';
  public maxCharCount:number = 200;
  public inputType:string = 'password'
  public amount:string = ''

  constructor() {}

  ngOnInit(): void {
  }

  showPassword(event:any):void{
    if(event.target.checked){
      this.inputType = 'text';
    }else{
      this.inputType = 'password'
    }
  };

}
