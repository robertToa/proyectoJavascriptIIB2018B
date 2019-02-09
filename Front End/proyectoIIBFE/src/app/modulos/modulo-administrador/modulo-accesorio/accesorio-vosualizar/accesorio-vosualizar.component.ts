import { Component, OnInit } from '@angular/core';
import {ObjetosAvatarInterface} from "../../../../Interface/objetos-avatar-interface";
import {ActivatedRoute, Router} from "@angular/router";
import {ObjetoAvatarServiceService} from "../../../../Servicios/servicio-objeto-avatar/objeto-avatar-service.service";

@Component({
  selector: 'app-accesorio-vosualizar',
  templateUrl: './accesorio-vosualizar.component.html',
  styleUrls: ['./accesorio-vosualizar.component.scss']
})
export class AccesorioVosualizarComponent implements OnInit {

  modelo:string = "/Accesorio";
  accesorios: ObjetosAvatarInterface[] =[];
  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _objetoAvatarRest: ObjetoAvatarServiceService,
    private readonly _route: Router,
  ) { }

  ngOnInit() {
    const obser$ = this._objetoAvatarRest.findAll(this.modelo);
    obser$
      .subscribe(
        (objetos: ObjetosAvatarInterface[]) => {
          this.accesorios = objetos;
        }
        );
  }

}
