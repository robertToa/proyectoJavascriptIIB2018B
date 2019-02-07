import { Component, OnInit } from '@angular/core';
import {ObjetosAvatarInterface} from "../../../../Interface/objetos-avatar-interface";

@Component({
  selector: 'app-accesorio-actualizar',
  templateUrl: './accesorio-actualizar.component.html',
  styleUrls: ['./accesorio-actualizar.component.scss']
})
export class AccesorioActualizarComponent implements OnInit {

  accesorioActualizar: ObjetosAvatarInterface = <ObjetosAvatarInterface> {};
  constructor() { }

  ngOnInit() {
  }

  actualizarAccesorio(objetoAct:ObjetosAvatarInterface) {
    console.log(objetoAct);
  }

}
