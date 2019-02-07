import { Component, OnInit } from '@angular/core';
import {ConsumidorDepartamentoInterface} from "../../../../Interface/consumidor-departamento-interface";

@Component({
  selector: 'app-departamento-gestion',
  templateUrl: './departamento-gestion.component.html',
  styleUrls: ['./departamento-gestion.component.scss']
})
export class DepartamentoGestionComponent implements OnInit {

  departamentosconsumidores: ConsumidorDepartamentoInterface[] = [];
  constructor() { }

  ngOnInit() {
  }

}
