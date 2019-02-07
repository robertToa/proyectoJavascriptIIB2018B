import { Component, OnInit } from '@angular/core';
import {ObjetosAvatarInterface} from "../../../../Interface/objetos-avatar-interface";

@Component({
  selector: 'app-rostro-visualizar',
  templateUrl: './rostro-visualizar.component.html',
  styleUrls: ['./rostro-visualizar.component.scss']
})
export class RostroVisualizarComponent implements OnInit {

  rostros: ObjetosAvatarInterface[] =[];
  constructor() { }

  ngOnInit() {
  }

}
