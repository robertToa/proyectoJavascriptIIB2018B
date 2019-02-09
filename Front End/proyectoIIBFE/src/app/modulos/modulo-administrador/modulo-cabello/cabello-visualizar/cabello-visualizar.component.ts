import { Component, OnInit } from '@angular/core';
import {ObjetosAvatarInterface} from "../../../../Interface/objetos-avatar-interface";
import {ActivatedRoute, Router} from "@angular/router";
import {ObjetoAvatarServiceService} from "../../../../Servicios/servicio-objeto-avatar/objeto-avatar-service.service";

@Component({
  selector: 'app-cabello-visualizar',
  templateUrl: './cabello-visualizar.component.html',
  styleUrls: ['./cabello-visualizar.component.scss']
})
export class CabelloVisualizarComponent implements OnInit {

  modelo:string = "/Cabello";
  cabellos: ObjetosAvatarInterface[] =[];
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
          this.cabellos = objetos;
        }
      );
  }

}
