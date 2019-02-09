import { Injectable } from '@angular/core';
import {CanActivate, Router} from "@angular/router";
import {AutenticacionRestServiceService} from "../Servicios/autenticacion-rest/autenticacion-rest-service.service";

@Injectable({
  providedIn: 'root'
})
export class IsUsuarioServiceService implements CanActivate {

  constructor(
    private readonly _autenticacionUsuario: AutenticacionRestServiceService,
    private readonly _route: Router
  ) { }

  canActivate(): boolean {
    if(localStorage.getItem("UsuarioProyecto")!= 'null'){
      return true;
    }else{
      this._route.navigate((['/login']));
      return false;
    }
  }
}
