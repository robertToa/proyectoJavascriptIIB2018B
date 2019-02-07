import { Component, OnInit } from '@angular/core';
import {DepartamentoInterface} from "../../../../Interface/departamento-interface";

@Component({
  selector: 'app-departamento-visualizar',
  templateUrl: './departamento-visualizar.component.html',
  styleUrls: ['./departamento-visualizar.component.scss']
})
export class DepartamentoVisualizarComponent implements OnInit {

  departamentos: DepartamentoInterface[] = [];
  constructor() { }

  ngOnInit() {
  }

  eliminarDepartamento(id: number | string){

  }

}
