import { Component, OnInit } from '@angular/core';
import {ConsumidorInterface} from "../../../../Interface/consumidor-interface";
import {DepartamentoInterface} from "../../../../Interface/departamento-interface";

@Component({
  selector: 'app-scan-main',
  templateUrl: './scan-main.component.html',
  styleUrls: ['./scan-main.component.scss']
})
export class ScanMainComponent implements OnInit {

  idUsuarioSeleccion: string = "";
  idDepartamentoSeleccionado:string = "";
  usuarios: ConsumidorInterface[]=[];
  departamentos: DepartamentoInterface[] = [];
  codigo = null;
  constructor() { }

  ngOnInit() {
  }

  generarCodigo(){
    this.codigo = "hola mundo";
  }
  agregarUsuario(id: string){
    this.idUsuarioSeleccion = id;
  }
  agregarDepartamento(id: string){
    this.idDepartamentoSeleccionado = id;
  }

  guardarCodigo(){
      const canvas = document.querySelector("canvas") as HTMLCanvasElement;
      const imageData = canvas.toDataURL("image/jpeg").toString();
      const url = imageData.replace(/^data:image\/[^;]/, 'data:application/octet-stream');
      location.href = url;
  }

}
