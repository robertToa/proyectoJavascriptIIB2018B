import { Component, OnInit } from '@angular/core';
import {ConsumidorDepartamentoInterface} from "../../../../Interface/consumidor-departamento-interface";
import {ActivatedRoute, Router} from "@angular/router";
import {ConsuDepartRestServiceService} from "../../../../Servicios/consu-depart-rest-service/consu-depart-rest-service.service";
import {ObjetosAvatarInterface} from "../../../../Interface/objetos-avatar-interface";

@Component({
  selector: 'app-departamento-gestion',
  templateUrl: './departamento-gestion.component.html',
  styleUrls: ['./departamento-gestion.component.scss']
})
export class DepartamentoGestionComponent implements OnInit {

  departamentosconsumidores: ConsumidorDepartamentoInterface[] = [];
  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _consudepartRest:ConsuDepartRestServiceService,
    private readonly _route: Router,
  ) {


  }

  ngOnInit() {
    const obser$ = this._consudepartRest.findAll();
    obser$
      .subscribe(
        (objetos: ConsumidorDepartamentoInterface[]) => {
          this.departamentosconsumidores = objetos;
        }
      );

  }

  eliminar(id: number|string){
    const eliminar$ = this._consudepartRest.delete(id);
    eliminar$.subscribe(
      (obj:ConsumidorDepartamentoInterface)=> {
        this.departamentosconsumidores.splice(this.departamentosconsumidores.findIndex( (m)=> m.id === obj.id),1);
      }
    );
  }

}
