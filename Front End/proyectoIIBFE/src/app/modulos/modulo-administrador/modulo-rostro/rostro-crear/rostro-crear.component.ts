import { Component, OnInit } from '@angular/core';
import {ObjetosAvatarInterface} from "../../../../Interface/objetos-avatar-interface";

@Component({
  selector: 'app-rostro-crear',
  templateUrl: './rostro-crear.component.html',
  styleUrls: ['./rostro-crear.component.scss']
})
export class RostroCrearComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  crearRostro(objeto: ObjetosAvatarInterface){
    console.log(objeto);
  }
}
