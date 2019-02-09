import { Component, OnInit } from '@angular/core';
import {DepartamentoInterface} from "../../../../Interface/departamento-interface";
import {ObjetosAvatarInterface} from "../../../../Interface/objetos-avatar-interface";
import {ActivatedRoute, Router} from "@angular/router";
import {DepartamentoRestServiceService} from "../../../../Servicios/departamento-rest-service/departamento-rest-service.service";

@Component({
  selector: 'app-departamento-actualizar',
  templateUrl: './departamento-actualizar.component.html',
  styleUrls: ['./departamento-actualizar.component.scss']
})
export class DepartamentoActualizarComponent implements OnInit {

  departamentoActualizar: DepartamentoInterface;

  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _departamentoRest:DepartamentoRestServiceService,
    private readonly _route: Router
  ) { }

  ngOnInit() {
    const rutaActiva$ = this._activatedRoute.params;
    rutaActiva$
      .subscribe(
        (parametros) => {
          const obser$ = this._departamentoRest.findOneById(parametros.idDepartamento);
          obser$
            .subscribe(
              (objeto: DepartamentoInterface) => {
                this.departamentoActualizar = objeto;
              }
            );
        }
      );
  }

  actualizarDepartamento(departAct:DepartamentoInterface) {
    const actualizar$ = this._departamentoRest.updateOneById(departAct);
    actualizar$.subscribe(
      (objeto) => this._route.navigate((['/Administrador/gestionDepartamentos/visualizar'])),
      (error) => alert("No se a podido actualizar")
    )
  }

}
