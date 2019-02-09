import { Component, OnInit } from '@angular/core';
import {ObjetosAvatarInterface} from "../../../../Interface/objetos-avatar-interface";
import {ActivatedRoute, Router} from "@angular/router";
import {ObjetoAvatarServiceService} from "../../../../Servicios/servicio-objeto-avatar/objeto-avatar-service.service";

@Component({
  selector: 'app-vestimenta-actualizar',
  templateUrl: './vestimenta-actualizar.component.html',
  styleUrls: ['./vestimenta-actualizar.component.scss']
})
export class VestimentaActualizarComponent implements OnInit {

  modelo:string = "/Vestimenta";
  vestimentaActualizar: ObjetosAvatarInterface;

  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _objetoAvatarRest: ObjetoAvatarServiceService,
    private readonly _route: Router
  ) { }

  ngOnInit() {
    const rutaActiva$ = this._activatedRoute.params;
    rutaActiva$
      .subscribe(
        (parametros) => {
          const evento$ = this._objetoAvatarRest.findOneById(parametros.id,this.modelo);
          evento$
            .subscribe(
              (objeto: ObjetosAvatarInterface) => {
                this.vestimentaActualizar = objeto;
              }
            );
        }
      );
  }

  actualizarVestimenta(objetoAct:ObjetosAvatarInterface) {
    const actualizar$ = this._objetoAvatarRest.updateOneById(objetoAct,this.modelo);
    actualizar$.subscribe(
      (objeto) => this._route.navigate((['/Administrador/gestionVestimenta'])),
      (error) => alert("No se a podido actualizar")
    )
  }
}
