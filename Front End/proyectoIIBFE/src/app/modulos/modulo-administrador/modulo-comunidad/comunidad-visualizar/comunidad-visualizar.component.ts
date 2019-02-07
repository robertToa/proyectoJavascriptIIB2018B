import { Component, OnInit } from '@angular/core';
import {ComunidadInterface} from "../../../../Interface/comunidad-interface";

@Component({
  selector: 'app-comunidad-visualizar',
  templateUrl: './comunidad-visualizar.component.html',
  styleUrls: ['./comunidad-visualizar.component.scss']
})
export class ComunidadVisualizarComponent implements OnInit {

  comunidades: ComunidadInterface[] = [];
  constructor() { }

  ngOnInit() {
  }

}
