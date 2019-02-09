import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {map} from "rxjs/operators";
import {DepartamentoInterface} from "../../Interface/departamento-interface";

@Injectable({
  providedIn: 'root'
})
export class DepartamentoRestServiceService {

  modelo: string ="/Departamento";
  constructor(
    private readonly _httpClient: HttpClient,
  ) { }

  findAll(): Observable<DepartamentoInterface[]> {
    return  this._httpClient
      .get(environment.url + this.modelo)
      .pipe(map(r => <DepartamentoInterface[]> r));
  }

  delete(id: number | string): Observable<DepartamentoInterface> {
    return this._httpClient
      .delete(environment.url + this.modelo + `/${id}`)
      .pipe(map(r => <DepartamentoInterface> r));
  }

  create(objeto:DepartamentoInterface): Observable<DepartamentoInterface> {
    const url = environment.url + this.modelo;
    return this._httpClient
      .post(url, objeto)
      .pipe(map(r => <DepartamentoInterface> r));
  }

  findOneById(id: number | string): Observable<DepartamentoInterface> {
    const url = environment.url + this.modelo
      + '/' + id;
    return this._httpClient
      .get(url)
      .pipe(map(r => <DepartamentoInterface>r));
  }

  updateOneById(objeto:DepartamentoInterface) {
    const url = environment.url + this.modelo
      + '/' + objeto.id;
    return this._httpClient
      .put(url, objeto)
      .pipe(map(r => <DepartamentoInterface> r));
  }
}
