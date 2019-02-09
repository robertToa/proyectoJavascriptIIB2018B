import { Component, OnInit } from '@angular/core';
import {DepartamentoInterface} from "../../../../Interface/departamento-interface";
import {ActivatedRoute, Router} from "@angular/router";
import {ObjetoAvatarServiceService} from "../../../../Servicios/servicio-objeto-avatar/objeto-avatar-service.service";
import {DepartamentoRestServiceService} from "../../../../Servicios/departamento-rest-service/departamento-rest-service.service";
import {ObjetosAvatarInterface} from "../../../../Interface/objetos-avatar-interface";
import {ConsumidorDepartamentoInterface} from "../../../../Interface/consumidor-departamento-interface";

@Component({
  selector: 'app-departamento-visualizar',
  templateUrl: './departamento-visualizar.component.html',
  styleUrls: ['./departamento-visualizar.component.scss']
})
export class DepartamentoVisualizarComponent implements OnInit {

  departamentos: DepartamentoInterface[] = [];
  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _departamentoResy:DepartamentoRestServiceService,
    private readonly _route: Router
  ) { }

  ngOnInit() {
    const obser$ = this._departamentoResy.findAll();
    obser$
      .subscribe(
        (objetos: DepartamentoInterface[]) => {
          this.departamentos = objetos;
        }
      );
  }

  eliminarDepartamento(id: number | string){
    const eliminar$ = this._departamentoResy.delete(id);
    eliminar$.subscribe(
      (obj:DepartamentoInterface)=> {
        this.departamentos.splice(this.departamentos.findIndex( (m)=> m.id === obj.id),1);
      }
    );
  }

}
