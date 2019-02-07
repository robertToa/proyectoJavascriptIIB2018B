import { Component, OnInit } from '@angular/core';
import {ObjetosAvatarInterface} from "../../../../Interface/objetos-avatar-interface";

@Component({
  selector: 'app-cabello-visualizar',
  templateUrl: './cabello-visualizar.component.html',
  styleUrls: ['./cabello-visualizar.component.scss']
})
export class CabelloVisualizarComponent implements OnInit {

  cabellos: ObjetosAvatarInterface[] =[];
  constructor() { }

  ngOnInit() {
  }

}
