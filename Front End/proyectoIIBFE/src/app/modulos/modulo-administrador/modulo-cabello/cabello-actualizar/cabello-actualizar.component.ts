import { Component, OnInit } from '@angular/core';
import {ObjetosAvatarInterface} from "../../../../Interface/objetos-avatar-interface";

@Component({
  selector: 'app-cabello-actualizar',
  templateUrl: './cabello-actualizar.component.html',
  styleUrls: ['./cabello-actualizar.component.scss']
})
export class CabelloActualizarComponent implements OnInit {

  cabelloActualizar: ObjetosAvatarInterface = <ObjetosAvatarInterface> {};
  constructor() { }

  ngOnInit() {
  }

  actualizarcabello(objetoAct:ObjetosAvatarInterface) {
    console.log(objetoAct);
  }
}
