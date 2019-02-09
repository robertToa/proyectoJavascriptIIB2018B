import { Component, OnInit } from '@angular/core';
import {ObjetosAvatarInterface} from "../../../../Interface/objetos-avatar-interface";
import {ActivatedRoute, Router} from "@angular/router";
import {ObjetoAvatarServiceService} from "../../../../Servicios/servicio-objeto-avatar/objeto-avatar-service.service";

@Component({
  selector: 'app-vestimenta-visualizar',
  templateUrl: './vestimenta-visualizar.component.html',
  styleUrls: ['./vestimenta-visualizar.component.scss']
})
export class VestimentaVisualizarComponent implements OnInit {

  modelo:string = "/Vestimenta";
  vestimentas: ObjetosAvatarInterface[] =[];

  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _objetoAvatarRest: ObjetoAvatarServiceService,
    private readonly _route: Router,
  ) { }

  ngOnInit() {
    const evento$ = this._objetoAvatarRest.findAll(this.modelo);
    evento$
      .subscribe(
        (objetos: ObjetosAvatarInterface[]) => {
          this.vestimentas = objetos;
        }
      );
  }

}
