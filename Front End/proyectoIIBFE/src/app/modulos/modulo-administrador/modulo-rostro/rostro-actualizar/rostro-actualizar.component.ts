import { Component, OnInit } from '@angular/core';
import {ObjetosAvatarInterface} from "../../../../Interface/objetos-avatar-interface";

@Component({
  selector: 'app-rostro-actualizar',
  templateUrl: './rostro-actualizar.component.html',
  styleUrls: ['./rostro-actualizar.component.scss']
})
export class RostroActualizarComponent implements OnInit {

  rostroActualizar: ObjetosAvatarInterface = <ObjetosAvatarInterface> {};
  constructor() { }

  ngOnInit() {
  }

  actualizarRostro(objetoAct:ObjetosAvatarInterface) {
    console.log(objetoAct);
  }
}
