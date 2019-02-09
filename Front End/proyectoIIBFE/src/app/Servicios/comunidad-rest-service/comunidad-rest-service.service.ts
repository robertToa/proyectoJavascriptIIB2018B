import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {map} from "rxjs/operators";
import {ComunidadInterface} from "../../Interface/comunidad-interface";

@Injectable({
  providedIn: 'root'
})
export class ComunidadRestServiceService {

  modelo: string ="/Comunidad";
  constructor(
    private readonly _httpClient: HttpClient,
  ) { }

  findAll(): Observable<ComunidadInterface[]> {
    return  this._httpClient
      .get(environment.url + this.modelo)
      .pipe(map(r => <ComunidadInterface[]> r));
  }

  delete(id: number | string): Observable<ComunidadInterface> {
    return this._httpClient
      .delete(environment.url + this.modelo + `/${id}`)
      .pipe(map(r => <ComunidadInterface> r));
  }

  create(objeto:ComunidadInterface): Observable<ComunidadInterface> {
    const url = environment.url + this.modelo;
    return this._httpClient
      .post(url, objeto)
      .pipe(map(r => <ComunidadInterface> r));
  }

  findOneById(id: number | string): Observable<ComunidadInterface> {
    const url = environment.url + this.modelo
      + '/' + id;
    return this._httpClient
      .get(url)
      .pipe(map(r => <ComunidadInterface> r));
  }

  updateOneById(objeto:ComunidadInterface) {
    const url = environment.url + this.modelo
      + '/' + objeto.id;
    return this._httpClient
      .put(url, objeto)
      .pipe(map(r => <ComunidadInterface> r));
  }

}
