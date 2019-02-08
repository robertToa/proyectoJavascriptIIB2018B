import { Component, OnInit } from '@angular/core';
import {ConsumidorInterface} from "../../../../Interface/consumidor-interface";
import {ComunidadInterface} from "../../../../Interface/comunidad-interface";

@Component({
  selector: 'app-miembro-main',
  templateUrl: './miembro-main.component.html',
  styleUrls: ['./miembro-main.component.scss']
})
export class MiembroMainComponent implements OnInit {

  textoBuscar: string = "";
  miembros: ConsumidorInterface [] = [];
  comunidad: ComunidadInterface =<ComunidadInterface>{};
  constructor() { }

  ngOnInit() {
    this.comunidad.id = 1;
  }

  BuscarMiembro(){
  }
}
