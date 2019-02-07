import { Component, OnInit } from '@angular/core';
import {ObjetosAvatarInterface} from "../../../../Interface/objetos-avatar-interface";

@Component({
  selector: 'app-accesorio-crear',
  templateUrl: './accesorio-crear.component.html',
  styleUrls: ['./accesorio-crear.component.scss']
})
export class AccesorioCrearComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  crearAccesorio(objeto: ObjetosAvatarInterface){
    console.log(objeto);
  }
}
