import { Component, OnInit } from '@angular/core';
import {ObjetosAvatarInterface} from "../../../../Interface/objetos-avatar-interface";

@Component({
  selector: 'app-vestimenta-visualizar',
  templateUrl: './vestimenta-visualizar.component.html',
  styleUrls: ['./vestimenta-visualizar.component.scss']
})
export class VestimentaVisualizarComponent implements OnInit {

  vestimentas: ObjetosAvatarInterface[] =[];

  constructor() { }

  ngOnInit() {
  }

}
