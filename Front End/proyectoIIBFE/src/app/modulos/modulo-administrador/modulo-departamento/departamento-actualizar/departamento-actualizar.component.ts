import { Component, OnInit } from '@angular/core';
import {DepartamentoInterface} from "../../../../Interface/departamento-interface";
import {ObjetosAvatarInterface} from "../../../../Interface/objetos-avatar-interface";

@Component({
  selector: 'app-departamento-actualizar',
  templateUrl: './departamento-actualizar.component.html',
  styleUrls: ['./departamento-actualizar.component.scss']
})
export class DepartamentoActualizarComponent implements OnInit {

  departamentoActualizar: DepartamentoInterface = <DepartamentoInterface> {};

  constructor() { }

  ngOnInit() {
  }

  actualizarDepartamento(departAct:DepartamentoInterface) {
    console.log(departAct);
  }

}
