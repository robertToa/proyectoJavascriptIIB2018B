import { Component, OnInit } from '@angular/core';
import {ObjetosAvatarInterface} from "../../../../Interface/objetos-avatar-interface";
import {ActivatedRoute, Router} from "@angular/router";
import {ObjetoAvatarServiceService} from "../../../../Servicios/servicio-objeto-avatar/objeto-avatar-service.service";

@Component({
  selector: 'app-rostro-visualizar',
  templateUrl: './rostro-visualizar.component.html',
  styleUrls: ['./rostro-visualizar.component.scss']
})
export class RostroVisualizarComponent implements OnInit {

  modelo:string = "/Rostro";
  rostros: ObjetosAvatarInterface[] =[];
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
          this.rostros = objetos;
        }
      );
  }

}
