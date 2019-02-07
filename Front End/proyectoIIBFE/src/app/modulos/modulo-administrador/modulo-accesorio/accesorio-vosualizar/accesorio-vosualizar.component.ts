import { Component, OnInit } from '@angular/core';
import {ObjetosAvatarInterface} from "../../../../Interface/objetos-avatar-interface";

@Component({
  selector: 'app-accesorio-vosualizar',
  templateUrl: './accesorio-vosualizar.component.html',
  styleUrls: ['./accesorio-vosualizar.component.scss']
})
export class AccesorioVosualizarComponent implements OnInit {

  accesorios: ObjetosAvatarInterface[] =[];
  constructor() { }

  ngOnInit() {
  }

}
