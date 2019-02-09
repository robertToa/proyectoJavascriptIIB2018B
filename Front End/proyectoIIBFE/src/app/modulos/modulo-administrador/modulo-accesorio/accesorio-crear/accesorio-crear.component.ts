import { Component, OnInit } from '@angular/core';
import {ObjetosAvatarInterface} from "../../../../Interface/objetos-avatar-interface";
import {ActivatedRoute, Router} from "@angular/router";
import {ObjetoAvatarServiceService} from "../../../../Servicios/servicio-objeto-avatar/objeto-avatar-service.service";

@Component({
  selector: 'app-accesorio-crear',
  templateUrl: './accesorio-crear.component.html',
  styleUrls: ['./accesorio-crear.component.scss']
})
export class AccesorioCrearComponent implements OnInit {

  modelo:string = "/Accesorio";
  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _objetoAvatarRest: ObjetoAvatarServiceService,
    private readonly _route: Router,
  ) { }

  ngOnInit() {
  }

  crearAccesorio(objeto: ObjetosAvatarInterface){
    const crear$ = this._objetoAvatarRest.create(objeto,this.modelo);
    crear$.subscribe(
      (objeto) => this._route.navigate((['/Administrador/gestionAccesorio'])),
      (error) => alert("No se a podido crear")
    )
  }
}
