import { Component, OnInit } from '@angular/core';
import {ObjetosAvatarInterface} from "../../../../Interface/objetos-avatar-interface";
import {ActivatedRoute, Router} from "@angular/router";
import {ObjetoAvatarServiceService} from "../../../../Servicios/servicio-objeto-avatar/objeto-avatar-service.service";

@Component({
  selector: 'app-cabello-crear',
  templateUrl: './cabello-crear.component.html',
  styleUrls: ['./cabello-crear.component.scss']
})
export class CabelloCrearComponent implements OnInit {

  modelo:string = "/Cabello";
  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _objetoAvatarRest: ObjetoAvatarServiceService,
    private readonly _route: Router,
  ) { }

  ngOnInit() {
  }

  crearCabello(objeto: ObjetosAvatarInterface){
    const crear$ = this._objetoAvatarRest.create(objeto,this.modelo);
    crear$.subscribe(
      (objeto) => this._route.navigate((['/Administrador/gestionCabello'])),
      (error) => alert("No se a podido crear")
    )
  }

}
