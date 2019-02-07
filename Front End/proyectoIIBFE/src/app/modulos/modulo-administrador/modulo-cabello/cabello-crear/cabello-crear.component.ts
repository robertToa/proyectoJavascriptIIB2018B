import { Component, OnInit } from '@angular/core';
import {ObjetosAvatarInterface} from "../../../../Interface/objetos-avatar-interface";

@Component({
  selector: 'app-cabello-crear',
  templateUrl: './cabello-crear.component.html',
  styleUrls: ['./cabello-crear.component.scss']
})
export class CabelloCrearComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  crearCabello(objeto: ObjetosAvatarInterface){
    console.log(objeto);
  }

}
