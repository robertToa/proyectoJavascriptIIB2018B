import { Injectable } from '@angular/core';
import {AutenticacionRestServiceService} from "../Servicios/autenticacion-rest/autenticacion-rest-service.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class IsAdministradorServiceService {

  constructor(
    private readonly _autenticacionUsuario: AutenticacionRestServiceService,
    private readonly _route: Router
  ) { }

  canActivate(): boolean {
    if(localStorage.getItem("AdministradorProyecto")!= 'null'){
      return true;
    }else{
      this._route.navigate((['/AdministradorLogin']));
      return false;
    }
  }

}
