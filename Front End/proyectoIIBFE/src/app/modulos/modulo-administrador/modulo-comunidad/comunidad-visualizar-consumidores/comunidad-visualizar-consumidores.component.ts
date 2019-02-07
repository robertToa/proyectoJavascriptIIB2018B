import { Component, OnInit } from '@angular/core';
import {ConsumidorInterface} from "../../../../Interface/consumidor-interface";

@Component({
  selector: 'app-comunidad-visualizar-consumidores',
  templateUrl: './comunidad-visualizar-consumidores.component.html',
  styleUrls: ['./comunidad-visualizar-consumidores.component.scss']
})
export class ComunidadVisualizarConsumidoresComponent implements OnInit {

  miembrosComunidad: ConsumidorInterface[] = [];
  constructor() { }

  ngOnInit() {
  }

}
