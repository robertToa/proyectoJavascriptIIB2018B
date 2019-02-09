import { Component, OnInit } from '@angular/core';
import {ComunidadInterface} from "../../../../Interface/comunidad-interface";
import {ActivatedRoute, Router} from "@angular/router";
import {ComunidadRestServiceService} from "../../../../Servicios/comunidad-rest-service/comunidad-rest-service.service";

@Component({
  selector: 'app-comunidad-visualizar',
  templateUrl: './comunidad-visualizar.component.html',
  styleUrls: ['./comunidad-visualizar.component.scss']
})
export class ComunidadVisualizarComponent implements OnInit {

  comunidades: ComunidadInterface[] = [];
  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _comunidaRest:ComunidadRestServiceService,
  ) { }

  ngOnInit() {
    const evento$ = this._comunidaRest.findAll();
    evento$
      .subscribe(
        (objetos: ComunidadInterface[]) => {
          this.comunidades = objetos;
        }
      );
  }

}
