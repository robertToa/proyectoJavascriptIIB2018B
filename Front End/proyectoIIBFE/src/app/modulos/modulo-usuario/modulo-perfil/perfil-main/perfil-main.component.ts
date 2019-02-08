import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-main',
  templateUrl: './perfil-main.component.html',
  styleUrls: ['./perfil-main.component.scss']
})
export class PerfilMainComponent implements OnInit {

  link_avtar: string = "";
  constructor() { }

  ngOnInit() {
    //this.link_avtar = "/assets/imagenes/avataruser.png";
    this.link_avtar="http://190.96.111.126/bn/recursos/avatar/avatar2.png";
  }

}
