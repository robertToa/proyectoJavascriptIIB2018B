import { Component, OnInit } from '@angular/core';
import {ConsumidorInterface} from "../../../Interface/consumidor-interface";
import {Router} from "@angular/router";
import {ConsumidorRestServiceService} from "../../../Servicios/consumidor-rest-service/consumidor-rest-service.service";

@Component({
  selector: 'app-usuario-main',
  templateUrl: './usuario-main.component.html',
  styleUrls: ['./usuario-main.component.scss']
})
export class UsuarioMainComponent implements OnInit {

  usuario: ConsumidorInterface = <ConsumidorInterface>{};
  constructor(
    private readonly _route: Router,
    private readonly _consumidorRest: ConsumidorRestServiceService,
  ) { }

  ngOnInit() {
    const idLogin = localStorage.getItem("UsuarioProyecto");
    const usuarioLogin$ = this._consumidorRest.findOneById(idLogin);
    usuarioLogin$.subscribe(
      usuario => this.usuario.username = usuario.username
    )
  }

  salir(){
    localStorage.setItem('UsuarioProyecto', null);
    this._route.navigate((['/login']));
  }

}
