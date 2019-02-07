import { Component, OnInit } from '@angular/core';
import {ObjetosAvatarInterface} from "../../../../Interface/objetos-avatar-interface";

@Component({
  selector: 'app-vestimenta-crear',
  templateUrl: './vestimenta-crear.component.html',
  styleUrls: ['./vestimenta-crear.component.scss']
})
export class VestimentaCrearComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  crearVestimenta(objeto: ObjetosAvatarInterface){
    console.log(objeto);
  }

}
