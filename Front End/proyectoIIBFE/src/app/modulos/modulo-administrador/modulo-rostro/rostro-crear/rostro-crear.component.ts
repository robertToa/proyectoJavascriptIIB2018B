import { Component, OnInit } from '@angular/core';
import {ObjetosAvatarInterface} from "../../../../Interface/objetos-avatar-interface";
import {ActivatedRoute, Router} from "@angular/router";
import {ObjetoAvatarServiceService} from "../../../../Servicios/servicio-objeto-avatar/objeto-avatar-service.service";

@Component({
  selector: 'app-rostro-crear',
  templateUrl: './rostro-crear.component.html',
  styleUrls: ['./rostro-crear.component.scss']
})
export class RostroCrearComponent implements OnInit {

  modelo:string = "/Rostro";
  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _objetoAvatarRest: ObjetoAvatarServiceService,
    private readonly _route: Router,
  ) { }

  ngOnInit() {
  }

  crearRostro(objeto: ObjetosAvatarInterface){
    const crear$ = this._objetoAvatarRest.create(objeto,this.modelo);
    crear$.subscribe(
      (objeto) => this._route.navigate((['/Administrador/gestionRostro'])),
      (error) => alert("No se a podido crear")
    )
  }
}
