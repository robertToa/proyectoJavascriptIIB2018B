import { Component, OnInit } from '@angular/core';
import {DepartamentoInterface} from "../../../../Interface/departamento-interface";

@Component({
  selector: 'app-departamento-main',
  templateUrl: './departamento-main.component.html',
  styleUrls: ['./departamento-main.component.scss']
})
export class DepartamentoMainComponent implements OnInit {

  departamentos: DepartamentoInterface[] = [];
  departamentosNoUsuario: DepartamentoInterface[] = [];
  textoBuscarDepa: string = "";
  textoBuscarNoDepa: string = "";
  idDepart: number = 0;
  numDepart: number = 0;
  constructor() { }

  ngOnInit() {
    const depart: DepartamentoInterface = <DepartamentoInterface>{};
    depart.numeroDepartamento = 12;
    depart.id = 13;
    this.departamentos.push(depart);
    this.departamentosNoUsuario.push(depart);
  }

  BuscarDepatamento(){

  }
  BuscarDepartamentoNoUsuario(){

  }

  EncenderLuces(){

  }

  SeleccionDepartamento(id: number, num: number){
    this.idDepart = id;
    this.numDepart = num;
    console.log(this.idDepart);
  }

  SolicitarAccesoDepartamento(id: number | string){

  }
}
