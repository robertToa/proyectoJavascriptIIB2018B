import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {map} from "rxjs/operators";
import {AccesoInterface} from "../../Interface/acceso-interface";
import {ConsumidorDepartamentoInterface} from "../../Interface/consumidor-departamento-interface";

@Injectable({
  providedIn: 'root'
})
export class AccesoConsumidorRestServiceService {

  modelo: string ="/CodigoAccesoConsumidor";
  constructor(
    private readonly _httpClient: HttpClient,
  ) { }

  findAll(): Observable<AccesoInterface[]> {
    return  this._httpClient
      .get(environment.url + this.modelo)
      .pipe(map(r => <AccesoInterface[]> r));
  }

  create(objeto:AccesoInterface): Observable<AccesoInterface> {
    const url = environment.url + this.modelo;
    return this._httpClient
      .post(url, objeto)
      .pipe(map(r => <AccesoInterface> r));
  }
}
