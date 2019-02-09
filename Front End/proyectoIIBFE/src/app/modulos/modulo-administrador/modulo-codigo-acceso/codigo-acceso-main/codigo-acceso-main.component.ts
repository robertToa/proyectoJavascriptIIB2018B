import { Component, OnInit } from '@angular/core';
import {AccesoInterface} from "../../../../Interface/acceso-interface";
import {ActivatedRoute, Router} from "@angular/router";
import {AccesoConsumidorRestServiceService} from "../../../../Servicios/acceso-consumidor-rest-service/acceso-consumidor-rest-service.service";
import {ObjetosAvatarInterface} from "../../../../Interface/objetos-avatar-interface";

@Component({
  selector: 'app-codigo-acceso-main',
  templateUrl: './codigo-acceso-main.component.html',
  styleUrls: ['./codigo-acceso-main.component.scss']
})
export class CodigoAccesoMainComponent implements OnInit {

  codigos_accesos: AccesoInterface[] =[];
  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _accesoRest:AccesoConsumidorRestServiceService,
    private readonly _route: Router,
  ) { }

  ngOnInit() {
    const obsersable$ = this._accesoRest.findAll();
    obsersable$
      .subscribe(
        (objetos: AccesoInterface[]) => {
          this.codigos_accesos = objetos;
        }
      );
  }

}
