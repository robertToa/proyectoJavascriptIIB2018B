import { Component, OnInit } from '@angular/core';
import {ObjetosAvatarInterface} from "../../../../Interface/objetos-avatar-interface";
import {ActivatedRoute, Router} from "@angular/router";
import {ObjetoAvatarServiceService} from "../../../../Servicios/servicio-objeto-avatar/objeto-avatar-service.service";

@Component({
  selector: 'app-cabello-actualizar',
  templateUrl: './cabello-actualizar.component.html',
  styleUrls: ['./cabello-actualizar.component.scss']
})
export class CabelloActualizarComponent implements OnInit {

  modelo:string = "/Cabello";
  cabelloActualizar: ObjetosAvatarInterface;
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
                this.cabelloActualizar = objeto;
              }
            );
        }
      );
  }

  actualizarcabello(objetoAct:ObjetosAvatarInterface) {
    const actualizar$ = this._objetoAvatarRest.updateOneById(objetoAct,this.modelo);
    actualizar$.subscribe(
      (objeto) => this._route.navigate((['/Administrador/gestionCabello'])),
      (error) => alert("No se a podido actualizar")
    )
  }
}
