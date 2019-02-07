import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-main',
  templateUrl: './login-main.component.html',
  styleUrls: ['./login-main.component.scss']
})
export class LoginMainComponent implements OnInit {

  username:string;
  password:string;

  constructor() { }

  ngOnInit() {

  }

  logearse(){
    console.log("se ejecuto correctamente");
  }

}
