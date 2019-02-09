import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {map} from "rxjs/operators";
import {PersonaInterface} from "../../Interface/persona-interface";

@Injectable({
  providedIn: 'root'
})
export class PersonaRestServiceService {

  modelo: string ="/Persona";
  constructor(
    private readonly _httpClient: HttpClient,
  ) { }

  create(objeto:PersonaInterface): Observable<PersonaInterface> {
    const url = environment.url + this.modelo;
    return this._httpClient
      .post(url, objeto)
      .pipe(map(r => <PersonaInterface> r));
  }
}
