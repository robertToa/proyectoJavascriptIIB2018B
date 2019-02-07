import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administrador-login',
  templateUrl: './administrador-login.component.html',
  styleUrls: ['./administrador-login.component.scss']
})
export class AdministradorLoginComponent implements OnInit {

  username: string = "";
  password: string = "";
  constructor() { }

  ngOnInit() {
  }

  logearse(formularioLogin){
    console.log(this.username+" "+this.password);
  }

}
