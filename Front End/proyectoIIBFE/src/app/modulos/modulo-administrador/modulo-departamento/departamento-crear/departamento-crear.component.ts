import { Component, OnInit } from '@angular/core';
import {DepartamentoInterface} from "../../../../Interface/departamento-interface";
import {ActivatedRoute, Router} from "@angular/router";
import {DepartamentoRestServiceService} from "../../../../Servicios/departamento-rest-service/departamento-rest-service.service";

@Component({
  selector: 'app-departamento-crear',
  templateUrl: './departamento-crear.component.html',
  styleUrls: ['./departamento-crear.component.scss']
})
export class DepartamentoCrearComponent implements OnInit {

  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _departamentoRest:DepartamentoRestServiceService,
    private readonly _route: Router,
  ) { }

  ngOnInit() {
  }

  crearDeoartamento(objeto: DepartamentoInterface){
    const crear$ = this._departamentoRest.create(objeto);
    crear$.subscribe(
      (objeto) => this._route.navigate((['/Administrador/gestionDepartamentos/visualizar'])),
      (error) => alert("No se a podido crear, verifique el departamento no exista")
    )
  }
}
