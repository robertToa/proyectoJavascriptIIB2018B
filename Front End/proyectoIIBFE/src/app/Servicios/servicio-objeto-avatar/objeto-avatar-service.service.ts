import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {ObjetosAvatarInterface} from "../../Interface/objetos-avatar-interface";
import {map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ObjetoAvatarServiceService {

  constructor(
    private readonly _httpClient: HttpClient,
  ) { }

  findAll(modelo:string): Observable<ObjetosAvatarInterface[]> {
    return  this._httpClient
      .get(environment.url + modelo)
      .pipe(map(r => <ObjetosAvatarInterface[]> r));
  }

  delete(id: number | string, modelo: string): Observable<ObjetosAvatarInterface> {
    return this._httpClient
      .delete(environment.url + modelo + `/${id}`)
      .pipe(map(r => <ObjetosAvatarInterface> r));
  }

  create(objeto:ObjetosAvatarInterface, modelo:string): Observable<ObjetosAvatarInterface> {
    const url = environment.url + modelo;
    return this._httpClient
      .post(url, objeto)
      .pipe(map(r => <ObjetosAvatarInterface> r));
  }

  findOneById(id: number | string, modelo: string): Observable<ObjetosAvatarInterface> {
    const url = environment.url + modelo
      + '/' + id;
    return this._httpClient
      .get(url)
      .pipe(map(r => <ObjetosAvatarInterface> r));
  }

  updateOneById(objeto:ObjetosAvatarInterface, modelo:string) {
    const url = environment.url + modelo
      + '/' + objeto.id;
    return this._httpClient
      .put(url, objeto)
      .pipe(map(r => <ObjetosAvatarInterface> r));
  }

}
