import { Component, OnInit } from '@angular/core';
import {DepartamentoInterface} from "../../../../Interface/departamento-interface";

@Component({
  selector: 'app-departamento-crear',
  templateUrl: './departamento-crear.component.html',
  styleUrls: ['./departamento-crear.component.scss']
})
export class DepartamentoCrearComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  crearDeoartamento(objeto: DepartamentoInterface){
    console.log(objeto);
  }
}
