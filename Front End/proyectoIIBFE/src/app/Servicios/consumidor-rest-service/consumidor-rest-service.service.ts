import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {ConsumidorInterface} from "../../Interface/consumidor-interface";

@Injectable({
  providedIn: 'root'
})
export class ConsumidorRestServiceService {

  modelo: string ="/Consumidor";
  constructor(
    private readonly _httpClient: HttpClient,
  ) { }

  findAll(): Observable<ConsumidorInterface[]> {
    return  this._httpClient
      .get(environment.url + this.modelo)
      .pipe(map(r => <ConsumidorInterface[]> r));
  }

  delete(id: number | string): Observable<ConsumidorInterface> {
    return this._httpClient
      .delete(environment.url + this.modelo + `/${id}`)
      .pipe(map(r => <ConsumidorInterface> r));
  }

  create(objeto:ConsumidorInterface): Observable<ConsumidorInterface> {
    const url = environment.url + this.modelo;
    return this._httpClient
      .post(url, objeto)
      .pipe(map(r => <ConsumidorInterface> r));
  }

  findByUsername(username:string): Observable<ConsumidorInterface[]> {
    const url = environment.url + this.modelo+'/buscarUsername';
    const objeto ={
      username: username
    };
    return this._httpClient
      .post(url, objeto)
      .pipe(map(r => <ConsumidorInterface[]> r));
  }

  findOneById(id: number | string): Observable<ConsumidorInterface> {
    const url = environment.url + this.modelo
      + '/' + id;
    return this._httpClient
      .get(url)
      .pipe(map(r => <ConsumidorInterface> r));
  }

  updateOneById(objeto:ConsumidorInterface) {
    const url = environment.url + this.modelo
      + '/' + objeto.id;
    return this._httpClient
      .put(url, objeto)
      .pipe(map(r => <ConsumidorInterface> r));
  }
}
