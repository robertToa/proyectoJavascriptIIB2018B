import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {find, map} from "rxjs/operators";
import {ConsumidorDepartamentoInterface} from "../../Interface/consumidor-departamento-interface";
import {DepartamentoInterface} from "../../Interface/departamento-interface";

@Injectable({
  providedIn: 'root'
})
export class ConsuDepartRestServiceService {

  modelo: string ="/ConsumidorDepartamento";
  constructor(
    private readonly _httpClient: HttpClient,
  ) {

  }

  findAll(): Observable<ConsumidorDepartamentoInterface[]> {
    return  this._httpClient
      .get(environment.url + this.modelo)
      .pipe(map(r => <ConsumidorDepartamentoInterface[]> r));
  }

  findAllUsuario(): Observable<ConsumidorDepartamentoInterface[]> {
    return  this._httpClient
      .get(environment.url + this.modelo)
      .pipe(map(r => <ConsumidorDepartamentoInterface[]> r));
  }

  delete(id: number | string): Observable<ConsumidorDepartamentoInterface> {
    return this._httpClient
      .delete(environment.url + this.modelo + `/${id}`)
      .pipe(map(r => <ConsumidorDepartamentoInterface> r));
  }

  create(objeto:ConsumidorDepartamentoInterface): Observable<ConsumidorDepartamentoInterface> {
    const url = environment.url + this.modelo;
    return this._httpClient
      .post(url, objeto)
      .pipe(map(r => <ConsumidorDepartamentoInterface> r));
  }

  findOneById(id: number | string): Observable<ConsumidorDepartamentoInterface> {
    const url = environment.url + this.modelo
      + '/' + id;
    return this._httpClient
      .get(url)
      .pipe(map(r => <ConsumidorDepartamentoInterface> r));
  }

  updateOneById(objeto:ConsumidorDepartamentoInterface) {
    const url = environment.url + this.modelo
      + '/' + objeto.id;
    return this._httpClient
      .put(url, objeto)
      .pipe(map(r => <ConsumidorDepartamentoInterface> r));
  }
}
