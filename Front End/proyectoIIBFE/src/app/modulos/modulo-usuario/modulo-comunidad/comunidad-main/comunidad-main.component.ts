import { Component, OnInit } from '@angular/core';
import {ComunidadInterface} from "../../../../Interface/comunidad-interface";

@Component({
  selector: 'app-comunidad-main',
  templateUrl: './comunidad-main.component.html',
  styleUrls: ['./comunidad-main.component.scss']
})
export class ComunidadMainComponent implements OnInit {

  textBuscar: string ="";
  textoBuscarComunidad: string = "";
  comunidadesUsuario: ComunidadInterface[] = [];
  comunidadesNoUsuario: ComunidadInterface[] = [];
  nombreCOmunidadNueva:string ="";
  constructor() { }

  ngOnInit() {
    const comunidad: ComunidadInterface = <ComunidadInterface> {};
    comunidad.nombreComunidad ="asd";
    comunidad.id = 1;
    this.comunidadesUsuario.push(comunidad);
    this.comunidadesNoUsuario.push(comunidad);
  }

  Buscar(){

  }

  BuscarComunidadesNoUser(){

  }

  UnirseCounidad(id:number | string){

  }

  crearComunidad(){

  }

}
