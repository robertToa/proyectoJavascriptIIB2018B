import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ConsumidorInterface} from "../../Interface/consumidor-interface";
import {environment} from "../../../environments/environment";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AutenticacionRestServiceService {

  nombreModelo="/Consumidor/login"
  constructor(
    private readonly _httpClient: HttpClient
  ) { }

  Login(username: String , pass: String):Observable<ConsumidorInterface[]>{
    const Objeto ={
      username: username,
      password: pass
    }
    const usuarios$ = this._httpClient
      .post(environment.url + this.nombreModelo,Objeto)
      .pipe(map(u => <ConsumidorInterface[]> u));
    return usuarios$;
  }
}
