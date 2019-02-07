import { Component, OnInit } from '@angular/core';
import {ObjetosAvatarInterface} from "../../../../Interface/objetos-avatar-interface";

@Component({
  selector: 'app-vestimenta-actualizar',
  templateUrl: './vestimenta-actualizar.component.html',
  styleUrls: ['./vestimenta-actualizar.component.scss']
})
export class VestimentaActualizarComponent implements OnInit {

  vestimentaActualizar: ObjetosAvatarInterface = <ObjetosAvatarInterface> {};

  constructor() { }

  ngOnInit() {
  }

  actualizarVestimenta(objetoAct:ObjetosAvatarInterface) {
    console.log(objetoAct);
  }
}
